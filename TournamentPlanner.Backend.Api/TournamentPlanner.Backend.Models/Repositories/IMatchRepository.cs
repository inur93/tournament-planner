using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

public interface IMatchRepository
{
    Task<Match> CreateMatch(Match match, CancellationToken token);
    Task<IEnumerable<Match>> CreateMatches(IEnumerable<Match> matches, CancellationToken token);
    Task<IEnumerable<Match>> FindMatches(Tournament tournament, CancellationToken token);
}