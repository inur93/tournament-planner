import { useState } from 'react'
import { parseJSON } from "date-fns"
import format from "date-fns/format"
import { KnockoutTournamentDetails, LeagueDetails } from "../../api/ApiClient"
import FixtureList from "../fixture/FixtureList"
import GroupList from "../group/GroupList"
import { Grid, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material"


type Props = {
    tournament: KnockoutTournamentDetails | LeagueDetails
}

const TournamentOverview = ({ tournament }: Props) => {
    const [view, setView] = useState<string>('groups')
    const { date, name, fixtures, tournamentType } = tournament;
    const groups = tournamentType === 'knockout' ?
        (tournament as KnockoutTournamentDetails).groups :
        [];

    return <Grid container>
        <Grid item xs={12}>
            <Typography variant="h5" component="h1">
                {name}
            </Typography>
            <Typography variant="body2">
                {format(parseJSON(date), "dd. MMM yyyy")}
            </Typography>
            <ToggleButtonGroup
                color='primary'
                value={view}
                exclusive
                onChange={(e, value) => setView(value)}>
                <ToggleButton value="groups">Group stage</ToggleButton>
                <ToggleButton value="knockouts">Knockouts</ToggleButton>
            </ToggleButtonGroup>
            <GroupList groups={groups} />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h5" component="h2">
                Fixtures
            </Typography>
            <FixtureList fixtures={fixtures} />
        </Grid>
    </Grid>
}

export default TournamentOverview