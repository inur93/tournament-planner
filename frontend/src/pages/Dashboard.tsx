import { Grid, Typography } from '@mui/material'
import TournamentList from '../components/tournament/TournamentList'
import { useData } from '../hooks/useData'
import apiClient from '../config/apiClient'
import Loading from '../components/shared/Loading/Loading'
import { Button } from '../components/shared'

type Props = {}

const Dashboard = ({}: Props) => {
  const [tournaments] = useData(() => apiClient.getTournaments())
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
        <Button primary to='create-tournament'>New Tournament</Button>
        <Loading {...tournaments}>
          <TournamentList tournaments={tournaments.data || []} />
        </Loading>
      </Grid>
    </Grid>
  )
}
export default Dashboard
