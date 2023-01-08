using System.ComponentModel.DataAnnotations;
using TournamentPlanner.Backend.Contracts.Fixture;
using TournamentPlanner.Backend.Contracts.Team;

namespace TournamentPlanner.Backend.Contracts.Group;

public class GroupDto
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public string ShortName { get; set; }

    [Required]
    public List<TeamDto> Teams { get; set; }

    [Required]
    public List<FixtureDto> Fixtures { get; set; }
}
