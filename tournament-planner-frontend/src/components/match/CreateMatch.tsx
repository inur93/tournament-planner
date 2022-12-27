import { startOfHour } from 'date-fns';
import { CreateMatch as Model } from "../../api";
import { MatchesApi } from "../../apiClient";
import { formatFormDate } from "../../utils/dateFunctions";
import { MatchForm } from "./MatchForm";

type Props = {
    afterCreate?: () => void
}
export const CreateMatch = ({ afterCreate }: Props) => {

    const handleSubmit = async (values: Model) => {
        await MatchesApi.postMatch(values);
        afterCreate && afterCreate();
    }

    const now = startOfHour(new Date());

    return <MatchForm
        onSubmit={handleSubmit}
        initialValues={{
            dateTime: formatFormDate(now),
            awayTeamId: 0,
            competitionId: 0,
            homeTeamId: 0,
            seasonId: 0
        }}
        submitLabel='Create'
    />
}