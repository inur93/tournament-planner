import { useNavigate } from 'react-router-dom';
import { Match, UpdateMatch } from "../../api";
import { MatchesApi } from "../../apiClient";
import { MatchForm } from "./MatchForm";

type Props = {
    match: Match
}
export const EditMatch = ({ match }: Props) => {
    const navigate = useNavigate();
    const handleSubmit = async (values: UpdateMatch) => {
        await MatchesApi.putMatch(match.id, values);
    }

    const handleDelete = async () => {
        await MatchesApi.deleteMatch(match.id);
        navigate(-1);
    }
    return <MatchForm
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        initialValues={match}
        submitLabel='Update'
    />
}
