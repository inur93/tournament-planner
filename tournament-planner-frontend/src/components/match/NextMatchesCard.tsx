import { useEffect, useState } from "react"
import { Match } from "../../api"
import { MatchesApi } from "../../apiClient"
import { MatchListCard } from "./MatchListCard"


type Props = {
    match?: Match
}
export const NextMatchesCard = ({ match }: Props) => {
    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        if (!match) {
            return;
        }
        MatchesApi.getMatches(match?.dateTime, 3)
            .then(({ data }) => setMatches(data));
    }, [match])

    return <MatchListCard title='Upcoming matches' matches={matches} />
}
