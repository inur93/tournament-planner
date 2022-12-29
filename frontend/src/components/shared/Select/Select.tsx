import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent } from "@mui/material";

type Option = {
    key: string,
    label: string
}

type BaseProps = {
    value: string,
    onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
}

type Props = BaseProps & {
    name: string,
    label: string,
    options: Option[]
}

const Select = ({ options, name, label, onChange, value }: Props) => {

    return <FormControl fullWidth>
        <InputLabel id={`${name}-label`}>
            {label}
        </InputLabel>
        <MuiSelect
            labelId={`${name}-label`}
            id={`${name}-id`}
            value={value}
            name={name}
            label={label}
            onChange={onChange}
        >
            {options.map(x =>
                <MenuItem key={x.key} value={x.key}>
                    {x.label}
                </MenuItem>)
            }
        </MuiSelect>
    </FormControl>
}

export default Select;