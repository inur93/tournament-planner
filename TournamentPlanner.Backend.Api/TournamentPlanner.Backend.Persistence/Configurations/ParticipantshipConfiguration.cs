using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Persistence.Configurations;

public class ParticipantshipConfiguration : IEntityTypeConfiguration<Participantship>
{
    public void Configure(EntityTypeBuilder<Participantship> builder)
    {
        builder.ToTable(nameof(Participantship));

        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();
    }
}
