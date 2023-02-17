import { faker } from "@faker-js/faker";
import { startOfToday } from 'date-fns';
import { KnockoutTournamentDetails } from "../api/ApiClient";
import { fixtureList, matchList } from "./mockFixtures";
import { groupList } from "./mockGroup";

export const knockout = (): KnockoutTournamentDetails => {
    const fixtures = fixtureList(faker.datatype.number({ min: 1, max: 20 }));
    const tournament = new KnockoutTournamentDetails({
        id: faker.datatype.uuid(),
        name: `${faker.vehicle.manufacturer()} Cup`,
        date: faker.datatype.datetime({ min: startOfToday().getTime() }),
        fixtures: fixtures,
        matches: matchList(fixtures),
        tournamentType: 'knockout',
        groups: groupList(4)
    })

    tournament.groups = groupList(4)
    return tournament;
}
