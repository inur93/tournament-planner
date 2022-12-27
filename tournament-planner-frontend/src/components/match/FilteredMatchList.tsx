import { Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Match } from "../../api"
import { MatchesApi } from "../../apiClient"
import { SelectCompetition } from "../competition/SelectCompetition"
import { SelectSeason } from "../season/SelectSeason"
import { MatchList } from "./MatchList"


type Props = {
    competitionId?: string,
    seasonId?: string,
    useAdminLink?: boolean
}
export const FilteredMatchList = ({ competitionId: defaultCompetitionId, seasonId: defaultSeasonId, useAdminLink }: Props) => {
    const [matches, setMatches] = useState<Match[]>([])
    const [competitionId, setCompetitionId] = useState(defaultCompetitionId)
    const [seasonId, setSeasonId] = useState(defaultSeasonId)

    useEffect(() => {
        if (!competitionId || !seasonId) return
        MatchesApi.getMatches(
            undefined,
            undefined,
            competitionId ? parseInt(competitionId) : undefined,
            seasonId ? parseInt(seasonId) : undefined)
            .then(({ data }) => setMatches(data))
    }, [competitionId, seasonId])


    return <React.Fragment>
        {defaultSeasonId && <SelectCompetition value={competitionId} onChange={e => setCompetitionId(e.target.value)} />}
        {defaultCompetitionId && <SelectSeason value={seasonId} onChange={e => setSeasonId(e.target.value)} />}
        < MatchList items={matches} useAdminLink={useAdminLink} />
        {(!competitionId || !seasonId) && <Typography variant='body1'>Add a filter to find games</Typography>}
    </React.Fragment>
}
