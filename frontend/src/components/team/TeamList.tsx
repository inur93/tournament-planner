import { TeamDto } from "../../api/ApiClient"
import { List } from "@mui/material"
import TeamListItem from "./TeamListItem"

type Props = {
    teams: TeamDto[]
}

const TeamList = ({ teams }: Props) => {
    return <List>
        {teams.map((x, i) => (<TeamListItem team={x} no={i + 1} />))}
    </List>
}

export default TeamList