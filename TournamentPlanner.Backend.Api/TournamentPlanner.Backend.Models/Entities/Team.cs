namespace TournamentPlanner.Backend.Domain.Entities;

public class Team
{
    public Team() { }
    public Team(string name)
    {
        Name = name;
    }

    public Guid Id { get; set; }
    public string Name { get; set; }



    public static IEnumerable<Team> CreateTeams(int numTeams, string? prefix = null)
    {
        for (var i = 0; i < numTeams; i++)
        {
            yield return new Team(string.IsNullOrEmpty(prefix) ? $"Team {i + 1}" : $"{prefix} Team {i + 1}");
        }
    }
}