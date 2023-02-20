using Microsoft.AspNetCore.Mvc;
using TournamentPlanner.Backend.Contracts.Fixture;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Presentation.Controllers;

[ApiController]
[Route("api/fixtures")]
[Produces("application/json")]
[Consumes("application/json")]
public class FixtureController : ControllerBase
{
    private readonly IServiceManager _serviceManager;

    public FixtureController(IServiceManager serviceManager)
    {
        _serviceManager = serviceManager;
    }

    [HttpPut("{id}/score")]
    public async Task<FixtureDto> UpdateFixtureScores(
        [FromRoute(Name = "id")] Guid id,
        [FromBody] UpdateScoreDto update,
        CancellationToken token)
    {
        return await _serviceManager.FixtureService.UpdateScore(id, update, token);
    }
}
