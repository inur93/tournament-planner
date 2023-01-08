import ListItem from "@mui/material/ListItem/ListItem"
import ListItemText from "@mui/material/ListItemText/ListItemText"
import Typography from "@mui/material/Typography"
import { TeamDto } from "../../api/ApiClient"
import ListItemAvatarSmall from "../shared/List/ListItemAvatarSmall"
import ListItemTeamName from "./TeamName"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction/ListItemSecondaryAction"

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
            {team.points}
        </ListItemSecondaryAction>
    </ListItem>
}

export default TeamListItem