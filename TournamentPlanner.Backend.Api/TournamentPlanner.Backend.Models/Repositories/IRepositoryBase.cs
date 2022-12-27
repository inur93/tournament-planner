using System.Linq.Expressions;

namespace TournamentPlanner.Backend.Domain.Repositories;

public interface IRepositoryBase<T> where T : class
{
    Task<IEnumerable<T>> Create(IList<T> entities, bool saveChanges, CancellationToken token);
    Task<IEnumerable<T>> Create(IList<T> entities, CancellationToken token);
    Task<T> Create(T entity, bool saveChanges, CancellationToken token);
    Task<T> Create(T entity, CancellationToken token);
    IQueryable<T> FindAll();
    IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression);
    Task<T> Update(T entity, bool saveChanges, CancellationToken token);
    Task<T> Update(T entity, CancellationToken token);
}