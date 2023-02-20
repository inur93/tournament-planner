using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Team;

public class UpdateTeam
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }
}
