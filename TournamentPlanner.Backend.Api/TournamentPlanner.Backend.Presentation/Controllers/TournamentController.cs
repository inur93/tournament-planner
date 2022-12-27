using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TournamentPlanner.Backend.Services.Abstractions;

namespace TournamentPlanner.Backend.Presentation.Controllers;

[ApiController]
[Route("api/tournaments")]
public class TournamentController : ControllerBase
{
    private readonly IServiceManager _serviceManager;

    public TournamentController(IServiceManager serviceManager)
    {
        _serviceManager = serviceManager;
    }

    [HttpGet]
    public async Task<IActionResult> GetTournaments(CancellationToken token)
    {
        var tournaments = await _serviceManager.TournamentService.GetAllAsync(token);

        return Ok(tournaments);
    }
}
