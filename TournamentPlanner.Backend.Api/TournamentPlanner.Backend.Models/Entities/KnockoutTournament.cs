namespace TournamentPlanner.Backend.Domain.Entities;

public class KnockoutTournament : Tournament
{
    public List<Group> Groups { get; set; }
    public List<KnockoutMatch> Knockouts { get; set; }
    public int NumPromoted { get; set; }
}