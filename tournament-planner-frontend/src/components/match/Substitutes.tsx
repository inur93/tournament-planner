import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@mui/material"
import { useContext } from "react"
import { SignupsApi } from "../../apiClient"
import { MatchContext } from "../../contexts/MatchContext"
import Icons from "../../utils/icons"
import { formatPlayerName } from "../../utils/stringFunctions"

export const Substitutes = () => {
    const { match, signups, updateSignups } = useContext(MatchContext)
    const players = signups.slice(match?.competition?.numPlayers || 0)
    const numFreeSpots = (match?.competition?.numSubstitutes || 0) - players.length
    const freeSpots = new Array(numFreeSpots <= 0 ? 1 : numFreeSpots)
        .fill('Available')


    const deleteSignup = async (signupId: number) => {
        await SignupsApi.deleteSignup(signupId)
        await updateSignups()
    }

    const addSignup = async () => {
        if (!match) {
            return
        }

        await SignupsApi.postSignup({
            matchId: match.id
        })
        await updateSignups()
    }
    return <List>
        {players.map(x => <ListItem key={x.id}>
            <ListItemAvatar>
                <Avatar>
                    {x.player?.number || '0'}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={formatPlayerName(x.player)} />
            {
                x.player?.isGuest &&
                <ListItemSecondaryAction>
                    <IconButton onClick={() => deleteSignup(x.id)}>
                        <Icons.Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            }

        </ListItem>)}
        {
            freeSpots.map((x, i) => <ListItem key={`available-${i}`}>
                <ListItemText primary={x} />
                <ListItemSecondaryAction>
                    <IconButton onClick={addSignup}>
                        <Icons.Signup />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            )
        }
    </List>
}