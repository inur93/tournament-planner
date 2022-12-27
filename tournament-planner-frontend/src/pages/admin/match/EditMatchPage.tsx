import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Match } from "../../../api";
import { MatchesApi } from "../../../apiClient";
import { EditMatch } from "../../../components/match/EditMatch";


type Params = {
    id: string
}
export function EditMatchPage() {
    const { id } = useParams<Params>()
    const [match, setMatch] = useState<Match>()

    useEffect(() => {
        if (!id) return;
        MatchesApi.getMatch(parseInt(id))
            .then(({ data }) => setMatch(data))
    }, [id])

    if (!match) return null;
    return <Grid container justifyContent='center'>
        <Grid item xs={11} sm={10} md={4}>
            <Typography variant='h2'>Match details</Typography>
            <EditMatch match={match} />
        </Grid>
        <Grid item xs={11} sm={10} md={4}>
        </Grid>
    </Grid>
}