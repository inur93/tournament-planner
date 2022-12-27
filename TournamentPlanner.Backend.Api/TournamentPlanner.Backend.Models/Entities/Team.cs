namespace TournamentPlanner.Backend.Domain.Entities;

public class Team
{
    public Team(string name)
    {
        Name = name;
    }

    public Guid Id { get; set; }
    public string Name { get; }
}