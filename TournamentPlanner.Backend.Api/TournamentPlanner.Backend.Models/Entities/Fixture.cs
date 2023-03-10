namespace TournamentPlanner.Backend.Domain.Entities;

public class Fixture
{

    public Guid Id { get; set; }

    /// <summary>
    /// Number indicating order of fixtures within the given tournament.
    /// This is an alternative if no date is specified for the fixture.
    /// </summary>
    public int No { get; set; }

    /// <summary>
    /// Date and time for the fixture to be played.
    /// </summary>
    public DateTime? DateTime { get; set; }
    public virtual Tournament Tournament { get; set; }

    //public Guid HomeId { get; set; }
    //public Guid AwayId { get; set; }
    public virtual Team Home { get; set; }
    public virtual Team Away { get; set; }

    public List<Team> Teams => new() { Home, Away };

    public int? HomeScore { get; set; }
    public int? AwayScore { get; set; }

    public Fixture() { }
    public Fixture(Tournament tournament, int no, Team home, Team away)
    {
        Tournament = tournament;
        No = no;
        Home = home;
        Away = away;
    }

    public bool Includes(Team? team)
    {
        return team != null && (Home == team || Away == team);
    }

    public Fixture Reverse()
    {
        return new Fixture(Tournament, No, Away, Home);
    }

    internal bool Finished
    {
        get
        {
            return HomeScore != null && AwayScore != null;
        }
    }

    public Team? Winner
    {
        get
        {
            if (!Finished) return null;
            return HomeScore > AwayScore ? Home : Away;
        }
    }

    public bool IsDraw
    {
        get
        {
            return Finished && HomeScore == AwayScore;
        }
    }

    public int GetScore(Team team)
    {
        if (Home == team) return HomeScore ?? 0;
        if(Away == team) return AwayScore ?? 0;
        throw new ArgumentException(
            $"Team {team?.Name} was neither home or away team in this fixture",
            nameof(team));
    }
}