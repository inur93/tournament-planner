using TournamentPlanner.Backend.Contracts.Fixture;

namespace TournamentPlanner.Backend.Services.Abstractions;

public interface IFixtureService
{
    Task<FixtureDto> UpdateScore(Guid id, UpdateScoreDto update, CancellationToken token = default);
}
