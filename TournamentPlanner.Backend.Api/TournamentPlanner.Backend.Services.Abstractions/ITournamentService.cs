using TournamentPlanner.Backend.Contracts.Tournament;

namespace TournamentPlanner.Backend.Services.Abstractions;

public interface ITournamentService
{

    Task<TournamentDto> CreateAsync(TournamentForCreation tournamentForCreation, CancellationToken token = default);
    Task<IEnumerable<TournamentDto>> GetAllAsync(CancellationToken token);
}