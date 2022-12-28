namespace TournamentPlanner.Backend.Domain.Entities;

/// <summary>
/// Is used when opponents for a match have not be determined yet.
/// For example for matches in a knockout stage where the group stage has to complete first.
/// </summary>
public class MatchCandidate
{
    public MatchCandidate(Match match)
    {
        Match = match;
    }

    public MatchCandidate(Group group, int position)
    {
        Group = group;
        Position = position;
    }

    public virtual Group? Group { get; set; }
    public int? Position { get; set; }
    public virtual Match? Match { get; set; }

    //public Team GetOpponent()
    //{
    //    if(Match?.Finished() == true)
    //    {

    //    }
    //}
}