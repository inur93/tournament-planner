import { CreateCompetition as CreateCompetitionModel } from "../../api"
import { CompetitionsApi } from "../../apiClient"
import { CompetitionForm } from "./CompetitionForm"

type Props = {
    afterCreate?: () => void,
    hideBackButton?: boolean
}
export const CreateCompetition = ({ afterCreate, hideBackButton }: Props) => {

    const handleSubmit = async (values: CreateCompetitionModel) => {
        await CompetitionsApi.postCompetition(values);
        afterCreate && afterCreate();
    }
    return <CompetitionForm
        initialValues={{
            name: '',
            description: '',
            isActive: true,
            numPlayers: 7,
            numSubstitutes: 3
        }}
        onSubmit={handleSubmit}
        submitLabel='Create'
        hideBackButton={hideBackButton}
    />
}