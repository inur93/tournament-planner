import { Grid, Theme, useMediaQuery } from '@mui/material';
import React, { useContext, useEffect, useState } from "react";
import { Match, Signup } from '../../api';
import { SignupsApi } from '../../apiClient';
import { MatchContext } from '../../contexts/MatchContext';
import { generateFormation, sum } from '../../utils/extensions';
import { PlayerShirt } from './Shirt';

type Props = {
    formation?: number[]
}

/*
we resolve the index of the signup based on the position in the formation.
Consider a formation of 2-3-1 (or 1-2-3-1 if including the keeper) say f=[1, 2, 3, 1].
The position is defined with two numbers: the row and column.
The row specifies the number in the formation. 
where   row=0 corresponds to the first element of the formation -> 1 or just f[0]=1
        row=1 corresponds to the second element of the formation -> 2 or f[1]=2

the column specifies the position in the given row.
for f[0] the value can be in the range of 0..0 as f[0]=1 which means the length of that row is 1
for f[2] the value can be in the range of 0..2 as f[2]=3 which means the length of that row is 3

to calculate this consider the following formation:
            0
        1   2   3
        4       5
            6
by slicing to the current row we will get:
[] when row=0
[1] when row=1
[1,2] when row=2
[1,2,3] when row=3
by summarizing these numbers we get the total number of players proceeding this row.
by adding the column index we get the current players position.
*/
const getIndex = (formation: number[], row: number, col: number) => {
    return sum([...formation].slice(0, row), o => o) + col;
}
export const Formation = ({ formation: customFormation }: Props) => {
    const { match } = useContext(MatchContext);
    const [formation, setFormation] = useState<number[]>([...(customFormation?.reverse() || [])]);
    useEffect(() => {
        if (!customFormation) {
            setFormation(generateFormation(match?.competition?.numPlayers || 7).reverse());
        }
    }, [match])

    return <MatchContext.Consumer>
        {({ signups, updateSignups }) =>
            <Grid container justifyContent='center'>
                <Grid container item style={{
                    background: 'url(/Soccer_Field_Transparant.svg)',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionY: "bottom"
                }}>
                    {
                        formation.map((x, j) =>
                            <React.Fragment key={`${x}-${j}`}>
                                {Array(x).fill(0).map((_, i) => <Player
                                    key={`${x}-${i}-${j}`}
                                    match={match}
                                    signups={signups}
                                    updateSignups={updateSignups}
                                    formation={formation}
                                    row={j}
                                    col={i} />)}
                            </React.Fragment>
                        )
                    }

                </Grid>
            </Grid>
        }
    </MatchContext.Consumer>
}

type PlayerProps = {
    match?: Match,
    signups: Signup[],
    formation: number[],
    row: number,
    col: number,
    updateSignups: () => void
}

const Player = ({ match, signups, formation, row, col, updateSignups }: PlayerProps) => {
    const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const scale = isSmall ? 0.42 : 0.5

    //number of players in given row
    const x = formation[row]
    //player index in signups list
    const i = getIndex(formation, row, col)

    const player = signups.length <= i ? undefined : signups[i].player
    const isGoalie = (i + 1) >= sum(formation, o => o)

    const onClick = async () => {
        if (player && player.isGuest) {
            const signup = signups.find(x => x.playerId === player.id)
            if (!signup) {
                return
            }
            await SignupsApi.deleteSignup(signup.id)
        }
        if (!player && match) {
            await SignupsApi.postSignup({
                matchId: match.id
            })
        }

        updateSignups();
    }

    return <Grid item xs={12 / x}>
        <PlayerShirt
            onClick={onClick}
            player={player}
            scale={scale}
            isGoalie={isGoalie} />

    </Grid>

}