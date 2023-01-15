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

        builder.Property(x => x.Type).IsRequired();
        builder.Property(x => x.RoundOf);
        builder.Property(x => x.Round).IsRequired();
        builder.Property(x => x.No).IsRequired();
        builder.Property(x => x.Legs).IsRequired();

        builder.HasOne(x => x.Candidate1);
        builder.HasOne(x => x.Candidate2);
        
        builder.Ignore(x => x.Candidates);

        builder.HasMany(x => x.Fixtures)
            .WithOne()
            .HasForeignKey("MatchId");
    }
}
