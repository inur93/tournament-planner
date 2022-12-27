import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Match, Signup } from "../api"
import { MatchesApi } from "../apiClient"
import { LineUp } from "../components/match/LineUp"
import { MatchCard } from "../components/match/MatchCard"
import { NextMatchesCard } from "../components/match/NextMatchesCard"
import { MatchContext } from "../contexts/MatchContext"

type Params = {
    id?: string
}
export const MatchPage = () => {
    const [match, setMatch] = useState<Match>();
    const [signups, setSignups] = useState<Signup[]>([]);
    const params = useParams<Params>();

    const updateSignups = async () => {
        if (!match) return;
        await MatchesApi.getMatchSignups(match?.id)
            .then(({ data }) => setSignups(data));
    }

    useEffect(() => {
        if (!params.id) return;
        MatchesApi.getMatch(parseInt(params.id))
            .then(({ data }) => setMatch(data));
    }, [params.id])

    useEffect(() => {
        updateSignups();
    }, [match]);

    return <MatchContext.Provider value={{ match, signups, updateSignups }}>
        <Grid container justifyContent='center' spacing={'1rem'} alignItems='stretch'>
            <Grid item xs={12} sm={11} md={5}>
                <MatchCard title='' hideLink ></MatchCard>
            </Grid>
            <Grid item xs={12} sm={11} md={5}>
                <NextMatchesCard match={match} />
            </Grid>
            <Grid item xs={11} md={10} >
                <LineUp />
            </Grid>
        </Grid>
    </MatchContext.Provider>
}