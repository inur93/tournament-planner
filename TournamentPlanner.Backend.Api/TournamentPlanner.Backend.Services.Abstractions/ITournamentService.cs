using TournamentPlanner.Backend.Contracts.Fixture;
using TournamentPlanner.Backend.Contracts.Match;
using TournamentPlanner.Backend.Contracts.Tournament;
using MatchType = TournamentPlanner.Backend.Contracts.Match.MatchType;

namespace TournamentPlanner.Backend.Services.Abstractions;

public interface ITournamentService
{

    Task<TournamentDetailsDto> CreateKnockoutTournamentAsync(KnockoutTournamentForCreation forCreation, CancellationToken token = default);
    Task<LeagueDto> CreateLeagueAsync(LeagueForCreation forCreation, CancellationToken token = default);
    Task<IEnumerable<TournamentDto>> GetAllAsync(CancellationToken token);
    Task<TournamentDetailsDto> GetByIdAsync(Guid id, CancellationToken token);
    Task<IEnumerable<FixtureDto>> GetFixturesAsync(Guid id, MatchType type, CancellationToken token);
    Task<IEnumerable<MatchDto>> GetMatchesAsync(Guid id, MatchType type, CancellationToken token);
    Task<TournamentDetailsDto> UpdateTournament(Guid id, UpdateTournament update, CancellationToken token);
}