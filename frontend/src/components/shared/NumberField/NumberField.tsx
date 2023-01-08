import { TextField } from "@mui/material"
import { useField } from 'formik'
import React from "react"

type Props = {
    name: string
    label?: string | null
    placeholder?: string
    value?: number | null
    onChange: (e: React.ChangeEvent<HTMLInputElement>, value: number) => void
    onBlur?: (e: React.ChangeEvent<any>) => void
}

const NumberField = ({ onChange, ...props }: Props) => {
    const [, meta] = useField({ name: props.name });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e, e.target.valueAsNumber)
        }
    }
    return <>
        <TextField
            {...props}
            type="number"
            error={meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
            onChange={handleChange} />
    </>
}

export default NumberField