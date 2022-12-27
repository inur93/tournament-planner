import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Match } from "../../api"
import { SignupsApi } from "../../apiClient"
import { MatchContext } from "../../contexts/MatchContext"
import { formatMatchDateShort } from "../../utils/dateFunctions"
import { formatMatchName } from "../../utils/stringFunctions"
import { SignupGuestModal } from "./SignupGuestModal"
import { isBefore } from 'date-fns'
import { ProfileContext } from "../../contexts/ProfileContext"
import { Authenticated } from "../shared/Authenticated"

type Props = {
    title?: string,
    hideActions?: boolean,
    hideLink?: boolean,
    hideSignupButtons?: boolean
}
export const MatchCard = ({ title, hideActions, hideLink, hideSignupButtons }: Props) => {
    const [showGuestSignup, setShowGuestSignup] = useState(false)
    const { profile } = useContext(ProfileContext)
    const { match, signups, updateSignups } = useContext(MatchContext);
    const addSignup = (updateSignups: () => void, match: Match, playerId?: number) => async () => {
        await SignupsApi.postSignup({
            matchId: match?.id,
            playerId
        })
        setShowGuestSignup(false)
        updateSignups();
    }

    const cancelSignup = async () => {
        const signup = signups.find(x => x.playerId === profile?.id)
        if (signup) {
            await SignupsApi.deleteSignup(signup.id)
            updateSignups()
        }
    }

    if (!match) {
        return <NoMatchPlanned />
    }

    const isSignedUp = signups.findIndex(x => x.playerId === profile?.id) >= 0
    const showStatsButton = !!(isBefore(new Date(match.dateTime), new Date()) && profile?.isAdmin)
    return <Card sx={{ height: '100%' }}>
        <CardContent>
            {title && <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {title || formatMatchDateShort(match.dateTime)}
            </Typography>
            }
            <Typography variant="h5" component="div">
                {formatMatchName(match)}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {formatMatchDateShort(match.dateTime)}
            </Typography>
            <Typography variant='body2'>
                Competition: {match.competition.name}
            </Typography>
            <Typography variant='body2'>
                Location: {match.location}
            </Typography>

        </CardContent>
        {!hideActions &&
            <CardActions>
                {!hideLink && <Button variant='text' component={Link} to={`/match/${match.id}`}>line-up</Button>}
                {!hideSignupButtons &&
                    <Authenticated>
                        {!isSignedUp && <Button onClick={addSignup(updateSignups, match)}>Sign me up</Button>}
                        {isSignedUp && <Button variant='text' onClick={cancelSignup}>Cancel signup</Button>}
                        <Button onClick={() => setShowGuestSignup(true)}>Sign up guest</Button>
                    </Authenticated>
                }
                {showStatsButton && <Button component={Link} to={`/admin/match/${match.id}/stats`}>Stats</Button>}
            </CardActions>
        }
        <SignupGuestModal open={showGuestSignup} onClose={() => setShowGuestSignup(false)} />
    </Card>
}

const NoMatchPlanned = () => {
    return <Box >
        <Card variant='outlined'>
            <CardContent>
                <Typography variant="h5" component="div">
                    No match planned
                </Typography>
            </CardContent>
        </Card>
    </Box>
}
