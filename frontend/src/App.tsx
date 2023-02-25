import { ThemeProvider } from '@mui/material'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Toast from './components/shared/Toast/Toast'
import { theme } from './config/Theme'
import CreateTournamentPage from './pages/CreateTournamentPage'
import TournamentPage from './pages/TournamentPage'
import Dashboard from './pages/Dashboard'
import Navbar from './components/navbar/Navbar'
import Spacer from './components/shared/Spacer/Spacer'
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Toast>
          <Navbar />
          <Spacer spacing={5} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-tournament" element={<CreateTournamentPage />} />
            <Route path="/tournament/:id" element={<TournamentPage />} />
          </Routes>
        </Toast>
      </ThemeProvider>
    </Router>
  )
}

export default App
