import { Button, FormControlLabel, FormGroup, Switch, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { Team, UpdateTeam } from '../../api';
import { TeamsApi } from "../../apiClient";

type Props = {
    team: Team,
    afterUpdate?: () => void
}
export const EditTeam = ({ team, afterUpdate }: Props) => {

    const handleSubmit = async (data: UpdateTeam) => {
        await TeamsApi.putTeam(team.id, data);
        afterUpdate && afterUpdate();
    }

    return <Formik
        initialValues={{
            name: '',
            isNc: true
        }}
        onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
            <Form>
                <FormGroup>
                    <TextField
                        name='name'
                        label='Name'
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Executers" />

                    <FormControlLabel
                        control={<Switch
                            name='isNc'
                            checked={values.isNc}
                            onChange={handleChange} />}
                        label="Is NC team" />

                </FormGroup>
                <Button type="submit">Save</Button>
            </Form>
        )}
    </Formik>

}