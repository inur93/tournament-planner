import { TeamDto } from "../../api/ApiClient"
import { Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"

type Props = { teams: TeamDto[] }

const TeamNameTableCell = styled(TableCell)(
    ({ theme }) => ({
        textOverflow: 'ellipsis',
        whiteSpace: "nowrap",
        overflow: "hidden",
    })
)

const Standings = ({ teams }: Props) => {
    return <Table size="small" sx={{ minWidth: '150px', tableLayout: 'fixed' }}>
        <TableHead>
            <TableRow>
                <TableCell sx={{ width: '0px' }}>#</TableCell>
                <TableCell sx={{ width: 'auto' }}>Team</TableCell>
                <TableCell sx={{ width: '10px' }}>Pts</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {teams.map((team, i) => (
                <TableRow key={team.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TeamNameTableCell>{team.name}</TeamNameTableCell>
                    <TableCell>{team.points}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
}

export default Standings