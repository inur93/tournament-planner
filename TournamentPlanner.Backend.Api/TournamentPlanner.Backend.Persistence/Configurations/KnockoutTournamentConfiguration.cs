using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Persistence.Configurations;

public class KnockoutTournamentConfiguration : IEntityTypeConfiguration<KnockoutTournament>
{
    public void Configure(EntityTypeBuilder<KnockoutTournament> builder)
    {
        builder.HasMany(x => x.Groups)
            .WithOne()
            .HasForeignKey("TournamentId")
            .OnDelete(DeleteBehavior.Cascade);

        builder.Property(x => x.NumPromoted)
            .IsRequired();
    }
}
