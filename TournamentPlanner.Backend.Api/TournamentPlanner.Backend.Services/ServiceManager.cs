using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Services;

public sealed class ServiceManager : IServiceManager
{
    private readonly Lazy<ITournamentService> _lazyTournamentService;
    private readonly Lazy<IGroupService> _lazyGroupService;
    private readonly Lazy<IFixtureService> _lazyFixtureService;

    public ServiceManager(IRepositoryManager repositoryManager)
    {
        _lazyTournamentService = new Lazy<ITournamentService>(() => new TournamentService(repositoryManager));
        _lazyGroupService = new Lazy<IGroupService>(() => new GroupService(repositoryManager));
        _lazyFixtureService = new Lazy<IFixtureService>(() => new FixtureService(repositoryManager));
    }

    public ITournamentService TournamentService => _lazyTournamentService.Value;

    public IGroupService GroupService => _lazyGroupService.Value;

    public IFixtureService FixtureService => _lazyFixtureService.Value;
}
