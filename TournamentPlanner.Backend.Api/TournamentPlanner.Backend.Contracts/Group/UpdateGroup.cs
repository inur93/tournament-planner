using System.ComponentModel.DataAnnotations;
using TournamentPlanner.Backend.Contracts.Team;

namespace TournamentPlanner.Backend.Contracts.Group;

public class UpdateGroup
{
    [Required]
    public string Name { get; set; }

    [Required]
    public List<UpdateTeam> Teams {get;set;}
}
