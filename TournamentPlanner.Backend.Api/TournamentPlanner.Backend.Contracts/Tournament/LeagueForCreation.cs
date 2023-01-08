using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class LeagueForCreation
{
    [Required]
    public int NumTeams { get; set; }

    [Required]
    public int RoundRobins { get; set; }
}
