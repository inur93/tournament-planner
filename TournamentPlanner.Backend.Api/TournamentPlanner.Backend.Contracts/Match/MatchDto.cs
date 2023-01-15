namespace TournamentPlanner.Backend.Contracts.Match;

public class MatchDto
{
    public Guid Id { get; set; }

    public int? Round { get; set; }

    public int? RoundOf { get; set; }

    public string RoundOfLabel { get; set; }

    public int No { get; set; }


}
