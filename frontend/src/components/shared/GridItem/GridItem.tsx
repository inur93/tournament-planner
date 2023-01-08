import { Grid } from "@mui/material"

type Props = {
    children?: React.ReactNode
    xs?: number
    sm?: number
}

const GridItem = ({ children, xs, sm }: Props) => {
    return <Grid item xs={xs} sm={sm}>
        {children}
    </Grid>
}

export default GridItem