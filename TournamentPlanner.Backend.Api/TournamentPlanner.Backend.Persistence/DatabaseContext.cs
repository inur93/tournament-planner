using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Domain;

public class DatabaseContext : ApiAuthorizationDbContext<ApplicationUser>
{
    public DbSet<Team> Teams { get; set; }
    public DbSet<Fixture> Fixtures { get; set; }

    public DbSet<Group> Groups { get; set; }
    //public DbSet<Season> Seasons { get; set; }
    //public DbSet<Player> Players { get; set; }
    public DbSet<Tournament> Tournaments { get; set; }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public DatabaseContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
