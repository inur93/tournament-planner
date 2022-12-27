import { Box, Card, CardContent, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material"
import { Match } from "../../api"

type Props = {
    match?: Match
}
export const CupMatch = ({ match }: Props) => {
    return <Paper elevation={2} sx={{ maxWidth: 260 }}>
        <List dense>
            <ListItem >
                <ListItemText primary={match?.homeTeamId ?? "Liverpool"} />
                <ListItemAvatar sx={{ textAlign: 'right' }}>5</ListItemAvatar>
            </ListItem>
            <Divider />
            <ListItem >
                <ListItemText primary={match?.homeTeamId ?? "Manchester United"} />
                <ListItemAvatar sx={{ textAlign: 'right' }}>0</ListItemAvatar>
            </ListItem>
        </List>
    </Paper>
}