using Mapster;
using TournamentPlanner.Backend.Contracts.Group;
using TournamentPlanner.Backend.Domain.Entities;
using TournamentPlanner.Backend.Domain.Exceptions;
using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Services;

internal class GroupService : IGroupService
{
    private readonly IRepositoryManager _repositoryManager;

    public GroupService(IRepositoryManager repositoryManager)
    {
        _repositoryManager = repositoryManager;
    }

    public async Task<GroupDto> UpdateGroup(Guid id, UpdateGroup group, CancellationToken token = default)
    {
        var existing = await _repositoryManager.GroupRepository.GetGroupAsync(id, token);
        if(existing == null)
        {
            throw new EntityNotFoundException(typeof(Group), id);
        }
        var update = group.Adapt(existing);
        await _repositoryManager.UnitOfWork.SaveChangesAsync();

        return update.Adapt<GroupDto>();
    }
}
