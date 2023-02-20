using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class KnockoutStage
{
    [Required]
    public int Legs { get; set; }

}
