import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TournamentDetailsDto } from '../api/ApiClient'
import { GridContainer, GridItem } from "../components/shared"
import TournamentOverview from '../components/tournament/TournamentOverview'
import apiClient from '../config/apiClient'
type Props = {}

const TournamentPage = ({ }: Props) => {
    const { id } = useParams()
    const [tournament, setTournament] = useState<TournamentDetailsDto>();

    useEffect(() => {
        if (!id) return;
        apiClient.getTournamentById(id).then(res => setTournament(res))
    }, [id])
    return <GridContainer center>
        <GridItem xs={11}>
            {!tournament && "loading..."}
            {tournament && <TournamentOverview tournament={tournament} />}
        </GridItem>
    </GridContainer>
}

export default TournamentPage