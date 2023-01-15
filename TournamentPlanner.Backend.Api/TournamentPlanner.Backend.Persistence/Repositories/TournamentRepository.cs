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
            .Include(x => x.Fixtures.OrderBy(x => x.No))
            .Include(x => x.Matches)
                .ThenInclude((Match x) => x.Candidate1)
            .Include(x => x.Matches)
                .ThenInclude((Match x) => x.Candidate2)
            .Include(x => x.Matches)
                .ThenInclude((Match x) => x.Fixtures)
            .Include(x => x.Teams)

            .FirstOrDefaultAsync(token);

        if(tournament is KnockoutTournament knockoutTournament)
        {
            await _context.Entry(knockoutTournament)
                .Collection(x => x.Groups)
                .LoadAsync(token);
        }
        
        return tournament;
    }

    public async Task<Tournament?> FindTournamentWithMatches(Guid id, CancellationToken token)
    {
        var tournament = await _set
            .Where(x => x.Id == id)
            .Include(x => x.Matches)
                .ThenInclude((Match x) => x.Fixtures)
                    .ThenInclude((Fixture x) => x.Home)
            .Include(x => x.Matches)
                .ThenInclude((Match x) => x.Fixtures)
                    .ThenInclude((Fixture x) => x.Away)
            .Include(x => x.Matches)
                .ThenInclude((Match x) => x.Candidate1)
                    .ThenInclude(x => x.Group)
            .Include(x => x.Matches)
                .ThenInclude((Match x) => x.Candidate2)
                    .ThenInclude(x => x.Group)
            .FirstOrDefaultAsync(token);
        return tournament;
    }
}
