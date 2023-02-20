using Microsoft.EntityFrameworkCore;
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

    public async Task<Fixture?> FindById(Guid id, CancellationToken token)
    {
        var query = FindByCondition(x => x.Id== id);
        return await query.FirstOrDefaultAsync();
    }

    public async Task<Fixture> UpdateFixtureAsync(Fixture fixture, CancellationToken token)
    {
        return await Update(fixture, token);
    }
}
