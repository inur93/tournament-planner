import { List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Match } from "../../api";
import { formatMatchDateShort } from "../../utils/dateFunctions";
import { formatMatchName, formatMatchScore } from "../../utils/stringFunctions";

type Props = {
    items: Match[],
    useAdminLink?: boolean
}

const hasScore = (match: Match) => {
    return !!(match.awayScore !== undefined &&
        match.awayScore !== null &&
        match.homeScore !== undefined &&
        match.homeScore !== null);
}
export const MatchList = ({ items, useAdminLink }: Props) => {
    if(!items.length){
        return <Typography variant='body1'>No matches available</Typography>
    }
    return <List dense>
        {items.map(x => <ListItem
            button
            component={Link}
            to={useAdminLink ? `/admin/match/${x.id}` : `/match/${x.id}`}
            key={x.id}>
            <ListItemText primary={formatMatchName(x)} secondary={x.location} />
            <ListItemSecondaryAction>
                {hasScore(x) ? formatMatchScore(x) : formatMatchDateShort(x.dateTime)}
            </ListItemSecondaryAction>
        </ListItem>)}
    </List>
}
