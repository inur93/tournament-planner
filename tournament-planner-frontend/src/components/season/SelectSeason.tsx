import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useEffect, useState } from "react";
import { Season } from "../../api";
import { SeasonsApi } from "../../apiClient";


type Props = {
    value?: string,
    onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
}
export const SelectSeason = ({ value, onChange }: Props) => {
    const [seasons, setSeasons] = useState<Season[]>([]);
    useEffect(() => {
        SeasonsApi.getSeasons()
            .then(({ data }) => setSeasons(data));
    }, []);

    if (!seasons.length) {
        return null;
    }
    return <FormControl fullWidth>
        <InputLabel id="select-Season-label">
            Season
        </InputLabel>
        <Select
            labelId="select-Season-label"
            id="select-Season"
            value={value || ''}
            name="seasonId"
            label="Season"
            onChange={onChange}
        >
            {seasons.map(x =>
                <MenuItem key={x.id} value={x.id.toString()}>
                    {x.name}
                </MenuItem>)
            }
        </Select>
    </FormControl>
}