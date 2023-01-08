namespace TournamentPlanner.Backend.Domain.Repositories;

public interface IRepositoryManager
{
    ITournamentRepository TournamentRepository { get; }
    IGroupRepository GroupRepository { get; }
    IFixtureRepository FixtureRepository { get; }
    ITeamRepository TeamRepository { get; }

    IUnitOfWork UnitOfWork { get; }
    IMatchRepository MatchRepository { get; }
    IMatchCandidateRepository MatchCandidateRepository { get; }
}