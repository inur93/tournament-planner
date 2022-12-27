import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Season } from "../../api"
import { SeasonsApi } from "../../apiClient"
import { FilteredMatchList } from "../../components/match/FilteredMatchList"
import { CreateSeasonModal } from "../../components/season/CreateSeasonModal"
import { EditSeason } from "../../components/season/EditSeason"

type Params = {
    id?: string
}
export const SeasonPage = () => {
    const [season, setSeason] = useState<Season>();
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams<Params>();

    const updateContent = () => {
        if (!id) return;
        SeasonsApi.getSeason(parseInt(id))
            .then(({ data }) => setSeason(data))
    }

    useEffect(() => {
        updateContent();
    }, [id]);

    const closeModal = () => {
        updateContent();
        setShowModal(false);
    }
    if (!season) {
        return null;
    }
    return <Grid container justifyContent='center' spacing='1rem' >
        <Grid item xs={12} md={5}>
            <Typography variant='h2'>Season</Typography>
            <EditSeason season={season} />
        </Grid>
        <Grid item xs={12} md={5}>
            <Typography variant='h2'>Games</Typography>
            <FilteredMatchList seasonId={id} useAdminLink></FilteredMatchList>
        </Grid>
        <CreateSeasonModal
            open={showModal}
            onClose={closeModal} />
    </Grid>
}