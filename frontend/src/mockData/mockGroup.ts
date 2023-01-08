import { GroupDto } from "../api/ApiClient";
import { faker } from '@faker-js/faker'
import { fixtureList } from "./mockFixtures";
import { teamList } from "./mockTeam";


export const group = (): GroupDto => {
    const no = faker.datatype.number({ min: 1, max: 16 })
    return new GroupDto({
        id: faker.datatype.uuid(),
        name: `Group ${no}`,
        shortName: `${no}`,
        fixtures: fixtureList(8),
        teams: teamList(4)
    })
}

export const groupList = (count: number): GroupDto[] => {
    const list = new Array(count).fill(null).map(() => group())
    return list;
}