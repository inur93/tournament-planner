using Mapster;
using System.Collections.ObjectModel;
using TournamentPlanner.Backend.Contracts.Match;
using TournamentPlanner.Backend.Contracts.Tournament;
using TournamentPlanner.Backend.Domain.Entities;
using TournamentPlanner.Backend.Domain.Exceptions;
using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;
using TournamentPlanner.Backend.Services.Algorithms;

namespace TournamentPlanner.Backend.Services;

internal sealed class TournamentService : ITournamentService
{

    private readonly IRepositoryManager _repositoryManager;

    public TournamentService(IRepositoryManager repositoryManager)
    {
        _repositoryManager = repositoryManager;
    }

    public async Task<TournamentDetailsDto> CreateKnockoutTournamentAsync(KnockoutTournamentForCreation forCreation, CancellationToken token = default)
    {
        var tournament = forCreation.Adapt<KnockoutTournament>();
        var teams = Team.CreateTeams(tournament, forCreation.NumTeams).ToList();

        var groupPlanner = new GroupPlanner(tournament, forCreation.NumGroups, forCreation.GroupStageLegs, 1);
        var groupOutput = await groupPlanner.Plan(teams);

        var knockoutPlanner = new KnockoutPlanner(new KnockoutPlanner.KnockoutPlannerOptions
        {
            TeamsProgressingToNextStage = forCreation.NumPromoted,
            Legs = forCreation.KnockoutLegs,
            StartNo = groupPlanner.StartNo
        });

        var knockoutOutput = await knockoutPlanner.Plan(groupOutput.Groups);
        var output = groupOutput.Add(knockoutOutput);

        tournament.Fixtures = output.Fixtures;
        tournament.Matches = output.Matches;
        tournament.Groups = output.Groups;

        var created = await SaveEntities(tournament, teams, output, token);
        return created.Adapt<KnockoutTournamentDetails>();
    }

    public async Task<LeagueDto> CreateLeagueAsync(LeagueForCreation forCreation, CancellationToken token = default)
    {
        var tournament = forCreation.Adapt<League>();
        var teams = Team.CreateTeams(tournament, forCreation.NumTeams).ToList();
        var planner = new CircleMethodPlanner(tournament, forCreation.RoundRobins, 1);

        var output = await planner.Plan(teams);

        tournament.Fixtures = output.Fixtures;
        tournament.Matches = output.Matches;

        var created = await SaveEntities(tournament, teams, output, token);

        return created.Adapt<LeagueDto>();
    }

    private async Task<Tournament> SaveEntities(Tournament tournament, List<Team> teams, PlanningOutput output, CancellationToken token)
    {
        var created = await _repositoryManager.TournamentRepository.CreateTournament(tournament, token);
        await _repositoryManager.GroupRepository.CreateGroups(output.Groups, token);
        await _repositoryManager.TeamRepository.CreateTeams(teams, token);
        await _repositoryManager.FixtureRepository.CreateFixtures(output.Fixtures, token);
        await _repositoryManager.MatchRepository.CreateMatches(output.Matches, token);
        await _repositoryManager.MatchCandidateRepository.CreateMatchCandidates(output.Candidates, token);
        await _repositoryManager.UnitOfWork.SaveChangesAsync(token);
        return created;
    }

    public async Task<IEnumerable<TournamentDto>> GetAllAsync(CancellationToken token)
    {
        var results = await _repositoryManager.TournamentRepository.FindAllTournaments(token);
        return results.Adapt<IEnumerable<TournamentDto>>();
    }

    public async Task<TournamentDetailsDto> GetByIdAsync(Guid id, CancellationToken token)
    {
        var tournament = await _repositoryManager.TournamentRepository.FindTournament(id, token);
        if (tournament == null)
        {
            throw new EntityNotFoundException(typeof(Tournament), id);
        }

        tournament.Fixtures = tournament.Fixtures
            .OrderBy(x => x.No)
            .ToList();

        tournament.Matches = tournament.Matches
            .OrderBy(x => x.No)
            .ToList();

        foreach (var team in tournament.Teams)
        {
            team.Points = GetPoints(team, tournament.Fixtures);
        }

        if (tournament is KnockoutTournament knockoutTournament)
        {
            return GetKnockTournament(knockoutTournament);
        }

        if(tournament is League league)
        {
            return GetLeague(league);
        }

        throw new Exception("Invalid tournament");
    }

    private KnockoutTournamentDetails GetKnockTournament(KnockoutTournament knockoutTournament)
    {
        knockoutTournament.Groups = knockoutTournament.Groups
               .OrderBy(x => x.ShortName)
               .ToList();

        foreach (var group in knockoutTournament.Groups)
        {
            group.Teams = group.Teams
                .OrderByDescending(x => x.Points)
                .ThenBy(x => x.Name)
                .ToList();
        }
        return knockoutTournament.Adapt<KnockoutTournamentDetails>();
    }

    private LeagueDetails GetLeague(League league)
    {
        league.Teams = league.Teams.OrderByDescending(x => x.Points)
             .ThenBy(x => x.Name)
             .ToList();
        return league.Adapt<LeagueDetails>();
    }

    private int GetPoints(Team team, ICollection<Fixture> matches)
    {
        var teamMatches = matches
            .Where(x => x.Includes(team) &&
                (x.IsDraw || x.Winner == team));
        var points = 0;
        foreach (var match in teamMatches)
        {
            if (match.IsDraw) points++;
            else points += 3;
        }
        return points;
    }

    public async Task<IEnumerable<MatchDto>> GetMatchesAsync(Guid id, CancellationToken token)
    {
        var tournament = await _repositoryManager.TournamentRepository.FindTournamentWithMatches(id, token);
        var knockoutMatches = tournament.Matches.Where(x => x.Candidates.Any()).ToList();
        
        return knockoutMatches.Adapt<IEnumerable<MatchDto>>();
    }
}