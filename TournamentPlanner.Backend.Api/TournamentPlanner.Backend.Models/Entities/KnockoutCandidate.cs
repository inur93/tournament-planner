namespace TournamentPlanner.Backend.Domain.Entities;

public class KnockoutCandidate
{
    public KnockoutCandidate(KnockoutMatch knockoutMatch)
    {
        KnockoutMatch = knockoutMatch;
    }

    public KnockoutCandidate(Group group, int position)
    {
        Group = group;
        Position = position;
    }

    public Group Group { get; }
    public int Position { get; }
    public KnockoutMatch KnockoutMatch { get; }
}