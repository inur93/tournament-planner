import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useEffect, useState } from "react";
import { Competition } from "../../api";
import { CompetitionsApi } from "../../apiClient";


type Props = {
    value?: string,
    onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
}
export const SelectCompetition = ({ value, onChange }: Props) => {
    const [competitions, setCompetitions] = useState<Competition[]>([]);
    useEffect(() => {
        CompetitionsApi.getCompetitons()
            .then(({ data }) => setCompetitions(data));
    }, []);

    if (!competitions.length) {
        return null;
    }
    return <FormControl fullWidth>
        <InputLabel id="select-competition-label">
            Competition
        </InputLabel>
        <Select
            labelId="select-competition-label"
            id="select-competition"
            value={value === undefined ? '' : value}
            name="competitionId"
            label="Competition"
            onChange={onChange}
        >
            {competitions.map(x =>
                <MenuItem key={x.id} value={x.id?.toString()}>
                    {x.name}
                </MenuItem>)
            }
        </Select>
    </FormControl>
}
