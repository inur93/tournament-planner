using System.ComponentModel.DataAnnotations;
using TournamentPlanner.Backend.Contracts.Group;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class KnockoutTournamentDetails : TournamentDetailsDto
{
    [Required]
    public List<GroupDto> Groups { get; set; } = new List<GroupDto>();
}
