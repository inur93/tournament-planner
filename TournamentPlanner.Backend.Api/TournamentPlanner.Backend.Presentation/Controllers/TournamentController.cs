using Microsoft.AspNetCore.Mvc;
using TournamentPlanner.Backend.Contracts.Match;
using TournamentPlanner.Backend.Contracts.Tournament;
using TournamentPlanner.Backend.Services.Abstractions;

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

    [HttpGet("{id}/matches")]
    public async Task<IEnumerable<MatchDto>> GetMatches(
        [FromRoute(Name = "id")] Guid id,
        CancellationToken token)
    {
        return await _serviceManager.TournamentService.GetMatchesAsync(id, token);
    }
}
