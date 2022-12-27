import { Card, CardContent, Typography } from "@mui/material";
import { Match } from "../../api";
import { MatchList } from "./MatchList";


type Props = {
    title?: string,
    matches: Match[]
}
export function MatchListCard({ title, matches }: Props) {
    return (<Card>
        <CardContent>
            <Typography variant='h2'>{title}</Typography>
            <MatchList items={matches}></MatchList>
        </CardContent>
    </Card>);
}