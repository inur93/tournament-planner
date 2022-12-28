using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Services;
//

/// <summary>
/// Planning using the circle method https://en.wikipedia.org/wiki/Round-robin_tournament
/// </summary>
public class CircleMethodPlanner
{
    public static CircleMethodPlanner Create(Tournament tournament, IEnumerable<Team> teams, int roundRobins)
    {
        return new CircleMethodPlanner(tournament, teams, roundRobins);
    }
    private CircleMethodPlanner(Tournament tournament, IEnumerable<Team> teams, int roundRobins)
    {
        Tournament = tournament;
        Teams = new List<Team>(teams);
        RoundRobins = roundRobins;
        if (Teams.Count % 2 != 0)
        {
            ByeTeam = new Team("Bye");
            Teams.Add(ByeTeam);
        }
    }

    public Tournament Tournament { get; }
    public List<Team> Teams { get; }
    private Team? ByeTeam { get; }
    public int RoundRobins { get; }

    public IEnumerable<Fixture> Plan()
    {
        var n = Teams.Count % 2 == 0 ? Teams.Count : Teams.Count + 1;

        var round = Enumerable.Range(0, n * RoundRobins).ToArray();

        for (var r = 0; r < (n - 1) * RoundRobins; r++)
        {
            for (var i = 0; i < n / 2; i++)
            {
                var home = Teams[round[i]];
                var away = Teams[round[n - i - 1]];

                //alternate home/away games
                var fixture = i == 0 && r % 2 == 0 ?
                    new Fixture(Tournament, home, away) :
                    new Fixture(Tournament, away, home);

                if (!fixture.Includes(ByeTeam))
                {
                    yield return fixture;
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
    }
}
