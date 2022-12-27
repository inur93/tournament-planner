import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { makeStyles } from 'tss-react/mui';
import { classnames } from "tss-react/tools/classnames";

export type LeagueTableEntry = {
    teamId: number,
    position: number,
    name: string,
    played: number,
    wins: number,
    draws: number,
    losses: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number,
    points: number
}
type Props = {
    rows: LeagueTableEntry[],
    dense?: boolean
}


const useStyles = makeStyles()(() => {
    return {
        teamName: {
            maxWidth: '100px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    }
})

export const LeagueTable = ({ rows, dense }: Props) => {
    const { classes } = useStyles();
    return <Grid container>
        <Table size={dense ? 'small' : 'medium'}>
            <TableHead>
                <TableRow>
                    <TableCell component='th'>#</TableCell>
                    <TableCell component='th'>Team</TableCell>
                    <TableCell component='th'>P</TableCell>
                    {!dense && <>
                        <TableCell component='th'>W</TableCell>
                        <TableCell component='th'>D</TableCell>
                        <TableCell component='th'>L</TableCell>
                        <TableCell component='th'>F</TableCell>
                        <TableCell component='th'>A</TableCell>
                    </>}
                    <TableCell component='th'>GD</TableCell>
                    <TableCell component='th'>PTS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(x => <TableRow key={x.teamId}>
                    <TableCell>{x.position}</TableCell>
                    <TableCell className={classnames([dense && classes.teamName])} >{x.name}</TableCell>
                    <TableCell>{x.played}</TableCell>
                    {!dense && <>
                        <TableCell>{x.wins}</TableCell>
                        <TableCell>{x.draws}</TableCell>
                        <TableCell>{x.losses}</TableCell>
                        <TableCell>{x.goalsFor}</TableCell>
                        <TableCell>{x.goalsAgainst}</TableCell>
                    </>}
                    <TableCell>{x.goalDifference}</TableCell>
                    <TableCell>{x.points}</TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    </Grid>
}