using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Persistence.Configurations;

internal class MatchCandidateConfiguration : IEntityTypeConfiguration<MatchCandidate>
{
    public void Configure(EntityTypeBuilder<MatchCandidate> builder)
    {
        builder.ToTable(nameof(MatchCandidate));
        
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(x => x.Position);

        builder.HasOne(x => x.Group);
        builder.HasOne(x => x.Match);
        builder.Ignore(x => x.Type);
    }
}
