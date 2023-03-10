namespace TournamentPlanner.Backend.Services.Abstractions;

public interface IServiceManager
{
    ITournamentService TournamentService { get; }
    IGroupService GroupService { get; }
    IFixtureService FixtureService { get; }
}
