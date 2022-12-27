namespace TournamentPlanner.Backend.Domain.Entities;

public class KnockoutMatch
{
    public KnockoutMatch(List<KnockoutCandidate> candidates, int round, int legs)
    {
        Candidates = candidates;
        Round = round;
        Legs = legs;
    }

    public List<KnockoutCandidate> Candidates { get; }
    public int Round { get; }
    public int Legs { get; }
}