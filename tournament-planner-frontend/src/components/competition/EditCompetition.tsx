import { Competition } from '../../api';
import { CompetitionsApi } from "../../apiClient";
import { CompetitionForm } from "./CompetitionForm";

type Props = {
    competition: Competition,
    afterUpdate?: () => void
}
export const EditCompetition = ({ competition, afterUpdate }: Props) => {

    const handleSubmit = async (data: Competition) => {
        await CompetitionsApi.putCompetition(competition.id, data);
        afterUpdate && afterUpdate();
    }

    return <CompetitionForm
        initialValues={competition}
        onSubmit={handleSubmit}
        submitLabel='Save'
    />
}