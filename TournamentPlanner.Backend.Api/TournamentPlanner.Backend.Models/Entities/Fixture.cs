namespace TournamentPlanner.Backend.Domain.Entities;

public class Fixture
{
    public Fixture() { }
    public Fixture(Tournament tournament, Team home, Team away)
    {
        Tournament = tournament;
        Home = home;
        Away = away;
    }

    public Guid Id { get; set; }
    public virtual Tournament Tournament { get; set; }
    public virtual Team Home { get; set; }
    public virtual Team Away { get; set; }

    public int? HomeScore { get; set; }
    public int? AwayScore { get; set; }
    

    public bool Includes(Team? team)
    {
        return team != null && (Home?.Id == team?.Id || Away?.Id == team?.Id);
    }

    public Fixture Reverse()
    {
        return new Fixture(Tournament, Away, Home);
    }

    internal bool Finished()
    {
        return HomeScore != null && AwayScore != null;
    }

    public Team? Winner()
    {
        if (!Finished()) return null;
        return HomeScore > AwayScore ? Home : Away;
    }
}