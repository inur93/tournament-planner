using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Match;

public class MatchCandidateDto
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

}
