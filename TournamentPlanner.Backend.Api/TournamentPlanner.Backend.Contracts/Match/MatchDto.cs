using System.ComponentModel.DataAnnotations;
using TournamentPlanner.Backend.Contracts.Team;

namespace TournamentPlanner.Backend.Contracts.Match;

public class MatchDto
{
    [Required]
    public Guid Id { get; set; }

    public int? Round { get; set; }

    public int? RoundOf { get; set; }

    [Required]
    public string RoundOfLabel { get; set; }

    [Required]
    public int No { get; set; }

    [Required]
    public TeamDto Home { get; set; }

    [Required]
    public TeamDto Away { get; set; }


}
