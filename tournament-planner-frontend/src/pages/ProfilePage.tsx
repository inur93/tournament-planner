import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Player } from "../api"
import { PlayersApi, ProfileApi } from "../apiClient"
import { Profile } from "../components/player/Profile"

type Params = {
    id?: string
}
export const ProfilePage = () => {
    const { id } = useParams<Params>()
    const [player, setPlayer] = useState<Player>()
    
    useEffect(() => {
        if (!id) {
            ProfileApi.myProfile()
                .then(({ data }) => setPlayer(data))
            return
        }
        PlayersApi.getPlayer(parseInt(id))
            .then(({ data }) => setPlayer(data))
    }, [id])

    if (!player) {
        return <p>loading player profile....</p>
    }
    return <Grid container justifyContent='center'>
        <Grid item xs={12} sm={11} md={6}>
            <Profile player={player} />
        </Grid>
    </Grid>
}