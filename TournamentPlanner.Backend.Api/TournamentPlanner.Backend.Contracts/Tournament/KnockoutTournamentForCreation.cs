using System.ComponentModel.DataAnnotations;

namespace TournamentPlanner.Backend.Contracts.Tournament;

/// <summary>
/// Used when creating a new knockout tournament
/// </summary>
public class KnockoutTournamentForCreation
{
    /// <summary>
    /// Name of the tournament which will be visible to all users.
    /// </summary>
    /// <example>Champions League</example>
    [Required]
    public string Name { get; set; } = "";

    /// <summary>
    /// The date when the tournament starts
    /// </summary>
    /// <example>2023-06-01</example>
    [Required]
    public DateTime Date { get; set; }

    /// <summary>
    /// The total number of teams participating in the tournament
    /// </summary>
    /// <example>32</example>
    [Required]
    public int NumTeams { get; set; }

    /// <summary>
    /// The number of groups.
    /// The teams will be divided evenly between the groups.
    /// </summary>
    /// <example>8</example>
    [Required] 
    public int NumGroups { get; set; }

    /// <summary>
    /// How many matches are played against each team in the group stage
    /// </summary>
    /// <example>2</example>
    [Required] 
    public int GroupStageLegs { get; set; }
    
    /// <summary>
    /// How many teams are promoted from the group stage to the knockout stages
    /// </summary>
    /// <example>2</example>
    [Required]
    public int NumPromoted { get; set; }
    
    /// <summary>
    /// How many fixtures are played in each knockout match.
    /// Set 2 if for example if there is a home and away game
    /// </summary>
    /// <example>2</example>
    [Required]
    public int KnockoutLegs { get; set; }
}
