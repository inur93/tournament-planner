namespace TournamentPlanner.Backend.Domain.Entities;

public abstract class Tournament
{
    public Guid Id { get; set; }

    public string Name { get; set; }

    public DateTime Date { get; set; }

    public ICollection<Fixture> Fixtures { get; set; } = new List<Fixture>();
    
    public ICollection<Match> Matches { get; set; } = new List<Match>();

    public ICollection<Team> Teams { get; set; } = new List<Team>();
    

    /// <summary>
    /// This is the discriminator helping EF to determine 
    /// if the tournament is a league or knockout tournament etc..
    /// </summary>
    public string TournamentType { get; set; }
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
}