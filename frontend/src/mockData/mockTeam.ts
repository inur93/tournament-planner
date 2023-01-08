import { faker } from "@faker-js/faker";
import { TeamDto } from "../api/ApiClient";


export const team = (data?: Partial<TeamDto>): TeamDto => {
    const { name } = data || {};
    return new TeamDto({
        id: faker.datatype.uuid(),
        name: name || faker.company.name(),
    })
}

export const teamList = (count: number): TeamDto[] => {
    return new Array(count).fill(null).map(() => team())
}