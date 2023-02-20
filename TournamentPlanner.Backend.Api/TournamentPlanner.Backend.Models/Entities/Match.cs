using TournamentPlanner.Backend.Domain.Repositories;

namespace TournamentPlanner.Backend.Domain.Entities;

public class Match
{
    public Guid Id { get; set; }

    public MatchType Type { get; set; }

    public int? Round { get; set; } = 1;

    /// <summary>
    /// Determines if it is round of 16, quarter finals etc.
    /// A value of 2 means the final
    /// Only relevant for knockout stages
    /// </summary>
    public int? RoundOf { get; set; }

    public string RoundOfLabel => RoundOf is null ? "" : RoundOf switch
    {
        2 => "Final",
        4 => "Semi-final",
        8 => "Quarter-final",
        _ => $"Round of {RoundOf}"
    };

    public int No { get; set; } = 1;

    public int Legs { get; set; } = 1;

    public Guid TournamentId { get; set; }

    public MatchCandidate? Candidate1 { get; set; }

    public MatchCandidate? Candidate2 { get; set; }

    public Opponent Home => Candidate1 as Opponent ?? Fixtures.First().Home;

    public Opponent Away => Candidate2 as Opponent ?? Fixtures.First().Away;

    public List<MatchCandidate> Candidates =>
        Candidate1 != null && Candidate2 != null ?
        new() { Candidate1, Candidate2 } :
        new();

    public ICollection<Fixture> Fixtures { get; set; } = new List<Fixture>();

    public string Code => $"{No}R{Round}";


    public Match() { }

    public Match(MatchCandidate candidate1, MatchCandidate candidate2)
    {
        Candidate1 = candidate1;
        Candidate2 = candidate2;
    }

    public Match(Fixture fixture) : this(new List<Fixture> { fixture })
    { }

    public Match(List<Fixture> fixtures)
    {
        Fixtures = fixtures;
        var teamCount = Fixtures
            .Select(x => x.Home)
            .Concat(Fixtures.Select(x => x.Away))
            .Distinct()
            .Count();
        if (teamCount > 2)
        {
            throw new ArgumentException("A match can not have more than 2 teams", nameof(fixtures));
        }
    }

    internal bool Finished
    {
        get
        {
            return Fixtures.Any() && Fixtures.All(x => x.Finished);
        }
    }

    public ICollection<Team> Teams
    {
        get
        {
            return Fixtures
                .Select(x => new List<Team> { x.Home, x.Away })
                .SelectMany(x => x)
                .Where(x => x != null)
                .DistinctBy(x => x.Id)
                .ToList();
        }
    }

    public Team? Winner
    {
        get
        {
            if (!Fixtures.Any() || !Fixtures.All(x => x.Finished))
            {
                return null;
            }

            return Fixtures
                .SelectMany(x => x.Teams)
                .Distinct()
                .Select(team => new
                {
                    team,
                    Goals = Fixtures.Sum(fixture => fixture.GetScore(team)),
                    AwayGoals = Fixtures
                    .Where(fixture => fixture.Away == team)
                    .Sum(fixture => fixture.GetScore(team))
                })
                .OrderByDescending(x => x.Goals)
                .ThenByDescending(x => x.AwayGoals)
                .Select(x => x.team)
                .First();
        }
    }
}