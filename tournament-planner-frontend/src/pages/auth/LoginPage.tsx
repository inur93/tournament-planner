import { Grid } from "@mui/material"
import { Login } from "../../components/auth/Login"


export const LoginPage = () => {

    return <Grid container justifyContent='center'>
        <Grid item xs={12} md={6} lg={4}>
            <Login />
        </Grid>
    </Grid>
}