import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Season } from "../../api";

type Props = {
    items: Season[],
    afterDelete?: () => void
}
export const SeasonsList = ({ items }: Props) => {
    return <List dense>
        {items
            .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
            .map(x => <ListItem button component={Link} to={`/admin/seasons/${x.id}`} key={x.id}>
                <ListItemText primary={x.name} />
            </ListItem>)}
    </List>
}
