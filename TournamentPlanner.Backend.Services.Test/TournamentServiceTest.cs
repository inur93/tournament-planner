using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TournamentPlanner.Backend.Contracts.Tournament;
using TournamentPlanner.Backend.Domain;
using TournamentPlanner.Backend.Persistence.Repositories;
using TournamentPlanner.Backend.Services.Abstractions;
using Xunit;

namespace TournamentPlanner.Backend.Services.Test
{
    public class TournamentServiceTest
    {
        private readonly ITournamentService _service;
        private DatabaseContext _context;
        public TournamentServiceTest()
        {
            var operationalStoreOptions = Options.Create(new OperationalStoreOptions
            {

            });
            var options = new DbContextOptionsBuilder<DatabaseContext>()
                .UseInMemoryDatabase("DbContextTest")
                .ConfigureWarnings(x => x.Ignore(InMemoryEventId.TransactionIgnoredWarning))
                .Options;

            _context = new DatabaseContext(options, operationalStoreOptions);

            _context.Database.EnsureDeleted();
            _context.Database.EnsureCreated();

            var repoManager = new RepositoryManager(_context);
            _service = new TournamentService(repoManager);
        }

        [Fact]
        public async Task CreateTournament()
        {
            var tournament = new KnockoutTournamentForCreation
            {
                GroupStageLegs = 2,
                KnockoutLegs = 2,
                NumGroups = 4,
                NumTeams = 16,
                NumPromoted = 2,
                Name = "Name",
                Date = DateTime.Now
            };
            await _service.CreateKnockoutTournamentAsync(tournament);

            var groupCount = _context.Groups.Count();
            var teamCount = _context.Teams.Count();
            Assert.Equal(4, groupCount);
            Assert.Equal(16, teamCount);
        }
    }
}
