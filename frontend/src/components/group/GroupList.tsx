import { GroupDto } from "../../api/ApiClient"
import { GridContainer } from "../shared"
import GroupListItem from "./GroupListItem"

type Props = {
    groups: GroupDto[]
}

const GroupList = ({ groups }: Props) => {
    return <GridContainer>
        {groups.map(x => (
            <GroupListItem key={x.id} group={x} />
        ))}
    </GridContainer>
}

export default GroupList