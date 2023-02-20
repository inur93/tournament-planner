import { faker } from '@faker-js/faker'
import { FixtureDto, MatchDto, TournamentDto } from '../api/ApiClient'
import { team } from './mockTeam'
import { baseUrl } from '../config/apiClient'

type FixtureConfig = {
  omitScore?: boolean
  omitDateTime?: boolean
}
const score = () => faker.datatype.number({ min: 0, max: 5 })
export const fixture = (data?: Partial<FixtureDto>, config?: FixtureConfig): FixtureDto => {
  const { no, homeScore, awayScore, home, away, dateTime } = data || {}
  const { omitScore, omitDateTime } = config || {}
  return new FixtureDto({
    homeScore: omitScore ? undefined : homeScore || score(),
    awayScore: omitScore ? undefined : awayScore || score(),
    id: faker.datatype.uuid(),
    no: no || faker.datatype.number(),
    home: home || team(),
    away: away || team(),
    dateTime: omitDateTime ? undefined : dateTime || faker.datatype.datetime({ min: new Date().getTime() })
  })
}

export const fixtureList = (count: number, config?: FixtureConfig): FixtureDto[] => {
  return new Array(count).fill(null).map((_, i) => fixture({ no: i + 1 }, config))
}

export const matchList = (fixtures: FixtureDto[]): MatchDto[] => {
  return fixtures
    .map((x, i) => {
      const roundOf = faker.datatype.number({ min: 1, max: fixtures.length / 4 })
      return new MatchDto({ ...x, round: i, roundOf, roundOfLabel: `Round of ${roundOf}` })
    })
    .sort((a, b) => (a.roundOf || 0) - (b.roundOf || 0))
}

export const mockGetTournamentMatches = (tournament: TournamentDto) => {
  return {
    url: `${baseUrl}/api/tournaments/:id/matches?type=Knockout`,
    method: 'GET',
    status: 200,
    response: matchList(fixtureList(20))
  }
}

export const mockGetTournamentFixtures = () => {
  return {
    url: `${baseUrl}/api/tournaments/:id/fixtures?type=Group`,
    method: 'GET',
    status: 200,
    response: fixtureList(20)
  }
}
