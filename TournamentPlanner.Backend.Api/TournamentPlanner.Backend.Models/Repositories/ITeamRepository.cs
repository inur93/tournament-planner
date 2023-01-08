using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

public interface ITeamRepository
{
    Task<Team> CreateTeam(Team team, CancellationToken token);
    Task<IEnumerable<Team>> CreateTeams(IEnumerable<Team> teams, CancellationToken token);
    Task<IEnumerable<Team>> FindTeams(Tournament tournament, CancellationToken token);
}