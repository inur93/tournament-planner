import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Team } from "../../api"
import { LeagueTable, LeagueTableEntry } from "../league/LeagueTable"



type Props = {
    name: string,
    table: LeagueTableEntry[]
}
export const CupGroup = ({ name, table }: Props) => {
    return <Card sx={{maxWidth: '380px'}}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {name}
            </Typography>
            <LeagueTable rows={table} dense />
        </CardContent>
    </Card>
}