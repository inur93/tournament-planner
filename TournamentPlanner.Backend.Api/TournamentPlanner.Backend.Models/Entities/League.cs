namespace TournamentPlanner.Backend.Domain.Entities;

public class League : Tournament
{
    public League() : base("league") { }
    public League(string name) : base("league", name)
    {
    }
}