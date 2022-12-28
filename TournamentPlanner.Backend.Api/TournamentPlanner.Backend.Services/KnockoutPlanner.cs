using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Services;

public class KnockoutPlanner
{
    public List<Match> Plan(ICollection<Group> groups, int numProgressToNextStage, int legs)
    {
        if (groups.Any(x => x.Teams.Count < numProgressToNextStage))
        {
            //TODO
            throw new Exception("Invalid tournament");
        }

        var matches = new List<Match>();
        for (var i = 0; i < Math.Ceiling((decimal)groups.Count() / 2); i++)
        {
            for (var pos = 0; pos < numProgressToNextStage; pos++)
            {
                var g1 = groups.ElementAt(i);
                var g2 = groups.ElementAt(groups.Count() - 1 - i);
                var p1 = pos + 1; // + 1 to avoid position 0
                var p2 = numProgressToNextStage - pos;

                var match = new Match(
                    new List<MatchCandidate>
                {
                    new MatchCandidate(g1, p1),
                    new MatchCandidate(g2, p2)
                }, 1, legs);

                matches.Add(match);
            }
        }

        var numTeams = groups.Count() * numProgressToNextStage;

        // 16
        var rounds = (int) Math.Floor(Math.Log(numTeams, 2));
        if (Math.Pow(2, rounds) < numTeams)
        {
            throw new Exception("Can't handle knockout stages with number of teams not a multiplication of 2");
        }

        CreateKnockoutMatches(matches, 2, rounds, matches);

        return matches;
    }

    public void CreateKnockoutMatches(
        List<Match> predecessors,
        int round,
        int numRounds,
        List<Match> matches)
    {

        if (round > numRounds) return;

        var roundMatches = new List<Match>();
        for (var i = 0; i < predecessors.Count / 2; i++)
        {
            var legs = predecessors[i].Legs;
            var isLastRound = round == numRounds;
            roundMatches.Add(new Match(new List<MatchCandidate>
            {
                new MatchCandidate(predecessors[i]),
                new MatchCandidate(predecessors[predecessors.Count -1 -i])
            }, round, isLastRound ? 1 : legs));
        }

        matches.AddRange(roundMatches);

        CreateKnockoutMatches(roundMatches, round + 1, numRounds, matches);
    }


}
