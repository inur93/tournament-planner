import { ThemeProvider } from '@mui/material';
import axios from 'axios';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CupGroup } from './components/cup/CupGroup';
import { KnockoutStage } from './components/cup/KnockoutStage';
import { LeagueTable } from './components/league/LeagueTable';
import { CupMatch } from './components/match/CupMatch';
import Navbar from './components/shared/Navbar';
import { theme } from './config/Theme';
import { CompetitionPage } from './pages/admin/CompetitionPage';
import { ImportMatchesPage } from './pages/admin/ImportMatchesPage';
import { EditMatchPage } from './pages/admin/match/EditMatchPage';
import { PlayerPage } from './pages/admin/player/PlayerPage';
import { SeasonPage } from './pages/admin/SeasonPage';
import { AdministrationPage } from './pages/AdministrationPage';
import { LoginPage } from './pages/auth/LoginPage';
import { MatchOverviewPage } from './pages/MatchOverviewPage';
import { MatchPage } from './pages/MatchPage';
import { ProfilePage } from './pages/ProfilePage';

axios.defaults.withCredentials = false;

const tableRows = [
  {
    teamId: 1,
    name: 'Liverpool with a longer name',
    position: 1,
    draws: 0,
    goalDifference: 100,
    goalsAgainst: 0,
    goalsFor: 100,
    losses: 0,
    played: 18,
    points: 54,
    wins: 18
  },
  {
    teamId: 1,
    name: 'Liverpool',
    position: 1,
    draws: 0,
    goalDifference: 100,
    goalsAgainst: 0,
    goalsFor: 100,
    losses: 0,
    played: 18,
    points: 54,
    wins: 18
  },
  {
    teamId: 1,
    name: 'Liverpool',
    position: 1,
    draws: 0,
    goalDifference: 100,
    goalsAgainst: 0,
    goalsFor: 100,
    losses: 0,
    played: 18,
    points: 54,
    wins: 18
  },
  {
    teamId: 1,
    name: 'Liverpool',
    position: 1,
    draws: 0,
    goalDifference: 100,
    goalsAgainst: 0,
    goalsFor: 100,
    losses: 0,
    played: 18,
    points: 54,
    wins: 18
  },
  {
    teamId: 1,
    name: 'Liverpool',
    position: 1,
    draws: 0,
    goalDifference: 100,
    goalsAgainst: 0,
    goalsFor: 100,
    losses: 0,
    played: 18,
    points: 54,
    wins: 18
  },
  {
    teamId: 1,
    name: 'Liverpool',
    position: 1,
    draws: 0,
    goalDifference: 100,
    goalsAgainst: 0,
    goalsFor: 100,
    losses: 0,
    played: 18,
    points: 54,
    wins: 18
  },
]
const Test1 = <LeagueTable rows={tableRows} />
const Test2 = <CupGroup name='Group A' table={tableRows} />
const Test3 = <CupMatch match={{
  awayTeamId: 1,
  competition: {
    id: 1,
    isActive: true,
    name: "Tournament",
    numPlayers: 11,
    numSubstitutes: 3,
  },
  competitionId: 1,
  dateTime: "2022-09-24 12:00",
  homeTeamId: 2,
  id: 2,
  seasonId: 1,
  season: {
    end: "",
    id: 2,
    name: "2022",
    start: ""
  }
}} />
const Test4 = <KnockoutStage />
function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={Test4} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdministrationPage />} />
          <Route path="/admin/competitions/:id" element={<CompetitionPage />} />
          <Route path="/admin/seasons/:id" element={<SeasonPage />} />
          <Route path="/admin/match/import" element={<ImportMatchesPage />} />
          <Route path="/admin/match/:id" element={<EditMatchPage />} />
          <Route path="/match/:id" element={<MatchPage />} />
          <Route path="/admin/player" element={<PlayerPage />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
