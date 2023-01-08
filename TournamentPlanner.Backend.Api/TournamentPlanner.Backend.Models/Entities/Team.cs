namespace TournamentPlanner.Backend.Domain.Entities;

public class Team
{
    public Guid Id { get; set; }

    public string Name { get; set; }

    public int Points { get; set; }

    public ICollection<Tournament> Tournaments { get; set; }

    public Team() { }

    public Team(string name)
    {
        Name = name;
    }

    public static IEnumerable<Team> CreateTeams(Tournament tournament, int numTeams, string? prefix = null)
    {
        for (var i = 0; i < numTeams; i++)
        {
            var name = string.IsNullOrEmpty(prefix) ? $"Team {i + 1}" : $"{prefix} Team {i + 1}";
            yield return new Team(name)
            {
                Tournaments = new List<Tournament> { tournament }
            };
        }
    }
}