using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TournamentPlanner.Backend.Domain.Entities;

namespace TournamentPlanner.Backend.Persistence.Configurations
{
    internal sealed class TournamentConfiguration : IEntityTypeConfiguration<Tournament>
    {
        public void Configure(EntityTypeBuilder<Tournament> builder)
        {
            builder.ToTable(nameof(Tournament));
            
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();

            builder.Property(x => x.Name)
                .HasMaxLength(100)
                .IsRequired();
            
            builder.Property(x => x.Date)
                .IsRequired();

            builder.HasMany(tournament => tournament.Fixtures)
                .WithOne()
                .HasForeignKey("TournamentId")
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(x => x.Matches)
                .WithOne()
                .HasForeignKey(x => x.TournamentId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(x => x.Teams)
                .WithMany(x => x.Tournaments)
                .UsingEntity<Participantship>();

            builder
                .HasDiscriminator(x => x.TournamentType)
                .HasValue<KnockoutTournament>("knockout")
                .HasValue<League>("league");

            
        }
    }
}
