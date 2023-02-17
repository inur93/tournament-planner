using System.ComponentModel.DataAnnotations;
using TournamentPlanner.Backend.Contracts.Fixture;
using TournamentPlanner.Backend.Contracts.Match;

namespace TournamentPlanner.Backend.Contracts.Tournament;

public abstract class TournamentDetailsDto
{

    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public DateTime Date { get; set; }

    [Required]
    public string TournamentType { get; set; }

    [Required]
    public List<FixtureDto> Fixtures { get; set; } = new List<FixtureDto>();

    [Required]
    public List<MatchDto> Matches { get; set; } = new List<MatchDto>();

}
