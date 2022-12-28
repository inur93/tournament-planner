namespace TournamentPlanner.Backend.Domain.Entities;

public class Match
{
    public Match() { }
    public Match(List<MatchCandidate> candidates, int round, int legs)
    {
        Candidates = candidates;
        Round = round;
        Legs = legs;
    }

    public Match(List<Fixture> fixtures)
    {
        Fixtures = fixtures;
    }

    public ICollection<MatchCandidate> Candidates { get; set; } = new List<MatchCandidate>();
    public ICollection<Fixture> Fixtures { get; set; } = new List<Fixture>();
    public int Round { get; set; }
    public int Legs { get; set; }

    internal bool Finished()
    {
        return Fixtures.Any() && Fixtures.All(x => x.Finished());
    }

    public ICollection<Team> GetTeams()
    {
        return Fixtures
            .Select(x => new List<Team> { x.Home, x.Away })
            .SelectMany(x => x)
            .DistinctBy(x => x.Id)
            .ToList();
    }
}