using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TournamentPlanner.Backend.Persistence.Migrations
{
    public partial class MatchCandidateRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "FixtureId",
                table: "Team",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "MatchId",
                table: "Team",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "PointsSet",
                table: "Team",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<Guid>(
                name: "Candidate1Id",
                table: "Match",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "Candidate2Id",
                table: "Match",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Team_FixtureId",
                table: "Team",
                column: "FixtureId");

            migrationBuilder.CreateIndex(
                name: "IX_Team_MatchId",
                table: "Team",
                column: "MatchId");

            migrationBuilder.CreateIndex(
                name: "IX_Match_Candidate1Id",
                table: "Match",
                column: "Candidate1Id");

            migrationBuilder.CreateIndex(
                name: "IX_Match_Candidate2Id",
                table: "Match",
                column: "Candidate2Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Match_MatchCandidate_Candidate1Id",
                table: "Match",
                column: "Candidate1Id",
                principalTable: "MatchCandidate",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Match_MatchCandidate_Candidate2Id",
                table: "Match",
                column: "Candidate2Id",
                principalTable: "MatchCandidate",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Team_Fixture_FixtureId",
                table: "Team",
                column: "FixtureId",
                principalTable: "Fixture",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Team_Match_MatchId",
                table: "Team",
                column: "MatchId",
                principalTable: "Match",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Match_MatchCandidate_Candidate1Id",
                table: "Match");

            migrationBuilder.DropForeignKey(
                name: "FK_Match_MatchCandidate_Candidate2Id",
                table: "Match");

            migrationBuilder.DropForeignKey(
                name: "FK_Team_Fixture_FixtureId",
                table: "Team");

            migrationBuilder.DropForeignKey(
                name: "FK_Team_Match_MatchId",
                table: "Team");

            migrationBuilder.DropIndex(
                name: "IX_Team_FixtureId",
                table: "Team");

            migrationBuilder.DropIndex(
                name: "IX_Team_MatchId",
                table: "Team");

            migrationBuilder.DropIndex(
                name: "IX_Match_Candidate1Id",
                table: "Match");

            migrationBuilder.DropIndex(
                name: "IX_Match_Candidate2Id",
                table: "Match");

            migrationBuilder.DropColumn(
                name: "FixtureId",
                table: "Team");

            migrationBuilder.DropColumn(
                name: "MatchId",
                table: "Team");

            migrationBuilder.DropColumn(
                name: "PointsSet",
                table: "Team");

            migrationBuilder.DropColumn(
                name: "Candidate1Id",
                table: "Match");

            migrationBuilder.DropColumn(
                name: "Candidate2Id",
                table: "Match");
        }
    }
}
