import { Button, FormGroup, TextField } from "@mui/material";
import { addYears, startOfToday } from 'date-fns';
import { Form, Formik } from "formik";
import { CreateSeason as Model } from "../../api";
import { SeasonsApi } from "../../apiClient";
import { formatFormDate } from "../../utils/dateFunctions";
import { formatSeasonName } from "../../utils/stringFunctions";

type Props = {
    afterCreate?: () => void
}
export const CreateSeason = ({ afterCreate, }: Props) => {
    const handleSubmit = async (values: Model) => {
        await SeasonsApi.postSeason(values);
        afterCreate && afterCreate();
    }

    const defaultFrom = startOfToday();
    const defaultTo = addYears(startOfToday(), 1);
    return <Formik
        initialValues={{
            name: formatSeasonName(defaultFrom, defaultTo),
            start: formatFormDate(defaultFrom),
            end: formatFormDate(defaultTo),
            id: 0
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
                        placeholder="Awesome competition" />

                    <TextField
                        name='start'
                        label='Start'
                        value={values.start}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ type: 'date' }} />

                    <TextField
                        name='emd'
                        label='End'
                        value={values.end}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ type: 'date' }} />

                </FormGroup>
                <Button type="submit" color="primary">Create</Button>
            </Form>
        )}
    </Formik>
}