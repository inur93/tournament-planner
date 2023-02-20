using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

public interface IFixtureRepository
{
    Task<Fixture> CreateFixture(Fixture fixture, CancellationToken token);
    Task<IEnumerable<Fixture>> CreateFixtures(IEnumerable<Fixture> fixtures, CancellationToken token);

    Task<Fixture?> FindById(Guid id, CancellationToken token);
    Task<Fixture> UpdateFixtureAsync(Fixture fixture, CancellationToken token);
}