using Microsoft.EntityFrameworkCore;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

internal sealed class TeamRepository : RepositoryBase<Team>, ITeamRepository
{
    public TeamRepository(DatabaseContext context) : base(context)
    {
    }

    public async Task<Team> CreateTeam(Team team, CancellationToken token)
    {
        return await Create(team, token);
    }

    public async Task<IEnumerable<Team>> CreateTeams(IEnumerable<Team> teams, CancellationToken token)
    {
        return await Create(teams, token);
    }

    public async Task<IEnumerable<Team>> FindTeams(Tournament tournament, CancellationToken token)
    {
        var query = FindByCondition(x => x.Tournaments.Contains(tournament));
        return await query.ToListAsync(token);
    }
}
