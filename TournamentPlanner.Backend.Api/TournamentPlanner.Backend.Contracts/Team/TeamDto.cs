using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Team;

public class TeamDto
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public int Points { get; set; }
}
