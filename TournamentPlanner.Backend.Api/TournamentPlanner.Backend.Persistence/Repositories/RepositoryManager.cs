using TournamentPlanner.Backend.Domain;
using TournamentPlanner.Backend.Domain.Repositories;

namespace TournamentPlanner.Backend.Persistence.Repositories;

public sealed class RepositoryManager : IRepositoryManager
{
    public ITournamentRepository TournamentRepository => _lazyTournamentRepository.Value;

    public IUnitOfWork UnitOfWork => _lazyUnitOfWork.Value;

    public RepositoryManager(DatabaseContext context)
    {
        _lazyTournamentRepository = new Lazy<ITournamentRepository>(() => new TournamentRepository(context));
        _lazyUnitOfWork = new Lazy<IUnitOfWork>(() => new UnitOfWork(context));
    }

    private readonly Lazy<ITournamentRepository> _lazyTournamentRepository;
    private readonly Lazy<IUnitOfWork> _lazyUnitOfWork;
}
