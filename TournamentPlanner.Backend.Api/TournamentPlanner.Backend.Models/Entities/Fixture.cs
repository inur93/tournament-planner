namespace TournamentPlanner.Backend.Domain.Entities;

public class Fixture
{

    public Fixture(Tournament tournament, Team home, Team away)
    {
        Tournament = tournament;
        Home = home;
        Away = away;
    }

    public Tournament Tournament { get; }
    public Team Home { get; }
    public Team Away { get; }

    public bool Includes(Team? team)
    {
        return team != null && (Home?.Id == team?.Id || Away?.Id == team?.Id);
    }

    public Fixture Reverse()
    {
        return new Fixture(Tournament, Away, Home);
    }
}