namespace TournamentPlanner.Backend.Domain.Entities;

public class KnockoutTournament : Tournament
{
    public KnockoutTournament(): base("knockout") { }
    public KnockoutTournament(string name): base("knockout", name)
    {
    }

    public ICollection<Group> Groups { get; set; } = new List<Group>();
    public ICollection<Match> Knockouts { get; set; } = new List<Match>();
    public int NumPromoted { get; set; }
}