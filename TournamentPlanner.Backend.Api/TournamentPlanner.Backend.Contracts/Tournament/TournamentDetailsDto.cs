using TournamentPlanner.Backend.Contracts.Fixture;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public class TournamentDetailsDto : TournamentDto
{
    public List<FixtureDto> Fixtures { get; set; } = new List<FixtureDto>();
}
