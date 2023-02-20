using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Fixture;

public class UpdateScoreDto
{
    [Required]
    public int HomeScore { get; set; }

    [Required]
    public int AwayScore { get; set; }
}
