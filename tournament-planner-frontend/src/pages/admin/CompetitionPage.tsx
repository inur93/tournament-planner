import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Competition } from "../../api"
import { CompetitionsApi } from "../../apiClient"
import { EditCompetition } from "../../components/competition/EditCompetition"
import { FilteredMatchList } from "../../components/match/FilteredMatchList"

type Params = {
    id?: string
}
export const CompetitionPage = () => {
    const [competition, setCompetition] = useState<Competition>();
    const { id } = useParams<Params>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;
        CompetitionsApi.getCompetition(parseInt(id))
            .then(({ data }) => setCompetition(data))
    }, [id, setCompetition]);

    if (!competition) {
        return null;
    }
    return <Grid container justifyContent='center' spacing='1rem'>
        <Grid item xs={12} sm={11} md={5}>
            <Typography variant='h2'>Competition</Typography>
            <EditCompetition competition={competition} afterUpdate={() => navigate('/admin')} />
        </Grid>
        <Grid item xs={12} sm={11} md={5}>
            <Typography variant='h2'>Games</Typography>
            <FilteredMatchList competitionId={id} useAdminLink />
        </Grid>
    </Grid>
}