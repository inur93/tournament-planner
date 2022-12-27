import { Button, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Competition } from "../../api"
import { CompetitionsApi } from "../../apiClient"
import { CompetitionsList } from "../../components/competition/CompetitionsList"
import { CreateCompetitionModal } from "../../components/competition/CreateCompetitionModal"
import { ButtonContainer } from "../../components/shared/ButtonContainer"

export const CompetitionListPage = () => {
    const [items, setItems] = useState<Competition[]>([]);
    const [show, setShow] = useState(false);
    const updateItems = () => {
        CompetitionsApi.getCompetitons()
            .then(({ data }) => setItems(data))
    }
    useEffect(() => {
        updateItems();
    }, []);

    const handleCloseModal = () => {
        setShow(false);
        updateItems();
    }

    return <Grid container justifyContent='center'>
        

    </Grid>
}