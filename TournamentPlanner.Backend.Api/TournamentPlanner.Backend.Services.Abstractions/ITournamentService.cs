using TournamentPlanner.Backend.Contracts.Tournament;

namespace TournamentPlanner.Backend.Services.Abstractions;

public interface ITournamentService
{

    Task<KnockoutTournamentDto> CreateKnockoutTournamentAsync(KnockoutTournamentForCreation forCreation, CancellationToken token = default);
    Task<LeagueDto> CreateLeagueAsync(LeagueForCreation forCreation, CancellationToken token = default);
    Task<IEnumerable<TournamentDto>> GetAllAsync(CancellationToken token);
    Task<TournamentDetailsDto> GetByIdAsync(Guid id, CancellationToken token);
}