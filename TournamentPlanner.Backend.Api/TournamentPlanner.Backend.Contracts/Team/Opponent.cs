using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Team;

public class Opponent
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public OpponentType Type { get; set; }
}
