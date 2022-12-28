using TournamentPlanner.Backend.Contracts.Team;

namespace TournamentPlanner.Backend.Contracts.Fixture;

public class FixtureDto
{
    public Guid Id { get; set; }
    public int? HomeScore { get; set; }
    public int? AwayScore { get; set; }

    public TeamDto Home { get; set; }
    public TeamDto Away { get; set; }
}
