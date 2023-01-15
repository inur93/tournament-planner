import { Form, Formik } from "formik"
import { TournamentDetailsDto } from "../../api/ApiClient"
import * as Yup from 'yup'
import { startOfDay } from "date-fns"
import { Button, DateTimeField, TextField } from "../shared"

type Props = {
    tournament: TournamentDetailsDto
    onSave: (values: { name: string, date: Date }) => Promise<void>
}

const validationSchema = Yup.object({
    name: Yup.string().required().min(6),
    date: Yup.date().required().min(startOfDay(new Date()))
})

const EditTournamentMasterData = ({ tournament, onSave }: Props) => {
    return <Formik
        initialValues={tournament}
        validationSchema={validationSchema}
        onSubmit={onSave}>
        {({ isSubmitting, errors, touched, handleChange, values: { name, date } }) => (
            <Form>
                <TextField
                    name="name"
                    label="Name"
                    placeholder="Tournament name"
                    value={name}
                    onChange={handleChange} />
                <DateTimeField
                    name="date"
                    label="Date of the tournament"
                    value={date}
                    onChange={handleChange} />
                <Button primary submit>Save</Button>
            </Form>)}
    </Formik>
}

export default EditTournamentMasterData