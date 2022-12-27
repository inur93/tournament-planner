using TournamentPlanner.Backend.Contracts.Tournament;
using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Services;

internal sealed class TournamentService : ITournamentService
{

    private readonly IRepositoryManager _repositoryManager;

    public TournamentService(IRepositoryManager repositoryManager)
    {
        _repositoryManager = repositoryManager;
    }

    public Task<TournamentDto> CreateAsync(TournamentForCreation tournamentForCreation, CancellationToken token = default)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<TournamentDto>> GetAllAsync(CancellationToken token)
    {
        throw new NotImplementedException();
    }
}