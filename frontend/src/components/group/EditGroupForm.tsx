import { Card, CardContent, List, ListItem, Typography } from "@mui/material"
import { useState } from "react"
import { GroupDto } from "../../api/ApiClient"
import Editable from "../shared/Editable/Editable"
import EditTeamName from "../team/EditTeamName"

type Props = {
    group: GroupDto
}

const EditGroupForm = ({ group }: Props) => {
    const [name, setName] = useState(group.name)
    const handleTeamNameChange = (id: string) => async (value: string) => {

    }
    return <Card>
        <CardContent>
            <Editable onChange={value => setName(value)}>
                <Typography variant='h6'>
                    {name}
                </Typography>
            </Editable>
            <List>
                {group.teams.map(x => (
                    <ListItem key={x.id}>
                        <EditTeamName team={x} onChange={handleTeamNameChange(x.id)} />
                    </ListItem>
                ))}
            </List>
        </CardContent>
    </Card>
}

export default EditGroupForm