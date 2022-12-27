using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Fixture;

public class ImportMatch
{

    [Required]
    public int SeasonId { get; set; }

    [Required]
    public int CompetitionId { get; set; }
    
    [Required]
    public DateTime DateTime { get; set; }
    public string HomeTeamName { get; set; } = "unknown";
    public string AwayTeamName { get; set; } = "unknown";
    public string Location { get; set; } = "unknown";
}