import { Typography } from "@mui/material"

type Props = {
    name?: string | undefined | null
}
const ListItemTeamName = ({ name }: Props) => {
    const teamNameStyles = {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
    }
    return <Typography variant="body1" sx={teamNameStyles}>
        {name}
    </Typography>
}

export default ListItemTeamName