import { Form, Formik } from "formik"
import * as Yup from 'yup'
import { FixtureDto } from "../../api/ApiClient"
import { Button, DateTimeField, NumberField } from "../shared"

type Props = {
    fixture: FixtureDto
    onSubmit: (data: FixtureDto) => void
}

const validationSchema = Yup.object({

})

const UpdateFixtureForm = ({ fixture, onSubmit }: Props) => {
    return <Formik
        initialValues={fixture}
        validationSchema={validationSchema}
        validateOnBlur
        validateOnChange
        onSubmit={onSubmit}>
        {({ values, handleChange, handleBlur }) => (
            <Form>
                <DateTimeField
                    name="dateTime"
                    label="Date and time of the fixture"
                    value={values.dateTime}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <NumberField
                    name="homeScore"
                    label={fixture.home?.name}
                    placeholder="Home team score"
                    value={values.homeScore}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <NumberField
                    name="awayScore"
                    label={fixture.away?.name}
                    placeholder="Away team score"
                    value={values.awayScore}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <Button submit primary>Save</Button>
            </Form>
        )}
    </Formik>
}

export default UpdateFixtureForm