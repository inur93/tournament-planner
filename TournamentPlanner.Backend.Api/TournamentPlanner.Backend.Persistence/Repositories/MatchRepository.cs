using Microsoft.EntityFrameworkCore;
using TournamentPlanner.Backend.Domain.Entities;


namespace TournamentPlanner.Backend.Domain.Repositories;

internal sealed class MatchRepository : RepositoryBase<Match>, IMatchRepository
{
    public MatchRepository(DatabaseContext context) : base(context)
    {
    }

    public async Task<Match> CreateMatch(Match match, CancellationToken token)
    {
        return await Create(match, token);
    }

    public async Task<IEnumerable<Match>> CreateMatches(IEnumerable<Match> match, CancellationToken token)
    {
        return await Create(match, token);
    }

    public async Task<IEnumerable<Match>> FindMatches(Tournament tournament, CancellationToken token)
    {
        var query = FindByCondition(x => x.TournamentId == tournament.Id);
        return await query.ToListAsync(token);
    }
}
