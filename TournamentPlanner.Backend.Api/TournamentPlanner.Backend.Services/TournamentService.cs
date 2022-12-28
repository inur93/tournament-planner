using Mapster;
using TournamentPlanner.Backend.Contracts.Tournament;
using TournamentPlanner.Backend.Domain.Entities;
using TournamentPlanner.Backend.Domain.Exceptions;
using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Services;

internal sealed class TournamentService : ITournamentService
{

    private readonly IRepositoryManager _repositoryManager;

    public TournamentService(IRepositoryManager repositoryManager)
    {
        _repositoryManager = repositoryManager;
    }

    public async Task<KnockoutTournamentDto> CreateKnockoutTournamentAsync(KnockoutTournamentForCreation forCreation, CancellationToken token = default)
    {
        var tournament = forCreation.Adapt<KnockoutTournament>();
        var teams = Team.CreateTeams(forCreation.NumTeams).ToList();
        tournament.Groups = CreateGroups(tournament, teams, forCreation.NumGroups, forCreation.GroupStageLegs)
            .ToList();

        tournament.Fixtures = tournament.Groups
            .SelectMany(x => x.Fixtures)
            .ToList();

        tournament.Knockouts = new KnockoutPlanner().Plan(tournament.Groups, forCreation.NumPromoted, forCreation.KnockoutLegs);

        var created = await _repositoryManager.TournamentRepository.CreateTournament(tournament, token);
        await _repositoryManager.GroupRepository.CreateGroups(tournament.Groups, token);
        await _repositoryManager.TeamRepository.CreateTeams(teams, token);
        await _repositoryManager.FixtureRepository.CreateFixtures(tournament.Fixtures, token);

        await _repositoryManager.UnitOfWork.SaveChangesAsync(token);

        return created.Adapt<KnockoutTournamentDto>();
    }

    public async Task<LeagueDto> CreateLeagueAsync(LeagueForCreation forCreation, CancellationToken token = default)
    {
        var tournament = forCreation.Adapt<League>();
        var teams = Team.CreateTeams(forCreation.NumTeams);
        tournament.Fixtures = CircleMethodPlanner
            .Create(tournament, teams, forCreation.RoundRobins)
            .Plan()
            .ToList();

        var created = await _repositoryManager.TournamentRepository.CreateTournament(tournament, token);
        await _repositoryManager.UnitOfWork.SaveChangesAsync(token);
        return created.Adapt<LeagueDto>();
    }

    public async Task<IEnumerable<TournamentDto>> GetAllAsync(CancellationToken token)
    {
        var results = await _repositoryManager.TournamentRepository.FindAllTournaments(token);
        return results.Adapt<IEnumerable<TournamentDto>>();
    }

    public async Task<TournamentDetailsDto> GetByIdAsync(Guid id, CancellationToken token)
    {
        var result = await _repositoryManager.TournamentRepository.FindTournament(id, token);
        if(result == null)
        {
            throw new EntityNotFoundException(typeof(Tournament), id);
        }
        return result.Adapt<TournamentDetailsDto>();
    }

    public static IEnumerable<Group> CreateGroups(Tournament tournament, IEnumerable<Team> teamPool, int num, int roundRobins)
    {
        var groupSize = (int)Math.Ceiling((double)teamPool.Count() / num);
        for (var i = 0; i < num; i++)
        {
            var teams = teamPool.Skip(groupSize * i).Take(groupSize).ToList();
            var fixtures = CircleMethodPlanner
                .Create(tournament, teams, roundRobins)
                .Plan()
                .ToList();

            yield return new Group($"Group {i + 1}")
            {
                Teams = teams,
                Fixtures = fixtures
            };
        }
    }

}