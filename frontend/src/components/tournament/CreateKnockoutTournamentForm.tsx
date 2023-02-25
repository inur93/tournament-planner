import { Form, Formik } from "formik"
import { useState } from 'react'
import * as Yup from 'yup'
import { KnockoutTournamentForCreation } from "../../api/ApiClient"
import { Button, DateTimeField, NumberField, TextField } from "../shared"

type Props = {
    values: Partial<KnockoutTournamentForCreation>
    onSubmit: (data: KnockoutTournamentForCreation) => Promise<void>
}

const validationSchema = Yup.object({
    name: Yup.string()
        .min(6)
        .required(),
    numTeams: Yup.number()
        .required()
        .min(8),
    numGroups: Yup.number()
        .required()
        .min(2),
    numPromoted: Yup.number()
        .required()
        .min(1),
    groupStageLegs: Yup.number()
        .required()
        .min(1),
    knockoutLegs: Yup.number()
        .required()
        .min(1)

})

const CreateKnockoutTournamentForm = ({ values, onSubmit }: Props) => {
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (values: Partial<KnockoutTournamentForCreation>) => {
        setLoading(true);
        await onSubmit(values as KnockoutTournamentForCreation);
        setLoading(false)
    }
    return <Formik
        initialValues={values}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur, }) => (
            <Form>
                <TextField
                    name="name"
                    label="Tournament Name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <DateTimeField
                    dateOnly
                    name="date"
                    label="Date of the tournament"
                    value={values.date}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <NumberField
                    name="numTeams"
                    label="Number of teams"
                    value={values.numTeams}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <NumberField
                    name="numGroups"
                    label="Number of groups"
                    value={values.numGroups}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <NumberField
                    name="numPromoted"
                    label="Number of teams promoted to knockout stages"
                    value={values.numPromoted}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <NumberField
                    name="groupStageLegs"
                    label="Legs in group stage"
                    value={values.groupStageLegs}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <NumberField
                    name="knockoutLegs"
                    label="Legs in knockout stage"
                    value={values.knockoutLegs}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                <Button submit primary disabled={isLoading}>Create</Button>
            </Form>
        )}
    </Formik>
}

export default CreateKnockoutTournamentForm