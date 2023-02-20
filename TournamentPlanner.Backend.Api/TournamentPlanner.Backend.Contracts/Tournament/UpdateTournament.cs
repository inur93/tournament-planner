using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class UpdateTournament
{
    [Required]
    public string Name { get; set; }

    [Required]
    public DateTime Date { get; set; }
}
