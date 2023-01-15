import { Typography } from "@mui/material"
import { TeamDto } from "../../api/ApiClient"
import Editable from "../shared/Editable/Editable"

type Props = {
    team: TeamDto
    onChange: (name: string) => Promise<void>
}

const EditTeamName = ({ team, onChange }: Props) => {
    return <Editable onChange={onChange}>
        <Typography variant="body1">
            {team.name}
        </Typography>
    </Editable>
}

export default EditTeamName