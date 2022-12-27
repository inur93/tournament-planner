import { Button, FormControlLabel, FormGroup, Switch, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { CreateTeam as Model } from "../../api";
import { TeamsApi } from "../../apiClient";

type Props = {
    afterCreate?: () => void,
}
export const CreateTeam = ({ afterCreate }: Props) => {

    const handleSubmit = async (values: Model) => {
        await TeamsApi.postTeam(values);
        afterCreate && afterCreate();
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
                <Button type="submit" color="primary">Create</Button>
            </Form>
        )}
    </Formik>
}