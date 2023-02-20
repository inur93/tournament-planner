namespace TournamentPlanner.Backend.Contracts.Match;

/// <summary>
/// Determine which matches are retrieved to avoid mixing group matches with knockouts etc.
/// </summary>
public enum MatchType
{
    /// <summary>
    /// Matches played in knockout stages only
    /// </summary>
    Knockout, 
    /// <summary>
    /// Matches played in group stage only
    /// </summary>
    Group, 
    /// <summary>
    /// All matches for a given tournament
    /// </summary>
    All
}
