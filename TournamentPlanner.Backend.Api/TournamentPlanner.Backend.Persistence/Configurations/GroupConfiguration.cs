using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Persistence.Configurations;

public class GroupConfiguration : IEntityTypeConfiguration<Group>
{
    public void Configure(EntityTypeBuilder<Group> builder)
    {
        builder.ToTable(nameof(Group));

        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(x => x.Name).IsRequired();
        builder.HasMany(x => x.Fixtures)
            .WithOne()
            .HasForeignKey("GroupId")
            .OnDelete(DeleteBehavior.SetNull);

        builder.HasMany(x => x.Teams)
            .WithOne()
            .HasForeignKey("GroupId")
            .OnDelete(DeleteBehavior.SetNull);

    }
}
