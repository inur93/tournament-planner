import { parseJSON } from "date-fns"
import format from "date-fns/format"
import { KnockoutTournamentDetails, LeagueDetails } from "../../api/ApiClient"
import FixtureList from "../fixture/FixtureList"
import GroupList from "../group/GroupList"
import { Grid, Typography } from "@mui/material"


type Props = {
    tournament: KnockoutTournamentDetails | LeagueDetails
}

const TournamentOverview = ({ tournament }: Props) => {
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
            <GroupList groups={groups} />
        </Grid>
        <Grid xs={12}>
            <Typography variant="h5" component="h2">
                Fixtures
            </Typography>
            <FixtureList fixtures={fixtures} />
        </Grid>
    </Grid>
}

export default TournamentOverview