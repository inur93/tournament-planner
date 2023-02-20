using System.ComponentModel.DataAnnotations;
using TournamentPlanner.Backend.Contracts.Team;

namespace TournamentPlanner.Backend.Contracts.Fixture;

public class FixtureDto
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public int No { get; set; }

    public DateTime? DateTime { get; set; }

    public int? HomeScore { get; set; }

    public int? AwayScore { get; set; }

    [Required]
    public TeamDto Home { get; set; }

    [Required]
    public TeamDto Away { get; set; }
}
