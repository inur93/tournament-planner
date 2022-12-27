import {
    CompetitionsApiFactory,
    TeamsApiFactory,
    MatchesApiFactory,
    PlayersApiFactory,
    SeasonsApiFactory,
    SignupsApiFactory,
    AuthApiFactory
} from "./api"
import { ProfileApiFactory } from "./api/api"
import { Configuration } from "./api/configuration"
const configs = new Configuration({
    baseOptions: {

        headers: {
            "Accept": "application/json"
        },
    },
    basePath: "https://localhost:7030",
})
export const CompetitionsApi = CompetitionsApiFactory(configs)
export const TeamsApi = TeamsApiFactory(configs)
export const MatchesApi = MatchesApiFactory(configs)
export const PlayersApi = PlayersApiFactory(configs)
export const SeasonsApi = SeasonsApiFactory(configs)
export const SignupsApi = SignupsApiFactory(configs)
export const ProfileApi = ProfileApiFactory(configs)
export const AuthApi = AuthApiFactory(configs)