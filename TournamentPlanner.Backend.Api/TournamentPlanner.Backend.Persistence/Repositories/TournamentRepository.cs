using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain.Repositories;

internal sealed class TournamentRepository : RepositoryBase<Tournament>, ITournamentRepository
{
    public TournamentRepository(DatabaseContext context) : base(context)
    {
    }
   
    public new IQueryable<Tournament> FindAll()
    {
        return base.FindAll();
    }
}
