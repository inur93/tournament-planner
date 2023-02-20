using Mapster;
using TournamentPlanner.Backend.Contracts.Fixture;
using TournamentPlanner.Backend.Domain.Exceptions;
using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Services;

internal class FixtureService : IFixtureService
{
    private readonly IRepositoryManager _repositoryManager;

    public FixtureService(IRepositoryManager repositoryManager)
    {
        _repositoryManager = repositoryManager;
    }

    public async Task<FixtureDto> UpdateScore(Guid id, UpdateScoreDto update, CancellationToken token = default)
    {
        var existing = await _repositoryManager.FixtureRepository.FindById(id, token);
        EntityNotFoundException.ThrowIfNull(existing, id);
        var fixture = update.Adapt(existing);
        await _repositoryManager.FixtureRepository.UpdateFixtureAsync(fixture, token);
        await _repositoryManager.UnitOfWork.SaveChangesAsync();
        return fixture.Adapt<FixtureDto>();
    }
}
