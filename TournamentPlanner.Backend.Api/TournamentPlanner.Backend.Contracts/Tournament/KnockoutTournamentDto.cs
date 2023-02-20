using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class KnockoutTournamentDto
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public DateTime Date { get; set; }

    [Required]
    public string TournamentType { get; set; }

    [Required]
    public int NumPromoted { get; set; }
}
