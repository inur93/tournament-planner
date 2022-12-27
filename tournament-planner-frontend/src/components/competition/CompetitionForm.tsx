import { FormGroup, TextField, FormControlLabel, Switch, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { CreateCompetition, UpdateCompetition } from "../../api";
import { ButtonContainer } from "../shared/ButtonContainer";


type Props<T> = {
    initialValues: T
    onSubmit: (values: T) => void
    submitLabel: string
    hideBackButton?: boolean
}
export function CompetitionForm<T extends CreateCompetition | UpdateCompetition>({
    onSubmit, initialValues, submitLabel, hideBackButton
}: Props<T>) {
    return <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {({ values, handleChange }) => (
            <Form>
                <FormGroup>
                    <TextField
                        name='name'
                        label='Name'
                        fullWidth
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Awesome competition" />
                    <TextField
                        name='description'
                        label='Description'
                        fullWidth
                        value={values.description}
                        onChange={handleChange}
                        placeholder="yearly competition at NC"
                        multiline
                        minRows={3} />

                    <TextField
                        name='numPlayers'
                        label='Number of players'
                        fullWidth
                        value={values.numPlayers}
                        onChange={handleChange}
                        placeholder="excluding substitutes" />

                    <TextField
                        name='numSubstitutes'
                        label='Number of substitutes'
                        fullWidth
                        value={values.numSubstitutes}
                        onChange={handleChange}
                        placeholder="Number of substitutes" />

                    <FormControlLabel
                        control={<Switch
                            name='isActive'
                            checked={values.isActive}
                            onChange={handleChange} />}
                        label="Is Active" />
                </FormGroup>
                <ButtonContainer>
                    {!hideBackButton &&
                        <Button variant='outlined' component={Link} to='/admin'>Back</Button>
                    }
                    <Button type="submit">{submitLabel}</Button>
                </ButtonContainer>

            </Form>
        )}
    </Formik>
}