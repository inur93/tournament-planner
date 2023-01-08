
import { faker } from '@faker-js/faker';
import { FixtureDto } from '../api/ApiClient';
import { team } from "./mockTeam";

type FixtureConfig = {
    omitScore?: boolean,
    omitDateTime?: boolean
}
const score = () => faker.datatype.number({ min: 0, max: 5 })
export const fixture = (data?: Partial<FixtureDto>, config?: FixtureConfig): FixtureDto => {
    const { no, homeScore, awayScore, home, away, dateTime } = data || {}
    const { omitScore, omitDateTime } = config || {}
    return new FixtureDto({
        homeScore: omitScore ? undefined : (homeScore || score()),
        awayScore: omitScore ? undefined : (awayScore || score()),
        id: faker.datatype.uuid(),
        no: no || faker.datatype.number(),
        home: home || team(),
        away: away || team(),
        dateTime: omitDateTime ? undefined : (dateTime || faker.datatype.datetime({ min: new Date().getTime() }))
    })
}

export const fixtureList = (count: number, config?: FixtureConfig): FixtureDto[] => {
    return new Array(count).fill(null).map(() => fixture({}, config))
}