using TournamentPlanner.Backend.Contracts.Team;

namespace TournamentPlanner.Backend.Contracts.Group;

public class UpdateGroup
{
    public string Name { get; set; }
    public List<UpdateTeam> Teams {get;set;}
}
