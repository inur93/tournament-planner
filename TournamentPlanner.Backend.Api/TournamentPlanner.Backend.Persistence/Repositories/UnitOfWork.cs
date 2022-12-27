using TournamentPlanner.Backend.Domain;
using TournamentPlanner.Backend.Domain.Repositories;

namespace TournamentPlanner.Backend.Persistence.Repositories;

internal sealed class UnitOfWork : IUnitOfWork
{
    private readonly DatabaseContext context;

    public UnitOfWork(DatabaseContext context)
    {
        this.context = context;
    }
    public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await context.SaveChangesAsync(cancellationToken);
    }
}
