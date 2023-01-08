using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class KnockoutTournamentForCreation
{
    [Required]
    public int NumTeams { get; set; }
    
    [Required]
    public string Name { get; set; }

    [Required]
    public DateTime Date { get; set; }

    [Required] 
    public int NumGroups { get; set; }

    [Required] 
    public int GroupStageLegs { get; set; }
    
    [Required]
    public int NumPromoted { get; set; }
    
    [Required]
    public int KnockoutLegs { get; set; }
}
