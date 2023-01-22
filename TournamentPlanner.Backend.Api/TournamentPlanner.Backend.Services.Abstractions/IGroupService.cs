using TournamentPlanner.Backend.Contracts.Group;

namespace TournamentPlanner.Backend.Services.Abstractions;

public interface IGroupService
{
    public Task<GroupDto> UpdateGroup(Guid id, UpdateGroup group, CancellationToken token = default);
}
