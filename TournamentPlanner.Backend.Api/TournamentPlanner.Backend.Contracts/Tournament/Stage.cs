namespace TournamentPlanner.Backend.Contracts.Tournament;

public class Stage
{
    public StageType Type { get; set; }

    public enum StageType
    {
        Knockout, Group, League
    }
}
