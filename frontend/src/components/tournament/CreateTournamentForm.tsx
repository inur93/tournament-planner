import { useState } from "react"
import { KnockoutTournamentForCreation, TournamentDetailsDto } from "../../api/ApiClient"
import apiClient from "../../config/apiClient"
import { Select } from "../shared"
import CreateKnockoutTournamentForm from "./CreateKnockoutTournamentForm"

const tournamentTypeOptions = [
    { key: 'knockout', label: 'Knockout Tournament' },
    { key: 'league', label: 'League' },
]

type TournamentTypes = 'knockout' | 'league' | undefined
type Props = {
    defaultTournamentType?: TournamentTypes
    afterCreate?: (tournament: TournamentDetailsDto) => Promise<void>
}

const CreateTournamentForm = ({ defaultTournamentType, afterCreate }: Props) => {
    const [tournamentType, setTournamentType] = useState<TournamentTypes>(defaultTournamentType)

    const handleSubmit = async (tournament: KnockoutTournamentForCreation) => {
        try {
        const result = await apiClient.createKnockoutTournament(tournament)
        afterCreate && afterCreate(result)
        }catch(e){
            console.log('error', e)
        }
    }

    return <>
        <Select
            name="tournamentType"
            label="Type"
            value={tournamentType}
            options={tournamentTypeOptions}
            onChange={(e) => setTournamentType(e.target.value as TournamentTypes)} />

        {tournamentType === 'knockout' && <CreateKnockoutTournamentForm
            values={{
                name: '',
                numTeams: 16,
                groupStageLegs: 2,
                knockoutLegs: 2,
                numGroups: 4,
                numPromoted: 2,
            }}
            onSubmit={handleSubmit} />}
    </>
}

export default CreateTournamentForm