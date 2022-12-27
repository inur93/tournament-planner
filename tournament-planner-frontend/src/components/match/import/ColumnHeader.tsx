import { TableCell, Select, MenuItem } from "@mui/material";
import { Dictionary, MappingOption } from "../../../utils/columns";

type Props = {
    c: number,
    mappings: Dictionary,
    updateMapping: (key: number, value: string) => void,
    options: MappingOption[]
}
export default function ColumnHeader({ c, mappings, options, updateMapping }: Props) {

    return <TableCell component='th'>
        <Select
            id={`map-col-${c}`}
            value={mappings[c] ?? 'ignore'}
            onChange={(e) => updateMapping(c, e.target.value)}
        >
            {options.map(x =>
                <MenuItem key={x.key} value={x.key}>
                    {x.label}
                </MenuItem>)
            }
        </Select>
    </TableCell>
}
