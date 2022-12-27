using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Services;

public class TournamentPlanner
{
    private readonly KnockoutPlanner knockoutPlanner;

    public TournamentPlanner()
    {
        knockoutPlanner = new KnockoutPlanner();
    }

    public KnockoutTournament CreateKnockoutTournament(
        KnockoutTournament tournament, 
        int numTeams, 
        int numGroups, 
        int groupStageLegs, 
        int knockoutLegs)
    {
        var teams = CreateTeams(numTeams).ToList();
        tournament.Groups = CreateGroups(tournament, teams, numGroups, groupStageLegs).ToList();
        tournament.Knockouts = knockoutPlanner.Plan(tournament.Groups, tournament.NumPromoted, knockoutLegs);
        
        return tournament;
    }

    public League CreateLeague(League league, int numTeams, int numRoundRobins)
    {
        var teams = CreateTeams(numTeams).ToList();
        league.Fixtures = CreateFixtures(league, teams, numRoundRobins).ToList();
        return league;
    }

    private static IEnumerable<Team> CreateTeams(int numTeams, string? prefix = null)
    {
        for (var i = 0; i < numTeams; i++)
        {
            yield return new Team(string.IsNullOrEmpty(prefix) ? $"Team {i + 1}" : $"{prefix} Team {i + 1}");
        }
    }

    private IEnumerable<Group> CreateGroups(Tournament tournament, IEnumerable<Team> teamPool, int num, int roundRobins)
    {
        var groupSize = (int)Math.Ceiling((double)teamPool.Count() / num);
        for (var i = 0; i < num; i++)
        {
            var teams = teamPool.Skip(groupSize * i).Take(groupSize).ToList();
            var fixtures = CreateFixtures(tournament, teams, roundRobins).ToList();
            //TODO create fixtures i DB
            yield return new Group($"Group {i + 1}")
            {
                Teams = teams,
                Fixtures = fixtures
            };
        }
    }

    private IEnumerable<Fixture> CreateFixtures(Tournament tournament, IEnumerable<Team> teams, int roundRobins)
    {
        return new CircleMethodPlanner(tournament, teams, roundRobins).Plan();
    }
}

