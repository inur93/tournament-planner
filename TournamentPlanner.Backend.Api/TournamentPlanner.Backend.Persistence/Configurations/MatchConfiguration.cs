using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Persistence.Configurations;

internal class MatchConfiguration : IEntityTypeConfiguration<Match>
{
    public void Configure(EntityTypeBuilder<Match> builder)
    {
        builder.ToTable(nameof(Match));
        
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(x => x.Round).IsRequired();
        builder.Property(x => x.No).IsRequired();
        builder.Property(x => x.Legs).IsRequired();

        builder.HasMany(x => x.Candidates)
            .WithOne(x => x.Match);

        builder.HasMany(x => x.Fixtures)
            .WithOne()
            .HasForeignKey("MatchId");
    }
}
