import { faker } from "@faker-js/faker";
import { TeamDto } from "../api/ApiClient";


export const team = (data?: Partial<TeamDto>): TeamDto => {
    const { name } = data || {};
    return new TeamDto({
        id: faker.datatype.uuid(),
        name: name || faker.company.name(),
        points: faker.datatype.number({ min: 0, max: 40 })
    })
}

export const teamList = (count: number): TeamDto[] => {
    return new Array(count).fill(null).map(() => team()).sort((a,b) => b.points - a.points)
}