import { TeamDto } from "../../api/ApiClient"
import { ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material"
import ListItemTeamName from "./TeamName"
import { ListItemAvatarSmall } from "../shared"

type Props = {
    team: TeamDto
    no?: number
}

const TeamListItem = ({ team, no }: Props) => {
    return <ListItem dense disablePadding>
        <ListItemAvatarSmall>
            <Typography variant="body1">
                {no}
            </Typography>
        </ListItemAvatarSmall>
        <ListItemText>
            <ListItemTeamName name={team.name} />
        </ListItemText>
        <ListItemSecondaryAction>
            <Typography variant="body1">
                {team.points}
            </Typography>
        </ListItemSecondaryAction>
    </ListItem>
}

export default TeamListItem