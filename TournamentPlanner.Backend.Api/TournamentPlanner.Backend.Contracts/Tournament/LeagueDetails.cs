using TournamentPlanner.Backend.Contracts.Team;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class LeagueDetails : TournamentDetailsDto
{
    public List<TeamDto> Teams { get; set; }
}
