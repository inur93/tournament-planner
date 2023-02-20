import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TournamentDetailsDto } from '../api/ApiClient'
import CreateTournamentForm from '../components/tournament/CreateTournamentForm'

const CreateTournamentPage = () => {
  const navigate = useNavigate()

  const handleCreate = async (tournament: TournamentDetailsDto) => {
    navigate(`/tournament/${tournament.id}`)
  }
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        <Typography variant="h5" component="h1">
          Tournament Planner
        </Typography>
        <Typography variant="body1">
          Welcome to the tournament planner app, where you can do all kinds of cool stuff with your next football
          tournament Below you can choose what kind of tournament you would like to create, then you can configure all
          you like
        </Typography>
        <CreateTournamentForm afterCreate={handleCreate} />
      </Grid>
    </Grid>
  )
}

export default CreateTournamentPage
