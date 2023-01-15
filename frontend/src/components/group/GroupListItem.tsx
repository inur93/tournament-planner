import Card from "@mui/material/Card/Card"
import CardContent from "@mui/material/CardContent/CardContent"
import Typography from "@mui/material/Typography"
import { GroupDto } from "../../api/ApiClient"
import Standings from "../tournament/Standings"

type Props = {
    group: GroupDto
}

const GroupListItem = ({ group }: Props) => {
    return <Card>
        <CardContent>
            <Typography variant='h6'>
                {group.name}
            </Typography>
            <Standings teams={group.teams} />
        </CardContent>
    </Card>
}

export default GroupListItem