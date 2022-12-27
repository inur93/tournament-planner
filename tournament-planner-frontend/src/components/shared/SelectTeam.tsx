import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { useState, useEffect } from "react";
import { Team } from "../../api";
import { TeamsApi } from "../../apiClient";

type Props = BaseProps & {
    name: string,
    label: string
}

export const SelectTeam = ({ name, label, onChange, value }: Props) => {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        TeamsApi.getTeams()
            .then(({ data }) => setTeams(data));
    }, []);

    return <FormControl fullWidth>
        <InputLabel id={`${label}-label`}>
            {label}
        </InputLabel>
        <Select
            labelId={`${label}-label`}
            id={`${name}-id`}
            value={value}
            name={name}
            label={label}
            onChange={onChange}
        >
            {teams.map(x =>
                <MenuItem key={x.id} value={x.id}>
                    {x.name}
                </MenuItem>)
            }
        </Select>
    </FormControl>
}

type BaseProps = {
    value: number,
    onChange: (event: SelectChangeEvent<number>, child: React.ReactNode) => void
}
export const SelectHomeTeam = (props: BaseProps) => {
    return <SelectTeam label="Home Team" name="homeTeamId" {...props} />
}

export const SelectAwayTeam = (props: BaseProps) => {
    return <SelectTeam label="Away Team" name="awayTeamId" {...props} />
}