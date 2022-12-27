import { Button, FormGroup, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { Season, UpdateSeason } from '../../api';
import { SeasonsApi } from "../../apiClient";
import { formatFormDate } from "../../utils/dateFunctions";
import { ButtonContainer } from "../shared/ButtonContainer";

type Props = {
    season: Season,
    afterUpdate?: () => void
}
export const EditSeason = ({ season, afterUpdate }: Props) => {
    const handleSubmit = async (data: UpdateSeason) => {
        await SeasonsApi.putSeason(season.id, data);
        afterUpdate && afterUpdate();
    }

    const { start, end, ...initialValues } = season;
    return <Formik
        initialValues={{
            ...initialValues,
            start: formatFormDate(new Date(start)),
            end: formatFormDate(new Date(end))
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
                        name='end'
                        label='End'
                        value={values.end}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ type: 'date' }} />

                </FormGroup>
                <ButtonContainer>
                    <Button variant='outlined' component={Link} to='/admin'>Back</Button>
                    <Button type="submit" color="primary">Save</Button>
                </ButtonContainer>
            </Form>
        )}
    </Formik>
}
