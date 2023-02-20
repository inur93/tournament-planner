using TournamentPlanner.Backend.Domain.Entities;
using TournamentPlanner.Backend.Services.Abstractions.Algorithms;
using MatchType = TournamentPlanner.Backend.Domain.Entities.MatchType;

namespace TournamentPlanner.Backend.Services.Algorithms;
//

/// <summary>
/// Planning using the circle method https://en.wikipedia.org/wiki/Round-robin_tournament
/// </summary>
public class CircleMethodPlanner : IPlanningAlgorithm<Team>
{
    public CircleMethodPlanner(Tournament tournament, MatchType matchType, int roundRobins, int startNo)
    {
        Tournament = tournament;
        RoundRobins = roundRobins;
        StartNo = startNo;
        FixtureNo = startNo;
        ByeTeam = new Team("Bye");
        MatchType = matchType;
    }

    public Tournament Tournament { get; }

    public MatchType MatchType { get; }
    private Team ByeTeam { get; }
    public int RoundRobins { get; }
    public int StartNo { get; }
    public int FixtureNo { get; private set; }

    public Task<PlanningOutput> Plan(List<Team> teams)
    {
        // make a copy, so we don't modify the input list
        var Teams = teams.ToList();
        if (Teams.Count % 2 != 0)
        {
            Teams.Add(ByeTeam);
        }

        var output = new PlanningOutput();
        var n = Teams.Count % 2 == 0 ? Teams.Count : Teams.Count + 1;
        var round = Enumerable.Range(0, RoundRobins * n).ToArray();
        for (var r = 0; r < (n - 1) * RoundRobins; r++)
        {
            for (var i = 0; i < n / 2; i++)
            {
                var home = Teams[round[i]] as Team;
                var away = Teams[round[n - i - 1]] as Team;

                if (home == null || away == null)
                {
                    throw new Exception("Invalid algorithm input. Only teams are supported as input");
                }

                //alternate home/away games
                var fixture = i == 0 && r % 2 == 0 ?
                    new Fixture(Tournament, FixtureNo++, home, away) :
                    new Fixture(Tournament, FixtureNo++, away, home);

                if (!fixture.Includes(ByeTeam))
                {
                    var match = new Match(fixture)
                    {
                        Round = r + 1,
                        No = fixture.No,
                        Type = MatchType
                    };
                    output.Fixtures.Add(fixture);
                    output.Matches.Add(match);
                }
            }

            var tmp = -1;
            for (var i = 1; i <= n + 1; i++)
            {
                var next = i + 1 >= n ? 1 : i + 1;
                if (i == 1)
                {
                    tmp = round[next];
                    round[next] = round[i];
                }
                else
                {
                    var tmp1 = round[next];
                    round[next] = tmp;
                    tmp = tmp1;
                }
            }
        }
        return Task.FromResult(output);
    }
}
