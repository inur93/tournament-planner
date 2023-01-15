import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TournamentDetailsDto } from '../api/ApiClient'
import TournamentOverview from '../components/tournament/TournamentOverview'
import apiClient from '../config/apiClient'
import { Grid } from '@mui/material'
type Props = {}

const TournamentPage = ({ }: Props) => {
    const { id } = useParams()
    const [tournament, setTournament] = useState<TournamentDetailsDto>();

    useEffect(() => {
        if (!id) return;
        apiClient.getTournamentById(id).then(res => setTournament(res))
    }, [id])
    return <Grid container justifyContent='center'>
        <Grid item xs={11}>
            {!tournament && "loading..."}
            {tournament && <TournamentOverview tournament={tournament} />}
        </Grid>
    </Grid>
}

export default TournamentPage