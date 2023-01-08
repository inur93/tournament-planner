namespace TournamentPlanner.Backend.Domain.Entities;

public class Match
{
    public Guid Id { get; set; }

    public int Round { get; set; } = 1;

    public int No { get; set; } = 1;

    public int Legs { get; set; } = 1;

    public Guid TournamentId { get; set; }

    public ICollection<MatchCandidate> Candidates { get; set; } = new List<MatchCandidate>();
    
    public ICollection<Fixture> Fixtures { get; set; } = new List<Fixture>();
    
    public string Code => $"R{Round}M{No}";    

    public Match() { }
    public Match(List<MatchCandidate> candidates)
    {
        Candidates = candidates;
    }

    public Match(Fixture fixture) : this(new List<Fixture> { fixture })
    { }

    public Match(List<Fixture> fixtures)
    {
        Fixtures = fixtures;
    }

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