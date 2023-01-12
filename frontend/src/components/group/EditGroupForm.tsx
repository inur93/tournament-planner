import { Card, CardContent, Input, TextField, Typography, TypographyTypeMap } from "@mui/material"
import { GroupDto } from "../../api/ApiClient"
import { GridItem } from "../shared"
import React, { useEffect, useRef, useState } from "react"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import Editable from "../shared/Editable/Editable"

type Props = {
    group: GroupDto
}

const EditGroupForm = ({ group }: Props) => {
    const [name, setName] = useState(group.name)

    return <GridItem sm={6} key={group.id}>
        <Card>
            <CardContent>
                <Editable onChange={value => setName(value)}>
                    <Typography variant='h6'>
                        {name}
                    </Typography>
                </Editable>
                // ADD edit teams
            </CardContent>
        </Card>
    </GridItem>
}

export default EditGroupForm