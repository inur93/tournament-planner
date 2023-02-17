import { List, ListSubheader } from "@mui/material"
import React from "react"
import { MatchDto } from "../../api/ApiClient"
import StyledFixtureListItem from "../fixture/FixtureListItem"

type Props = {
    matches: MatchDto[]
}

const Knockouts = ({ matches }: Props) => {

    const elements = matches.reduce<React.ReactElement[]>((elements, current, index, array) => {
        if (index === 0 || array[index - 1].roundOf !== current.roundOf) {
            elements.push(<ListSubheader>{current.roundOfLabel}</ListSubheader>)
        }
        elements.push(<StyledFixtureListItem fixture={current} />)
        return elements
    }, [])
    return <List>
        {elements}
    </List>
}

export default Knockouts