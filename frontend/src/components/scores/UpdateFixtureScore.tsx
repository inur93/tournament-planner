import { Check } from "@mui/icons-material"
import { Grid, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import Input from "@mui/material/Input"
import { Form, Formik } from "formik"
import * as Yup from 'yup'
import { FixtureDto } from "../../api/ApiClient"
import ListItemTeamName from "../team/TeamName"

type Props = {
    id?: string,
    fixture: FixtureDto,
    onSave: (fixture: FixtureDto) => Promise<void>
}

const validationSchema = Yup.object({
    homeScore: Yup.number().required().min(0),
    awayScore: Yup.number().required().min(0),
})

const UpdateFixtureScore = ({ id, fixture, onSave }: Props) => {
    return <Formik
        initialValues={fixture}
        validationSchema={validationSchema}
        onSubmit={onSave}>
        {({ isSubmitting, errors, touched, handleChange, values: { homeScore, awayScore } }) => (
            <Form>
                <ListItem id={id}>
                    <ListItemText>
                        <Grid container>
                            <Grid item xs={3} sm={2} md={1}>
                                <Input
                                    type='number'
                                    name='homeScore'
                                    disableUnderline
                                    value={homeScore}
                                    onChange={handleChange} />
                            </Grid>

                            <Grid item xs={9} sm={10} md={11} style={{ margin: 'auto 0' }}>
                                <ListItemTeamName name={fixture.home?.name} />
                            </Grid>


                            <Grid item xs={3} sm={2} md={1}>
                                <Input
                                    type='number'
                                    name='awayScore'
                                    disableUnderline
                                    value={awayScore}
                                    onChange={handleChange} />
                            </Grid>
                            <Grid item xs={9} sm={10} md={11} style={{ margin: 'auto 0' }}>
                                <ListItemTeamName name={fixture.away?.name} />
                            </Grid>

                        </Grid>
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton type='submit' size="small">
                            <Check />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Form>)}
    </Formik>

}

export default UpdateFixtureScore