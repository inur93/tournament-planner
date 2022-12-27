import { Collapse, Grid, Theme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Player } from "../../../api";
import { PlayersApi } from "../../../apiClient";
import { PlayerList } from "../../../components/player/PlayerList";
import { Profile } from "../../../components/player/Profile";
import { useQuery } from "../../../hooks/useQuery";


export function PlayerPage() {
    const query = useQuery();
    const [players, setPlayers] = useState<Player[]>([]);
    const [selected, setSelected] = useState<Player>();
    const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

    const updatePlayers = () => {
        PlayersApi.getPlayers()
            .then(({ data }) => setPlayers(data))
    }

    useEffect(() => {
        updatePlayers();
    }, [])

    useEffect(() => {
        const id = query.get('id')
        if (!id) {
            setSelected(undefined)
            return
        }
        PlayersApi.getPlayer(parseInt(id))
            .then(({ data }) => setSelected(data))
    }, [query])

    return <Grid container justifyContent='center' spacing='1rem'>
        {!(isSmall && selected) &&
            <Grid item xs={11} md={5}>
                <PlayerList players={players} createLink={id => `/admin/player?id=${id}`} />
            </Grid>
        }
        {selected &&
            <Grid item xs={11} md={5}>
                <Collapse in={!!selected} dir="left">
                    {selected && <Profile
                        asAdmin
                        key={selected.id}
                        closeLink='/admin/player'
                        player={selected} />}
                </Collapse>
            </Grid>
        }
    </Grid>
}
