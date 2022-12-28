using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Persistence.Configurations;

public class FixtureConfiguration : IEntityTypeConfiguration<Fixture>
{
    public void Configure(EntityTypeBuilder<Fixture> builder)
    {
        builder.ToTable(nameof(Fixture));
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.HasOne(x => x.Tournament)
            .WithMany()
            .HasForeignKey("TournamentId")
            .OnDelete(DeleteBehavior.NoAction);

        builder.HasOne(x => x.Away)
            .WithMany()
            .HasForeignKey(x => "AwayId")
            .OnDelete(DeleteBehavior.NoAction);

        builder.HasOne(x => x.Home)
            .WithMany()
            .HasForeignKey(x => "HomeId")
            .OnDelete(DeleteBehavior.NoAction);

    }
}
