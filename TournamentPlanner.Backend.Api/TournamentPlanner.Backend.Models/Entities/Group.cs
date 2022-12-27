namespace TournamentPlanner.Backend.Domain.Entities;

public class Group
{
    public Group(string name)
    {
        Name = name;
    }

    public List<Team> Teams { get; set; } = new List<Team>();
    public string Name { get; }
    public List<Fixture> Fixtures { get; set; }
}