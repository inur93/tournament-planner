using Microsoft.EntityFrameworkCore;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

internal sealed class TournamentRepository : RepositoryBase<Tournament>, ITournamentRepository
{
    public TournamentRepository(DatabaseContext context) : base(context)
    {
    }

    public async Task<Tournament> CreateTournament(Tournament tournament, CancellationToken token)
    {
        return await Create(tournament, token);
    }

    public async Task<IEnumerable<Tournament>> FindAllTournaments(CancellationToken token)
    {
        return await FindAll(token)
            .OrderByDescending(x => x.Date)
            .ToListAsync(token);
    }

    public async Task<Tournament?> FindTournament(Guid id, CancellationToken token)
    {
        var tournament = await _set
            .Where(x => x.Id == id)
            .Include(x => x.Fixtures)
            .ThenInclude((Fixture f) => f.Away)
            .Include(x => x.Fixtures)
            .ThenInclude((Fixture f) => f.Home)
            .FirstOrDefaultAsync(token);

        return tournament;
    }
}
