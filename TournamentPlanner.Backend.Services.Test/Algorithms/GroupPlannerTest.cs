using System.Linq;
using System.Threading.Tasks;
using TournamentPlanner.Backend.Domain.Entities;
using TournamentPlanner.Backend.Services.Algorithms;
using Xunit;

namespace TournamentPlanner.Backend.Services.Test.Algorithms;

public class GroupPlannerTest
{
    [Theory]
    [InlineData(4, 16, 24)]
    [InlineData(2, 16, 56)]
    public async Task PlanWithEvenNumbers(int numGroups, int numTeams, int numFixtures)
    {
        var tournament = new KnockoutTournament();
        var teams = Team.CreateTeams(tournament, numTeams).ToList();
        var algorithm = new GroupPlanner(tournament, numGroups, 1, 1);
        var output = await algorithm.Plan(teams);

        Assert.Equal(numGroups, output.Groups.Count);
        Assert.Equal(numFixtures, output.Fixtures.Count);
        foreach(var group in output.Groups)
        {
            Assert.Equal(numTeams / numGroups, group.Teams.Count);
        }
    }

    [Fact]
    public async Task PlanWithUnEvenNumbers()
    {
        var tournament = new KnockoutTournament();
        var teams = Team.CreateTeams(tournament, 15).ToList();
        var algorithm = new GroupPlanner(tournament, 4, 1, 1);
        var output = await algorithm.Plan(teams);

        Assert.Equal(4, output.Groups.Count);
        Assert.Equal(21, output.Fixtures.Count);
    }
}
