using TournamentPlanner.Backend.Domain.Entities;
using TournamentPlanner.Backend.Services.Abstractions.Algorithms;
using MatchType = TournamentPlanner.Backend.Domain.Entities.MatchType;

namespace TournamentPlanner.Backend.Services.Algorithms;

public class GroupPlanner : IPlanningAlgorithm<Team>
{
    public GroupPlanner(Tournament tournament, int numGroups, int roundRobins, int startNo)
    {
        Tournament = tournament;
        NumGroups = numGroups;
        StartNo = startNo;
        PlanningAlgorithm = new CircleMethodPlanner(tournament, MatchType.Group, roundRobins, startNo);
    }

    /// <summary>
    /// Uses the circlemethod as default planner
    /// </summary>
    public IPlanningAlgorithm<Team> PlanningAlgorithm { get; set; }
    public Tournament Tournament { get; }
    public int NumGroups { get; }
    public int StartNo { get; }

    public async Task<PlanningOutput> Plan(List<Team> teams)
    {
        var output = new PlanningOutput();
        var groupSize = (int)Math.Ceiling((double)teams.Count / NumGroups);

        for (var i = 0; i < NumGroups; i++)
        {
            var groupTeams = teams
                .Skip(groupSize * i)
                .Take(groupSize)
                .ToList();


            var groupOutput = await PlanningAlgorithm.Plan(groupTeams);
            output.Add(groupOutput);
            var group = new Group($"{i + 1}", $"Group {i + 1}")
            {
                Teams = groupTeams,
                Matches = groupOutput.Matches,
                Tournament = Tournament,
            };
            output.Groups.Add(group);
        }

        return output;
    }
}
