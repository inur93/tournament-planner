using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

internal sealed class MatchCandidateRepository : RepositoryBase<MatchCandidate>, IMatchCandidateRepository
{
    public MatchCandidateRepository(DatabaseContext context) : base(context)
    {
    }

    public async Task<MatchCandidate> CreateMatchCandidate(MatchCandidate candidate, CancellationToken token)
    {
        return await Create(candidate, token);
    }

    public async Task<IEnumerable<MatchCandidate>> CreateMatchCandidates(IEnumerable<MatchCandidate> candidates, CancellationToken token)
    {
        return await Create(candidates, token);
    }
}
