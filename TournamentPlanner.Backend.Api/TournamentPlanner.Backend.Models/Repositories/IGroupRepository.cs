using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

public interface IGroupRepository
{
    Task<Group> CreateGroup(Group group, CancellationToken token);
    Task<IEnumerable<Group>> CreateGroups(IEnumerable<Group> groups, CancellationToken token);
    Task<IEnumerable<Group>> GetByTournamentAsync(Guid tournamentId, CancellationToken token);
    Task<Group?> GetGroupAsync(Guid id, CancellationToken token);
}