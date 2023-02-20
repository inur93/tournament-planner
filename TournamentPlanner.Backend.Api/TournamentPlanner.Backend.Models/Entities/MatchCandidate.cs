namespace TournamentPlanner.Backend.Domain.Entities;

/// <summary>
/// Is used when opponents for a match have not be determined yet.
/// For example for matches in a knockout stage where the group stage has to complete first.
/// </summary>
public class MatchCandidate : Opponent
{
    public Guid Id { get; set; }

    public OpponentType Type => OpponentType.Candidate;

    /// <summary>
    /// Applies only when a group is specified instead of a match.
    /// </summary>
    public int? Position { get; set; }

    public virtual Group? Group { get; set; }

    public virtual Match? Match { get; set; }

    public Team? Team
    {
        get
        {
            if (Match != null) return Match.Winner;

            ArgumentNullException.ThrowIfNull(Group, nameof(Group));
            ArgumentNullException.ThrowIfNull(Position, nameof(Position));

            if (Group.Finished && Group.Teams.All(x => x.PointsSet))
            {
                return Group.TeamInPosition(Position.Value);
            }
            return null;
        }
    }
    public string Name
    {
        get
        {
            return Team?.Name ??
                Match?.Code ??
                $"G{Group?.ShortName}P{Position}";
        }
    }

    public MatchCandidate() { }
    public MatchCandidate(Match match)
    {
        Match = match;
    }

    public MatchCandidate(Group group, int position)
    {
        Group = group;
        Position = position;
    }

    public string Code => Group != null ?
        $"{Group.ShortName}{Position}" :
        $"{Match.Code}";

}