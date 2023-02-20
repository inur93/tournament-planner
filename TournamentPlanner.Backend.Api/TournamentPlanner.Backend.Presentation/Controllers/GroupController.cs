using Microsoft.AspNetCore.Mvc;
using TournamentPlanner.Backend.Contracts.Group;
using TournamentPlanner.Backend.Contracts.Match;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Presentation.Controllers;

[ApiController]
[Route("api/groups")]
[Produces("application/json")]
[Consumes("application/json")]
public class GroupController : ControllerBase
{
    private readonly IServiceManager _serviceManager;

    public GroupController(IServiceManager serviceManager)
    {
        _serviceManager = serviceManager;
    }
    
    [HttpPut("{id}")]
    public async Task<GroupDto> UpdateGroup(
        [FromRoute(Name = "id")] Guid id,
        [FromBody] UpdateGroup update,
        CancellationToken token)
    {
        return await _serviceManager.GroupService.UpdateGroup(id, update, token);
    }

    [HttpGet("{id}/matches")]
    public async Task<IEnumerable<MatchDto>> GetGroupMatches(
        [FromRoute(Name = "id")] Guid id,
        CancellationToken token)
    {
        return await _serviceManager.GroupService.GetMatches(id, token);
    }

}
