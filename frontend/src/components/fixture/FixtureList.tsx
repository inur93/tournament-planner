import Typography from "@mui/material/Typography"

import { FixtureDto } from "../../api/ApiClient"
import { List } from "../shared"
import FixtureListItem from "./FixtureListItem"



type Props = {
    fixtures: FixtureDto[]
}
const FixtureList = ({ fixtures }: Props) => {
    if(!fixtures.length){
        return <Typography variant="body1">
            No fixtures available
        </Typography>
    }
    return <List>
        {fixtures.map(x =>
            <FixtureListItem key={x.id} fixture={x} />
        )}
    </List>
}

export default FixtureList

