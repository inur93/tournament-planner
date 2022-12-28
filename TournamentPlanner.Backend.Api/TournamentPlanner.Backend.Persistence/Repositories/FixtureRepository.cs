using TournamentPlanner.Backend.Domain.Entities;


namespace TournamentPlanner.Backend.Domain.Repositories;

internal sealed class FixtureRepository : RepositoryBase<Fixture>, IFixtureRepository
{
    public FixtureRepository(DatabaseContext context) : base(context)
    {
    }

    public async Task<Fixture> CreateFixture(Fixture fixture, CancellationToken token)
    {
        return await Create(fixture, token);
    }

    public async Task<IEnumerable<Fixture>> CreateFixtures(IEnumerable<Fixture> fixtures, CancellationToken token)
    {
        return await Create(fixtures, token);
    }
}
