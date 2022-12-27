import { Autocomplete, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Match, Player } from "../../api"
import { PlayersApi, SignupsApi } from "../../apiClient"
import { MatchContext } from "../../contexts/MatchContext"
import { Modal } from "../shared/Modal"


type Props = {
    open: boolean,
    onClose: () => void
}
export const SignupGuestModal = ({ open, onClose }: Props) => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [selected, setSelected] = useState<{ id?: number, name: string } | null>();

    const updatePlayerList = () => {
        PlayersApi.getPlayers(true)
            .then(({ data }) => setPlayers(data));
    }
    useEffect(() => {
        updatePlayerList();
    }, [])

    const onSelect = (value: null | string | Player) => {
        setSelected(typeof (value) === 'string' ? { name: value } : value);
    }

    const addSignup = (updater: () => Promise<void>, match?: Match) => async () => {
        let playerId = selected?.id;
        if (!selected) return;
        if (playerId === undefined) {
            playerId = players.find(x => x.name.toLowerCase() === selected.name.toLowerCase())?.id;
        }
        if (playerId === undefined) {
            const { data } = await PlayersApi.createGuest({ name: selected.name });
            playerId = data.id;
            updatePlayerList();
        }
        if (match) {
            await SignupsApi.postSignup({
                matchId: match?.id,
                playerId
            })
        }

        await updater();
        onClose();
    }
    return <MatchContext.Consumer>
        {({ match, updateSignups }) =>
            <Modal open={open} onClose={onClose}>
                <Typography variant="h2">Signup guest player</Typography>
                <Autocomplete
                    id='gues-signup-modal'
                    options={players.sort((a, b) => -b.name[0].localeCompare(a.name[0]))}
                    groupBy={option => option.name[0]}
                    getOptionLabel={option => option?.nickname ?? option?.name ?? option}
                    autoSelect
                    blurOnSelect
                    freeSolo
                    onChange={(e, value) => {
                        onSelect(value);
                    }}
                    renderInput={params => <TextField {...params} label="Select existing or create new guest" />}
                />
                <Button onClick={addSignup(updateSignups, match)}>Sign up</Button>
            </Modal>
        }
    </MatchContext.Consumer>
}