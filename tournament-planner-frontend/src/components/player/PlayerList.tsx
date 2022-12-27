import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"
import { Player } from "../../api"



type Props = {
    players: Player[],
    createLink?: (id: number) => string
}
export const PlayerList = ({ players, createLink }: Props) => {

    const buildLink = (id: number) => {
        if (createLink) {
            return createLink(id)
        }
        return `/profile/${id}`
    }
    return <List>
        {players.map(x => <ListItem key={x.id} component={Link} to={buildLink(x.id)}>
            <ListItemAvatar>
                <Avatar>
                    {x.number}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={x.name} secondary={x.nickname} />
        </ListItem>)}
    </List>
}