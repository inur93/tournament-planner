import { Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { parseJSON } from 'date-fns'
import format from 'date-fns/format'
import { useState } from 'react'
import {
  FixtureDto,
  KnockoutTournamentDetails,
  MatchDto,
  MatchType,
  TournamentDetailsDto
} from '../../api/ApiClient'
import apiClient from '../../config/apiClient'
import { useData } from '../../hooks/useData'
import FixtureList from '../fixture/FixtureList'
import GroupList from '../group/GroupList'
import Loading from '../shared/Loading/Loading'
import Knockouts from './Knockouts'

type Props = {
  tournament: TournamentDetailsDto
}

const TournamentOverview = ({ tournament }: Props) => {
  const [view, setView] = useState<string>('groups')
  const [fixtures, loadFixtures] = useData<FixtureDto[], string>(
    async () => apiClient.getTournamentFixtures(tournament.id, MatchType.All),
    tournament.id
  )
  const [matches, loadMatches] = useData<MatchDto[], string>(
    () => apiClient.getTournamentMatches(tournament.id, MatchType.Knockout),
    tournament.id
  )
  const { date, name, tournamentType } = tournament
  const groups = tournamentType === 'knockout' ? (tournament as KnockoutTournamentDetails).groups : []

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" component="h1">
          {name}
        </Typography>
        <Typography variant="body2">{format(parseJSON(date), 'dd. MMM yyyy')}</Typography>
        <ToggleButtonGroup color="primary" value={view} exclusive onChange={(e, value) => setView(value)}>
          <ToggleButton value="groups">Group stage</ToggleButton>
          <ToggleButton value="knockouts">Knockouts</ToggleButton>
        </ToggleButtonGroup>
        <div>
          {view === 'groups' && <GroupList groups={groups} />}
          {view === 'knockouts' && (
            <Loading {...matches} retry={loadMatches}>
              <Knockouts matches={matches.data || []} />
            </Loading>
          )}
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2">
          Fixtures
        </Typography>
        <Loading {...fixtures} retry={loadFixtures}>
          <FixtureList fixtures={fixtures.data || []} />
        </Loading>
      </Grid>
    </Grid>
  )
}

export default TournamentOverview
