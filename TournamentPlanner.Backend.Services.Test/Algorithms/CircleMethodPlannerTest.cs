using System.Linq;
using System.Threading.Tasks;
using TournamentPlanner.Backend.Domain.Entities;
using TournamentPlanner.Backend.Services.Algorithms;
using Xunit;

namespace TournamentPlanner.Backend.Services.Test.Algorithms;

public class CircleMethodPlannerTest
{
    [Theory]
    [InlineData(1, 6)]
    [InlineData(2, 12)]
    public async Task PlanKnockoutGroupFixtures(int roundRobins, int expectedFixtures)
    {
        var tournament = new KnockoutTournament();
        var teams = Team.CreateTeams(tournament, 4).ToList();
        var algorithm = new CircleMethodPlanner(tournament, MatchType.League, roundRobins, 1);
        var output = await algorithm.Plan(teams);

        Assert.Equal(expectedFixtures, output.Fixtures.Count);
        Assert.Equal(expectedFixtures, output.Matches.Count);
        Assert.Equal(output.Matches.Max(x => x.No), expectedFixtures);
        Assert.Equal(output.Fixtures.Max(x => x.No), expectedFixtures);
    }

    [Theory]
    [InlineData(1, 6)]
    [InlineData(2, 12)]
    public async Task PlanLeagueFixtures(int roundRobins, int expectedFixtures)
    {
        var tournament = new League();
        var teams = Team.CreateTeams(tournament, 4).ToList();
        var algorithm = new CircleMethodPlanner(tournament, MatchType.League, roundRobins, 1);
        var output = await algorithm.Plan(teams);

        Assert.Equal(expectedFixtures, output.Fixtures.Count);
        Assert.Equal(expectedFixtures, output.Matches.Count);
        Assert.Equal(output.Matches.Max(x => x.No), expectedFixtures);
        Assert.Equal(output.Fixtures.Max(x => x.No), expectedFixtures);
    }
}
