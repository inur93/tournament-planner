import { ThemeProvider } from '@mui/material'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Toast from './components/shared/Toast/Toast'
import { theme } from './config/Theme'
import CreateTournamentPage from './pages/CreateTournamentPage'
import TournamentPage from './pages/TournamentPage'
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Toast>
          <Routes>
            <Route path="/" element={<CreateTournamentPage />} />
            <Route path="/tournament/:id" element={<TournamentPage />} />
          </Routes>
        </Toast>
      </ThemeProvider>
    </Router>
  )
}

export default App
