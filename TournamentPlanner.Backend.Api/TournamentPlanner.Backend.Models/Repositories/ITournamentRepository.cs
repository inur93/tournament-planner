using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

public interface ITournamentRepository
{
    Task<Tournament> CreateTournament(Tournament tournament, CancellationToken token);
    Task<IEnumerable<Tournament>> FindAllTournaments(CancellationToken token);
    Task<Tournament?> FindTournament(Guid id, CancellationToken token);
}