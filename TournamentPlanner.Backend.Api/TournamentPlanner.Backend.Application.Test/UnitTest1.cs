//using System;
//using System.Linq;
//using Xunit;

//namespace TournamentPlanner.Backend.Application.Test
//{
//    public class UnitTest1
//    {
//        private readonly TournamentPlanner.Backend.Services.TournamentPlanner _tournamentService;

//        public UnitTest1()
//        {
//            _tournamentService = new Services.TournamentPlanner();
//        }

//        [Fact]
//        public void TestRoundCalculator()
//        {
//            var rounds = Math.Floor(Math.Log(20, 2));

//        }

//        [Theory]
//        [InlineData(20, 190, 1, 1)]
//        [InlineData(20, 380, 2, 0)]
//        public void NumFixturesAndHomeGames(int numTeams, int numFixtures, int roundRobins, int tolerance)
//        {
//            var tournament = new League("Test");
//            var res = _tournamentService.CreateLeague(tournament, numTeams, roundRobins);
//            var fixtures = res.Fixtures;
//            var numHomeGames = fixtures
//                .GroupBy(x => x.HomeTeam.Team.Name)
//                .Select(x => new { x.Key, Count = x.Count() });
//            var minNumHomeGames = numHomeGames.Min(x => x.Count);
//            var maxNumHomeGames = numHomeGames.Max(x => x.Count);

//            Assert.True(numFixtures == fixtures.Count, $"There should be {numFixtures} fixtures");
//            Assert.True(
//                maxNumHomeGames - minNumHomeGames <= tolerance,
//                $"There should be no team with more than {tolerance} home game more than any other team");

//        }

//        [Theory]
//        [InlineData(20, 40, 1, 1)]
//        [InlineData(20, 80, 2, 0)]
//        public void NumFixturesAndHomeGames1(int numTeams, int numFixtures, int roundRobins, int tolerance)
//        {
//            var tournament = new KnockoutTournament("Test");
//            tournament.NumPromoted = 2;
//            var res = _tournamentService.CreateKnockoutTournament(tournament, numTeams, 4, roundRobins, 1);
//            var fixtures = res.Groups.SelectMany(x => x.Fixtures).ToList();
//            var numHomeGames = fixtures
//                .GroupBy(x => x.HomeTeam.Team.Name)
//                .Select(x => new { x.Key, Count = x.Count() });
//            var minNumHomeGames = numHomeGames.Min(x => x.Count);
//            var maxNumHomeGames = numHomeGames.Max(x => x.Count);

//            Assert.True(numFixtures == fixtures.Count, $"There should be {numFixtures} fixtures");
//            Assert.True(
//                maxNumHomeGames - minNumHomeGames <= tolerance,
//                $"There should be no team with more than {tolerance} home game more than any other team");

//            Assert.True(tournament.Knockouts.Count == 7, $"There should be 7 knockout matches");
//        }

//        [Fact]
//        public void UnevenNumberTeams()
//        {
//            var tournament = new KnockoutTournament("Test");
//            var res = _tournamentService.CreateKnockoutTournament(tournament, 19, 1, 1, 1);

//            var fixtures = res.Groups[0].Fixtures;

//            Assert.True(171 == fixtures.Count, "There should be 171 fixtures");
//        }

//    }
//}
