import Card from "@mui/material/Card/Card"
import CardContent from "@mui/material/CardContent/CardContent"
import Typography from "@mui/material/Typography"
import { GroupDto } from "../../api/ApiClient"
import { GridItem } from "../shared"
import Standings from "../tournament/Standings"

type Props = {
    group: GroupDto
}

const GroupListItem = ({ group }: Props) => {
    return <GridItem sm={6} key={group.id}>
        <Card>
            <CardContent>
                <Typography variant='h6'>
                    {group.name}
                </Typography>
                <Standings teams={group.teams} />
            </CardContent>
        </Card>
    </GridItem>
}

export default GroupListItem