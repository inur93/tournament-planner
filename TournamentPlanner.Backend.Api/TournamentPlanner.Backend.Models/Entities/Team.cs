namespace TournamentPlanner.Backend.Domain.Entities;

public class Team
{
    public Guid Id { get; set; }

    public string Name { get; set; }


    private int _points = 0;

    public bool PointsSet { get; private set; }

    public int Points
    {
        get => _points;
        set
        {
            _points = value;
            PointsSet = true;
        }
    }

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