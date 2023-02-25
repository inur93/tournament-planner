import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import Loading from '../components/shared/Loading/Loading'
import TournamentOverview from '../components/tournament/TournamentOverview'
import apiClient from '../config/apiClient'
import { useData } from '../hooks/useData'

const TournamentPage = () => {
  const { id } = useParams()
  const [tournament, loadTournament] = useData(async (_id) => !_id ? undefined : apiClient.getTournamentById(_id), id)

  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        <Loading {...tournament} retry={loadTournament}>
          {tournament.data && <TournamentOverview tournament={tournament.data} />}
        </Loading>
      </Grid>
    </Grid>
  )
}

export default TournamentPage
