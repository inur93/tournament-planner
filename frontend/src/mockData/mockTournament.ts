import { faker } from "@faker-js/faker";
import { startOfToday } from 'date-fns';
import { KnockoutTournamentDetails } from "../api/ApiClient";
import { groupList } from "./mockGroup";

export const knockout = (): KnockoutTournamentDetails => {
    const tournament = new KnockoutTournamentDetails({
        id: faker.datatype.uuid(),
        name: `${faker.vehicle.manufacturer()} Cup`,
        date: faker.datatype.datetime({ min: startOfToday().getTime() }),
        tournamentType: 'knockout',
        groups: groupList(4)
    })

    tournament.groups = groupList(4)
    return tournament;
}
