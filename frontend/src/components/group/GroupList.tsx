import { Grid } from "@mui/material"
import { GroupDto } from "../../api/ApiClient"
import GroupListItem from "./GroupListItem"

type Props = {
    groups: GroupDto[]
}

const GroupList = ({ groups }: Props) => {
    return <Grid container spacing={2}>
        {groups.map(x => (
            <Grid item sm={6} key={x.id}>
                <GroupListItem group={x} />
            </Grid>
        ))}
    </Grid>
}

export default GroupList