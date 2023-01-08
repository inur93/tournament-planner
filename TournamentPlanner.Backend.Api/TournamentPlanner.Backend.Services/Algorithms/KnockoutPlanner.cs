using TournamentPlanner.Backend.Domain.Entities;
using TournamentPlanner.Backend.Services.Abstractions.Algorithms;

namespace TournamentPlanner.Backend.Services.Algorithms;

public class KnockoutPlanner : IPlanningAlgorithm<Group>
{

    public int StartNo => _options.StartNo;
    public int No { get; private set; }
    public int TeamsProgressingToNextStage => _options.TeamsProgressingToNextStage;
    public int Legs => _options.Legs;
    public int Round { get; private set; }

    public PlanningOutput Output { get; private set; }
    private readonly KnockoutPlannerOptions _options;

    public KnockoutPlanner(KnockoutPlannerOptions options)
    {
        Round = options.Round;
        Output = new PlanningOutput();
        _options = options;
        Reset();
    }

    public void Reset()
    {
        No = StartNo;
        Round = _options.Round;
        Output = new PlanningOutput();
    }
    public Task<PlanningOutput> Plan(List<Group> groups)
    {
        var output = CreateCandidatesFromGroups(groups);
        // recursive to get matches for each round in the knockout phase
        return Task.FromResult(CreateCandidatesFromMatches(output.Matches));
    }

    private PlanningOutput CreateCandidatesFromGroups(List<Group> groups)
    {
        for (var i = 0; i < Math.Ceiling((decimal)groups.Count() / 2); i++)
        {
            for (var pos = 0; pos < TeamsProgressingToNextStage; pos++)
            {
                var g1 = groups.ElementAt(i);
                var g2 = groups.ElementAt(groups.Count() - 1 - i);
                var p1 = pos + 1; // + 1 to avoid position 0
                var p2 = TeamsProgressingToNextStage - pos;

                var c1 = new MatchCandidate(g1, p1);
                var c2 = new MatchCandidate(g2, p2);
                var candidates = new List<MatchCandidate> { c1, c2 };

                Output.Candidates.AddRange(candidates);
                var match = new Match(candidates)
                {
                    Round = 1,
                    Legs = Legs,
                    No = No++,
                };
                Output.Matches.Add(match);
            }
        }

        return Output;
    }

    public PlanningOutput CreateCandidatesFromMatches(List<Match> predecessors)
    {
        var count = predecessors.Count;
        if (count < 2) return Output;

        var roundMatches = new List<Match>();
        for (var i = 0; i < count / 2; i++)
        {
            var legs = predecessors[i].Legs;
            // this means it is the final and we only want one fixture for the final.
            var isLastRound = count == 2;
            var candidates = new List<MatchCandidate>
            {
                new MatchCandidate(predecessors[i]),
                new MatchCandidate(predecessors[predecessors.Count -1 -i])
            };
            
            var match = new Match(candidates)
            {
                Round = Round, 
                Legs = isLastRound ? 1 : legs,
                No = No++
            };
            Output.Candidates.AddRange(candidates);
            roundMatches.Add(match);
        }

        Round++;
        Output.Matches.AddRange(roundMatches);
        return CreateCandidatesFromMatches(roundMatches);
    }

    public class KnockoutPlannerOptions
    {
        public int TeamsProgressingToNextStage { get; set; } = 2;
        public int Legs { get; set; } = 2;
        public int StartNo { get; set; } = 1;
        public int Round { get; set; } = 1;
    }

}
