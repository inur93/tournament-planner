namespace TournamentPlanner.Backend.Domain.Entities;

public class Tournament
{
    public Tournament() { }

    public Tournament(string tournamentType)
    {
        TournamentType = tournamentType;
    }
    public Tournament(string tournamentType, string name)
    {
        TournamentType = tournamentType;
        Name = name;
    }

    public Guid Id { get; set; }

    public string Name { get; set; }
    public ICollection<Fixture> Fixtures { get; set; } = new List<Fixture>();
    public DateTime? Date { get; set; }

    /// <summary>
    /// This is the discriminator helping EF to determine 
    /// if the tournament is a league or knockout tournament etc..
    /// </summary>
    public string TournamentType { get; set; }
    
}