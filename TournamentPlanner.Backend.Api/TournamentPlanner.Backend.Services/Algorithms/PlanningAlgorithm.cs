namespace TournamentPlanner.Backend.Services.Abstractions.Algorithms;

public interface IPlanningAlgorithm<T>
{
    Task<PlanningOutput> Plan(List<T> input);
}
