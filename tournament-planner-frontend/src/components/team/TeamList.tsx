import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Team } from "../../api";
import Icons from '../../utils/icons';

type Props = {
    items: Team[],
    afterDelete?: () => void
}
export const TeamsList = ({ items }: Props) => {
    const handleDelete = (id: number) => () => {
        alert('not supported yet');
    }
    return <List dense>
        {items.map(x => <ListItem button component={Link} to={`/admin/Teams/${x.id}`} key={x.id}>
            <ListItemText primary={x.name} />
            <ListItemSecondaryAction>
                <IconButton onClick={handleDelete(x.id)}>
                    <Icons.Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>)}
    </List>
}