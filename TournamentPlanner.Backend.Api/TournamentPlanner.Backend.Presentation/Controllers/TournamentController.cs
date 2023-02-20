using Microsoft.AspNetCore.Mvc;
using TournamentPlanner.Backend.Contracts.Fixture;
using TournamentPlanner.Backend.Contracts.Group;
using TournamentPlanner.Backend.Contracts.Match;
using TournamentPlanner.Backend.Contracts.Tournament;
using TournamentPlanner.Backend.Services.Abstractions;
using MatchType = TournamentPlanner.Backend.Contracts.Match.MatchType;

namespace TournamentPlanner.Backend.Presentation.Controllers;

[ApiController]
[Route("api/tournaments")]
[Produces("application/json")]
[Consumes("application/json")]
public class TournamentController : ControllerBase
{
    private readonly IServiceManager _serviceManager;

    public TournamentController(IServiceManager serviceManager)
    {
        _serviceManager = serviceManager;
    }

    [HttpGet]
    public async Task<IEnumerable<TournamentDto>> GetTournaments(CancellationToken token)
    {
        return await _serviceManager.TournamentService.GetAllAsync(token);
    }

    [HttpGet("{id}")]
    public async Task<TournamentDetailsDto> GetTournamentById(
        [FromRoute(Name = "id")] Guid id,
        CancellationToken token)
    {
        return await _serviceManager.TournamentService.GetByIdAsync(id, token);
    }

    /// <summary>
    /// Create a knockout tournament
    /// </summary>
    /// <param name="forCreation">
    /// {
    /// "name": "World Cup"
    /// }
    /// </param>
    /// <param name="token"></param>
    /// <returns></returns>
    [HttpPost("knockout")]
    public async Task<TournamentDetailsDto> CreateKnockoutTournament(
        [FromBody] KnockoutTournamentForCreation forCreation,
        CancellationToken token)
    {
        return await _serviceManager.TournamentService.CreateKnockoutTournamentAsync(forCreation, token);
    }

    [HttpPut("{id}")]
    public async Task<TournamentDetailsDto> UpdateTournament(
        [FromRoute(Name = "id")] Guid id,
        [FromBody] UpdateTournament update,
        CancellationToken token)
    {
        return await _serviceManager.TournamentService.UpdateTournament(id, update, token);
    }

    [ProducesErrorResponseType(typeof(ProblemDetails))]
    [ProducesResponseType(400, Type = typeof(ProblemDetails))]
    [ProducesResponseType(200, Type = typeof(IEnumerable<MatchDto>))]
    [HttpGet("{id}/matches")]
    public async Task<IEnumerable<MatchDto>> GetTournamentMatches(
        [FromRoute(Name = "id")] Guid id,
        [FromQuery(Name = "type")] MatchType type = MatchType.All,
        CancellationToken token = default)
    {
        return await _serviceManager.TournamentService.GetMatchesAsync(id, type, token);
    }

    [HttpGet("{id}/fixtures")]
    public async Task<IEnumerable<FixtureDto>> GetTournamentFixtures(
        [FromRoute(Name = "id")] Guid id,
        [FromQuery(Name = "type")] MatchType type = MatchType.All,
        CancellationToken token = default)
    {
        return await _serviceManager.TournamentService.GetFixturesAsync(id, type, token);
    }



    [HttpGet("{id}/groups")]
    public async Task<IEnumerable<GroupDto>> GetGroups(
        [FromRoute(Name = "id")] Guid id,
        CancellationToken token)
    {
        return await _serviceManager.GroupService.GetByTournament(id, token);
    }
}
