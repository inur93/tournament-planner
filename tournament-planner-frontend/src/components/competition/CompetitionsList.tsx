import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Competition } from "../../api";
import { cutAt } from "../../utils/stringFunctions";

type Props = {
    items: Competition[],
    afterDelete?: () => void
}
export const CompetitionsList = ({ items }: Props) => {
    return <List dense>
        {items.map(x => <ListItem
            button
            component={Link}
            to={`/admin/competitions/${x.id}`}
            key={x.id}>
            <ListItemText primary={x.name} secondary={cutAt(x.description, 40)} />
        </ListItem>)}
    </List>
}