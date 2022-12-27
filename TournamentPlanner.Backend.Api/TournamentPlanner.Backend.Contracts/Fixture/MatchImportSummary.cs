using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Fixture;

public class MatchImportSummary
{
    [Required]
    public int MatchesCreated { get; set; }
    [Required]
    public int TeamsCreated { get; set; }
    [Required]
    public List<MatchValidation> Messages { get; set; } = new List<MatchValidation>();
    [Required]
    public int Errors => Messages.Count(x => x.Level == MessageLevel.Error);
    [Required]
    public int Warnings => Messages.Count(x => x.Level == MessageLevel.Warning);
}
