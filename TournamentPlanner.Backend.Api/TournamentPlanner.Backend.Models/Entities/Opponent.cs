namespace TournamentPlanner.Backend.Domain.Entities;

public interface Opponent
{
    Guid Id { get; }
    string Name { get; }

    OpponentType Type {get;}
}
