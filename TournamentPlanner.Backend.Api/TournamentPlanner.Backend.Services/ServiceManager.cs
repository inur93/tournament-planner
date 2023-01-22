using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Services;

public sealed class ServiceManager : IServiceManager
{
    private readonly Lazy<ITournamentService> _lazyTournamentService;
    private readonly Lazy<IGroupService> _lazyGroupService;

    public ServiceManager(IRepositoryManager repositoryManager)
    {
        _lazyTournamentService = new Lazy<ITournamentService>(() => new TournamentService(repositoryManager));
        _lazyGroupService = new Lazy<IGroupService>(() => new GroupService(repositoryManager));
    }

    public ITournamentService TournamentService => _lazyTournamentService.Value;

    public IGroupService GroupService => _lazyGroupService.Value;
}
