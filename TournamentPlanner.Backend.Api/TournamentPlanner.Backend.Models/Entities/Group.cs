namespace TournamentPlanner.Backend.Domain.Entities;

public class Group
{
    public Group() { }
    public Group(string name)
    {
        Name = name;
    }

    public Guid Id { get; set; }
    public ICollection<Team> Teams { get; set; } = new List<Team>();
    public string Name { get; set; }
    public ICollection<Fixture> Fixtures { get; set; }
    
}