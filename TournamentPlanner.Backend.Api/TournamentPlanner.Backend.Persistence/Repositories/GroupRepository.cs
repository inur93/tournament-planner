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
}
