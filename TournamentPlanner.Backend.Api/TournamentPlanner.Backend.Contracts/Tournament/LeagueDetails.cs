using System.ComponentModel.DataAnnotations;
using TournamentPlanner.Backend.Contracts.Team;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class LeagueDetails : TournamentDetailsDto
{
    [Required]
    public List<TeamDto> Teams { get; set; }
}
