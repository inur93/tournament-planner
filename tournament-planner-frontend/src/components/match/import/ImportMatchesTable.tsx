import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { utils, WorkSheet } from "xlsx";
import { Dictionary, MappingOption } from "../../../utils/columns";
import ColumnHeader from "./ColumnHeader";

const renderCellValue = (ws: WorkSheet, col: number, row: number) => {
    const cell = ws[utils.encode_cell({ c: col, r: row })];
    if (!cell) return '';
    switch (cell.t) {
        case 'n':
            return cell.w;
        default: return cell.v;
    }
}

type Props = {
    columns: number[],
    headerRow: number,
    rows: number[],
    ws: WorkSheet,
    mappingConfig: {
        mappingOptions: MappingOption[],
        mappings: Dictionary,
        updateMapping: (key: number, value: string) => void
    }
}
export default function ImportMatchesTable({ columns, headerRow, rows, ws, mappingConfig }: Props) {

    return <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell component='th'>
                    #
                </TableCell>
                {columns.map(c => <ColumnHeader
                    key={`column-header-${c}`}
                    c={c}
                    options={mappingConfig.mappingOptions}
                    mappings={mappingConfig.mappings}
                    updateMapping={mappingConfig.updateMapping} />)}
            </TableRow>
            <TableRow>
                <TableCell align="center" colSpan={columns.length + 1}>
                    Map To
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{headerRow}</TableCell>
                {columns.map(c =>
                (<TableCell style={{ fontWeight: 600 }} component='th' key={c}>
                    {renderCellValue(ws, c, headerRow)}

                </TableCell>))}
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
                <TableRow
                    key={row}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>
                        {row + 1}
                    </TableCell>
                    {columns.map(col => (
                        <TableCell key={`${row}-${col}`}>
                            {renderCellValue(ws, col, row + 1)}
                        </TableCell>))}
                </TableRow>
            ))}
        </TableBody>
    </Table>
}
