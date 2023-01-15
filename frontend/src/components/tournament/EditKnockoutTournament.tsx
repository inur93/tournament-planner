import { KnockoutTournamentDetails } from "../../api/ApiClient"
import { Grid } from "@mui/material"
import EditGroupForm from "../group/EditGroupForm"
import { Form, Formik } from "formik"
import { TextField } from "../shared"
import EditTournamentMasterData from "./EditTournamentMasterData"

type Props = {
    tournament: KnockoutTournamentDetails
    saveMasterData: (values: { name: string, date: Date }) => Promise<void>
}

const EditKnockoutTournament = ({ tournament, saveMasterData }: Props) => {

    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <EditTournamentMasterData
                tournament={tournament}
                onSave={saveMasterData} />
        </Grid>
        {tournament.groups.map(group => (
            <Grid item xs={12} sm={6} key={group.id}>
                <EditGroupForm group={group} />
            </Grid>
        ))}
    </Grid>
}

export default EditKnockoutTournament