namespace TournamentPlanner.Backend.Domain.Entities;

public class KnockoutTournament : Tournament
{
    public ICollection<Group> Groups { get; set; } = new List<Group>();

    public int NumPromoted { get; set; }

    public KnockoutTournament(): base("knockout") { }
    public KnockoutTournament(string name): base("knockout", name)
    {
    }

}