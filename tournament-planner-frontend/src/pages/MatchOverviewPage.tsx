import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { Match, Signup } from "../api"
import { MatchesApi } from "../apiClient"
import { LineUp } from "../components/match/LineUp"
import { MatchCard } from "../components/match/MatchCard"
import { MatchListCard } from "../components/match/MatchListCard"
import { NextMatchesCard } from "../components/match/NextMatchesCard"
import { MatchContext } from "../contexts/MatchContext"

export const MatchOverviewPage = () => {
    const [match, setMatch] = useState<Match>()
    const [signups, setSignups] = useState<Signup[]>([])

    const updateSignups = async () => {
        if (!match) return
        MatchesApi.getMatchSignups(match?.id)
            .then(({ data }) => setSignups(data))
    }

    useEffect(() => {
        MatchesApi.getNextMatch()
            .then(({ data }) => setMatch(data));
    }, [])

    useEffect(() => {
        updateSignups()
    }, [match])


    return <MatchContext.Provider value={{ match, signups, updateSignups }}>
        <Grid container justifyContent='center' spacing={'1rem'} alignItems='stretch'>
            <Grid item xs={12} sm={11} md={5}>
                <MatchCard title='Next match'></MatchCard>
            </Grid>
            <Grid item xs={12} sm={11} md={5}>
                <NextMatchesCard match={match} />
            </Grid>

            <Grid item xs={11} md={10}>
                <LineUp />
            </Grid>
        </Grid>
    </MatchContext.Provider>
}