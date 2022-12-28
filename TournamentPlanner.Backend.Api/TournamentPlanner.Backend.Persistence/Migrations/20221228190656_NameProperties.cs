using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TournamentPlanner.Backend.Persistence.Migrations
{
    public partial class NameProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Tournaments_TournamentId",
                table: "Fixtures");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Tournaments",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Teams",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Groups",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<Guid>(
                name: "TournamentId",
                table: "Fixtures",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "AwayId",
                table: "Fixtures",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "HomeId",
                table: "Fixtures",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Fixtures_AwayId",
                table: "Fixtures",
                column: "AwayId");

            migrationBuilder.CreateIndex(
                name: "IX_Fixtures_HomeId",
                table: "Fixtures",
                column: "HomeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Teams_AwayId",
                table: "Fixtures",
                column: "AwayId",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Teams_HomeId",
                table: "Fixtures",
                column: "HomeId",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Tournaments_TournamentId",
                table: "Fixtures",
                column: "TournamentId",
                principalTable: "Tournaments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Teams_AwayId",
                table: "Fixtures");

            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Teams_HomeId",
                table: "Fixtures");

            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Tournaments_TournamentId",
                table: "Fixtures");

            migrationBuilder.DropIndex(
                name: "IX_Fixtures_AwayId",
                table: "Fixtures");

            migrationBuilder.DropIndex(
                name: "IX_Fixtures_HomeId",
                table: "Fixtures");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Tournaments");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "AwayId",
                table: "Fixtures");

            migrationBuilder.DropColumn(
                name: "HomeId",
                table: "Fixtures");

            migrationBuilder.AlterColumn<Guid>(
                name: "TournamentId",
                table: "Fixtures",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Tournaments_TournamentId",
                table: "Fixtures",
                column: "TournamentId",
                principalTable: "Tournaments",
                principalColumn: "Id");
        }
    }
}
