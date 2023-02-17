using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Fixture;

public class MatchValidation
{
    [Required]
    public int Row { get; set; }
    [Required]
    public string Column { get; set; } = "unknown";
    [Required]
    public string Message { get; set; } = string.Empty;
    [Required]
    public string FormattedMessage { get; set; } = string.Empty;
    [Required]
    public MessageLevel Level { get; set; }

}

public enum MessageLevel
{
    Info, Warning, Error
}
