using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

public interface IMatchCandidateRepository
{
    Task<MatchCandidate> CreateMatchCandidate(MatchCandidate candidate, CancellationToken token);
    Task<IEnumerable<MatchCandidate>> CreateMatchCandidates(IEnumerable<MatchCandidate> candidatees, CancellationToken token);
}