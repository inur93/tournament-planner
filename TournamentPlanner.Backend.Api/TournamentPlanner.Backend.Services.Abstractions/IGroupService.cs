using TournamentPlanner.Backend.Contracts.Group;
using TournamentPlanner.Backend.Contracts.Match;

namespace TournamentPlanner.Backend.Services.Abstractions;

public interface IGroupService
{
    Task<IEnumerable<GroupDto>> GetByTournament(Guid tournamentId, CancellationToken token = default);
    Task<IEnumerable<MatchDto>> GetMatches(Guid id, CancellationToken token = default);
    public Task<GroupDto> UpdateGroup(Guid id, UpdateGroup group, CancellationToken token = default);
}
