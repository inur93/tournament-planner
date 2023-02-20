using Microsoft.EntityFrameworkCore;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

internal sealed class GroupRepository : RepositoryBase<Group>, IGroupRepository
{
    public GroupRepository(DatabaseContext context) : base(context)
    {
    }

    public async Task<Group> CreateGroup(Group group, CancellationToken token)
    {
        return await Create(group, token);
    }

    public async Task<IEnumerable<Group>> CreateGroups(IEnumerable<Group> groups, CancellationToken token)
    {
        return await Create(groups, token);
    }

    public async Task<IEnumerable<Group>> GetByTournamentAsync(Guid tournamentId, CancellationToken token)
    {
        return await FindByCondition(x => x.Tournament.Id == tournamentId)
            .Include(x => x.Teams)
            .ToListAsync();
    }

    public async Task<Group?> GetGroupAsync(Guid id, CancellationToken token)
    {
        return await FindByCondition(x => x.Id == id)
            .Include(x => x.Teams)
            .Include(x => x.Matches)
            .ThenInclude((Match x) => x.Fixtures)
            .Include(x => x.Matches)
            .ThenInclude((Match x) => x.Candidate1)
            .Include(x => x.Matches)
            .ThenInclude((Match x) => x.Candidate2)
            .Include(x => x.Matches)
            .FirstOrDefaultAsync();
    }
}
