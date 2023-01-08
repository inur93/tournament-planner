namespace TournamentPlanner.Backend.Domain.Entities;

public class Participantship
{
    public Guid Id { get; set; }
    public Team Team { get; set; }
    public Tournament Tournament { get; set; }
}
