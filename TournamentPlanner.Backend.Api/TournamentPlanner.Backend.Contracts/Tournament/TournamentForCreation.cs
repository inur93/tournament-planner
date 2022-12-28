namespace TournamentPlanner.Backend.Contracts.Tournament;

public class KnockoutTournamentForCreation
{
    public int NumTeams { get; set; }
    public string Name { get; set; }
    public int NumGroups { get; set; }
    public int GroupStageLegs { get; set; }
    public int NumPromoted { get; set; }
    public int KnockoutLegs { get; set; }
}
