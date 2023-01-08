using TournamentPlanner.Backend.Domain;
using TournamentPlanner.Backend.Domain.Repositories;

namespace TournamentPlanner.Backend.Persistence.Repositories;

public sealed class RepositoryManager : IRepositoryManager
{
    public ITournamentRepository TournamentRepository => _lazyTournamentRepository.Value;
    
    public IGroupRepository GroupRepository => _lazyGroupRepository.Value;
    
    public IFixtureRepository FixtureRepository => _lazyFixtureRepository.Value;
    
    public ITeamRepository TeamRepository => _lazyTeamRepository.Value;

    public IMatchCandidateRepository MatchCandidateRepository => _lazyMatchCandidateRepository.Value;
    
    public IMatchRepository MatchRepository => _lazyMatchRepository.Value;

    public IUnitOfWork UnitOfWork => _lazyUnitOfWork.Value;

    public RepositoryManager(DatabaseContext context)
    {
        _lazyTournamentRepository = new Lazy<ITournamentRepository>(() => new TournamentRepository(context));
        _lazyGroupRepository = new Lazy<IGroupRepository>(() => new GroupRepository(context));
        _lazyFixtureRepository = new Lazy<IFixtureRepository>(() => new FixtureRepository(context));
        _lazyTeamRepository = new Lazy<ITeamRepository>(() => new TeamRepository(context));
        _lazyUnitOfWork = new Lazy<IUnitOfWork>(() => new UnitOfWork(context));
        _lazyMatchCandidateRepository = new Lazy<IMatchCandidateRepository>(() => new MatchCandidateRepository(context));
        _lazyMatchRepository = new Lazy<IMatchRepository>(() => new MatchRepository(context));
    }

    private readonly Lazy<ITournamentRepository> _lazyTournamentRepository;
    private readonly Lazy<IGroupRepository> _lazyGroupRepository;
    private readonly Lazy<IFixtureRepository> _lazyFixtureRepository;
    private readonly Lazy<ITeamRepository> _lazyTeamRepository;
    private readonly Lazy<IUnitOfWork> _lazyUnitOfWork;
    private readonly Lazy<IMatchRepository> _lazyMatchRepository;
    private readonly Lazy<IMatchCandidateRepository> _lazyMatchCandidateRepository;
}
