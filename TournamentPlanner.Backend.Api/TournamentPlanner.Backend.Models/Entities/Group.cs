namespace TournamentPlanner.Backend.Domain.Entities;

public class Group
{
    public Guid Id { get; set; }
    
    public string ShortName { get; set; }
    
    public string Name { get; set; }
    
    public Tournament Tournament { get; set; }
    
    public ICollection<Team> Teams { get; set; } = new List<Team>();
    
    public ICollection<Match> Matches { get; set; }

    //public IEnumerable<Fixture> Fixtures => Matches.SelectMany(x => x.Fixtures);

    public Group() { }
    public Group(string shortName, string name)
    {
        ShortName = shortName;
        Name = name;
    }

    public List<MatchCandidate> GetCandidates(int num)
    {
        var candidates = new List<MatchCandidate>();
        for(var i = 0; i < num; i++)
        {
            candidates.Add(new MatchCandidate(this, i + 1));
        }
        return candidates;
    }

}