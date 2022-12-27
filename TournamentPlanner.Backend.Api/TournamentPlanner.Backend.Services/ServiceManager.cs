using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Services;

public sealed class ServiceManager : IServiceManager
{
    private readonly Lazy<ITournamentService> _lazyTournamentService;

    public ServiceManager(IRepositoryManager repositoryManager)
    {
        _lazyTournamentService = new Lazy<ITournamentService>(() => new TournamentService(repositoryManager));
    }

    public ITournamentService TournamentService => _lazyTournamentService.Value;
}
