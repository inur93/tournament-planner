import Card from "@mui/material/Card/Card"
import CardContent from "@mui/material/CardContent/CardContent"
import Typography from "@mui/material/Typography"
import { GroupDto } from "../../api/ApiClient"
import { GridItem } from "../shared"
import TeamList from "../team/TeamList"

type Props = {
    group: GroupDto
}

const GroupListItem = ({ group }: Props) => {
    return <GridItem xs={6} key={group.id}>
        <Card>
            <CardContent>
                <Typography variant='h6'>
                    {group.name}
                </Typography>
                <TeamList teams={group.teams} />
            </CardContent>
        </Card>
    </GridItem>
}

export default GroupListItem