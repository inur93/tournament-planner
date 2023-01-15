import { Typography } from "@mui/material"

type Props = {
    score?: number | undefined | null
}

const TeamScore = ({ score }: Props) => {
    return <Typography variant="body1" fontWeight={600}>
        {score == null ? '-' : score}
    </Typography>
}

export default TeamScore