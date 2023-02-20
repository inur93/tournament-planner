using Mapster;
using TournamentPlanner.Backend.Contracts.Group;
using TournamentPlanner.Backend.Contracts.Match;
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

    public async Task<IEnumerable<GroupDto>> GetByTournament(Guid tournamentId, CancellationToken token = default)
    {
        var groups = await _repositoryManager.GroupRepository.GetByTournamentAsync(tournamentId, token);
        return groups.Adapt<IEnumerable<GroupDto>>();
    }

    public async Task<IEnumerable<MatchDto>> GetMatches(Guid id, CancellationToken token = default)
    {
        var group = await _repositoryManager.GroupRepository.GetGroupAsync(id, token);
        EntityNotFoundException.ThrowIfNull(group, id);

        return group.Matches.Adapt<IEnumerable<MatchDto>>();
    }

    public async Task<GroupDto> UpdateGroup(Guid id, UpdateGroup group, CancellationToken token = default)
    {
        var existing = await _repositoryManager.GroupRepository.GetGroupAsync(id, token);
        EntityNotFoundException.ThrowIfNull(existing, id);
        var update = group.Adapt(existing);
        await _repositoryManager.UnitOfWork.SaveChangesAsync();

        return update.Adapt<GroupDto>();
    }
}
