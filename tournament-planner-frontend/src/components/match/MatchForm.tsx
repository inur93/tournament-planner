import { Button, FormGroup, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { CreateMatch, UpdateMatch } from "../../api";
import { SelectCompetition } from "../competition/SelectCompetition";
import { SelectSeason } from "../season/SelectSeason";
import { ButtonContainer } from "../shared/ButtonContainer";
import { ConfirmButton } from "../shared/ConfirmButton";
import { SelectAwayTeam, SelectHomeTeam } from "../shared/SelectTeam";


type Props<T> = {
    initialValues: T,
    onSubmit: (values: T) => void,
    submitLabel: string,
    onDelete?: () => void
}
export function MatchForm<T extends CreateMatch | UpdateMatch>({
    onSubmit, initialValues, submitLabel, onDelete
}: Props<T>) {


    return <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {({ values, handleChange }) => (
            <Form>
                <FormGroup>
                    <TextField
                        name='dateTime'
                        label='Date and Time'
                        value={values.dateTime}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ type: 'datetime-local' }} />

                    <TextField
                        name='location'
                        label="Location"
                        value={values.location}
                        onChange={handleChange} />
                    <SelectHomeTeam value={values.homeTeamId} onChange={handleChange} />
                    <SelectAwayTeam value={values.awayTeamId} onChange={handleChange} />

                    <SelectCompetition value={values.competitionId.toString()} onChange={handleChange} />
                    <SelectSeason value={values.seasonId.toString()} onChange={handleChange} />

                </FormGroup>
                <ButtonContainer>
                    {onDelete && <ConfirmButton text='Delete' variant='outlined' onClick={onDelete}>
                        <Typography variant='h2'>Delete match?</Typography>
                        <Typography variant='body1'>Are you sure you want to delete this match?</Typography>
                    </ConfirmButton>}
                    <Button type="submit" >{submitLabel}</Button>
                </ButtonContainer>
            </Form>
        )}
    </Formik>
}