import { Form, Formik } from "formik"
import { TournamentDto } from "../../api/ApiClient"
import { DateTimeField, NumberField, TextField } from "../shared"
import { Grid, Typography } from "@mui/material"

type Props = {
    tournament: TournamentDto
}

const FixtureSchedule = ({ tournament }: Props) => {
    const values = {
        timeOfFirstMatch: new Date()
    }
    const handleSubmit = () => {

    }
    return <>
        <Formik
            initialValues={values}
            // validationSchema={validationSchema}
            validateOnChange
            validateOnBlur
            onSubmit={handleSubmit}>
            {({ values, handleChange, handleBlur, }) => (
                <Form>
                    <Grid container>
                        <Typography variant='body1'>{tournament.name}</Typography>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <DateTimeField label="First match start" name="timeOfFirstMatch" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <NumberField label="Match duration" name="duration" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <NumberField label="Break between each match" name="defaultBreak" onChange={handleChange} />
                        </Grid>
                    </Grid>
                    <Typography variant='h6'>Breaks</Typography>
                    <Grid container spacing={2}>
                        <Grid item sm={4}>
                            <NumberField label="Every x matches" name="everyXMatches" onChange={handleChange} />
                        </Grid>
                        <Grid item sm={4}>
                            <NumberField label="Duration (min)" name="breakDuration" onChange={handleChange} />
                        </Grid>
                    </Grid>

                </Form>
            )}
        </Formik>
    </>
}

export default FixtureSchedule