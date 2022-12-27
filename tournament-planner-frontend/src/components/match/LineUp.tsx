import { Grid } from "@mui/material"
import { useContext } from "react";
import { MatchContext } from "../../contexts/MatchContext";
import { Formation } from "./Formation"
import { Substitutes } from "./Substitutes"

export const LineUp = () => {
    const { match } = useContext(MatchContext);
    if (!match) return null;

    return <Grid container >
        <Grid item xs={12} sm={6} md={8}>
            <Formation />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Substitutes />
        </Grid>
    </Grid>
}
