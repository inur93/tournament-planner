using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace TournamentPlanner.Backend.Domain.Repositories;

internal abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
{
    protected DbSet<T> _set => _context.Set<T>();
    protected readonly DatabaseContext _context;

    public RepositoryBase(DatabaseContext context)
    {
        _context = context;
    }

    public IQueryable<T> FindAll(CancellationToken token)
    {
        return _set.AsNoTracking();
    }

    public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
    {
        return _set.Where(expression).AsNoTracking();
    }

    public async Task<T> Create(T entity, CancellationToken token)
    {
        var result = await _set.AddAsync(entity, token);
        return result.Entity;
    }

    public async Task<IEnumerable<T>> Create(IEnumerable<T> entities, CancellationToken token)
    {
        await _set.AddRangeAsync(entities, token);
        return entities;
    }

    public Task<T> Update(T entity, CancellationToken token)
    {
        var result = _set.Update(entity);
        return Task.FromResult(result.Entity);
    }
}
