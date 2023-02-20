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

}
