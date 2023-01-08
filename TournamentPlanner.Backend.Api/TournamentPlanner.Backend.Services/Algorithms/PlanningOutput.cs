using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Services;

public class PlanningOutput
{
    public List<Match> Matches { get; } = new List<Match>();

    public List<Fixture> Fixtures { get; } = new List<Fixture>();

    public List<Group> Groups { get; } = new List<Group>();

    public List<MatchCandidate> Candidates { get; } = new List<MatchCandidate>();

    public PlanningOutput Add(PlanningOutput other)
    {
        Matches.AddRange(other.Matches);
        Fixtures.AddRange(other.Fixtures);
        Groups.AddRange(other.Groups);
        Candidates.AddRange(other.Candidates);
        return this;
    }
}
