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

    public IQueryable<T> FindAll()
    {
        return _set.AsNoTracking();
    }

    public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
    {
        return _set.Where(expression).AsNoTracking();
    }

    public async Task<T> Create(T entity, CancellationToken token)
    {
        return await Create(entity, true, token);
    }

    public async Task<T> Create(T entity, bool saveChanges, CancellationToken token)
    {
        var result = await _set.AddAsync(entity, token);
        if (saveChanges)
        {
            await _context.SaveChangesAsync(token);
        }
        return result.Entity;
    }

    public async Task<IEnumerable<T>> Create(IList<T> entities, CancellationToken token)
    {
        return await Create(entities, true, token);
    }

    public async Task<IEnumerable<T>> Create(IList<T> entities, bool saveChanges, CancellationToken token)
    {
        await _set.AddRangeAsync(entities, token);
        if (saveChanges)
        {
            await _context.SaveChangesAsync(token);
        }
        return entities;
    }

    public async Task<T> Update(T entity, CancellationToken token)
    {
        return await Update(entity, true, token);
    }

    public async Task<T> Update(T entity, bool saveChanges, CancellationToken token)
    {
        var result = _set.Update(entity);
        if (saveChanges)
        {
            await _context.SaveChangesAsync(token);
        }
        return result.Entity;
    }
}
