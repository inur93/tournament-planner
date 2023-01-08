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

        builder.Property(x => x.No)
            .IsRequired()
            .HasDefaultValue(1);

        //builder.Property(x => x.AwayId);
        //builder.Property(x => x.HomeId);

        //builder.Ignore(x => x.Home);
        //builder.Ignore(x => x.Away);

        builder.HasOne(x => x.Away)
            .WithMany()
            .IsRequired()
            .HasForeignKey("AwayId")
            .OnDelete(DeleteBehavior.NoAction);

        var t = builder.HasOne(x => x.Home)
            .WithMany()
            .IsRequired()
            .HasForeignKey("HomeId")
            .OnDelete(DeleteBehavior.NoAction);
    
        builder.Property(x => x.DateTime);

    }
}
