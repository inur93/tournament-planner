import { Grid } from "@mui/material"

type Props = {
    children?: React.ReactNode
    center?: boolean
}

const GridContainer = ({ children, center }: Props) => {
    return <Grid container justifyContent={center ? "center" : "flex-start"} spacing={2}>
        {children}
    </Grid>
}

export default GridContainer