namespace TournamentPlanner.Backend.Domain.Entities;

public class Group
{
    public Guid Id { get; set; }

    public string ShortName { get; set; }

    public string Name { get; set; }

    public Tournament Tournament { get; set; }

    public ICollection<Team> Teams { get; set; } = new List<Team>();

    public ICollection<Match> Matches { get; set; }

    public bool Finished
    {
        get
        {
            return Matches.All(x => x.Finished);
        }
    }
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
        for (var i = 0; i < num; i++)
        {
            candidates.Add(new MatchCandidate(this, i + 1));
        }
        return candidates;
    }

    internal Team TeamInPosition(int position)
    {
        if(Teams.Any(x => !x.PointsSet))
        {
            throw new InvalidOperationException("Points have to be calculated before finding a teams position");
        }

        return Teams.OrderByDescending(x => x.Points).ElementAt(position);
    }
}