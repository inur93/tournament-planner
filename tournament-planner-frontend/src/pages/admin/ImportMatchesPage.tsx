import { Grid } from "@mui/material";
import { ImportMatches } from "../../components/match/ImportMatches";
import { useQuery } from "../../hooks/useQuery";

export const ImportMatchesPage = () => {
    const query = useQuery();

    return <Grid container justifyContent='center'>
        <Grid item xs={12} md={11}>
            <ImportMatches season={query.get('season')} competition={query.get('competition')} />
        </Grid>
    </Grid>
}