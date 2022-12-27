import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { WorkBook, WorkSheet } from "xlsx";
import { lastColumn, lastrow, loadWorkbook } from "../../../utils/excelFunctions";

type Props = {
    onWsChange: (ws?: WorkSheet) => void,
    onRowsChange: (rows: number[]) => void,
    onHeaderRowChange: (row: number) => void,
    onColumnsChange: (columns: number[]) => void
}
export default function SelectExcelWorksheet({
    onWsChange,
    onRowsChange,
    onHeaderRowChange,
    onColumnsChange
}: Props) {
    const [file, setFile] = useState<File>()
    const [ws, setWs] = useState<WorkSheet>()
    const [wb, setWb] = useState<WorkBook>()
    const [wsName, setWsName] = useState<string>('')
    const [headerRow, setHeaderRow] = useState(0)
    const [rowNumbers, setRowNumbers] = useState<number[]>([])
    const [rows, setRows] = useState<number[]>([])
    const [columns, setColumns] = useState<number[]>([])

    useEffect(() => onWsChange(ws), [ws])
    useEffect(() => onRowsChange(rows), [rows])
    useEffect(() => onHeaderRowChange(headerRow), [headerRow])
    useEffect(() => onColumnsChange(columns), [columns])

    useEffect(() => {
        if (!file) {
            setWs(undefined);
        } else {
            loadWorkbook(file)
                .then(x => {
                    setWb(x);
                });
        }
    }, [file])

    useEffect(() => {
        setWsName(wb?.SheetNames[0] ?? '');
    }, [wb])

    useEffect(() => {
        setColumns([...Array(lastColumn(ws)).keys()]);
    }, [ws])

    useEffect(() => {
        const rows = [...Array(lastrow(ws) - headerRow).keys()];
        setRows(rows.map(x => x + headerRow));
        setRowNumbers(rows);
    }, [headerRow, ws])

    useEffect(() => {
        if (wsName) {
            const worksheet = wb?.Sheets[wsName];
            setWs(worksheet);
        } else {
            setWs(undefined);
        }
    }, [wsName, wb])

    return <React.Fragment>
        <TextField
            fullWidth
            type='file'
            label='File'
            id='file-upload'
            name='file-upload'
            InputLabelProps={{ shrink: true, htmlFor: 'file-upload' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                    const f = e.target.files[0];
                    setFile(f);
                } else {
                    setFile(undefined);
                }
            }}
        />
        {file &&
            <FormControl fullWidth>
                <InputLabel id="select-ws-label">
                    Worksheet
                </InputLabel>
                <Select
                    labelId="select-ws-label"
                    id="select-ws"
                    value={wsName}
                    label="Worksheet"
                    onChange={(e) => setWsName(e.target.value)}
                >
                    {wb?.SheetNames.map(x =>
                        <MenuItem key={x} value={x}>
                            {x}
                        </MenuItem>)
                    }
                </Select>
            </FormControl>
        }
        {file &&
            <FormControl fullWidth>
                <InputLabel id="select-ws-header-row-label">
                    Header Row
                </InputLabel>
                <Select
                    labelId="select-ws-header-row-label"
                    id="select-ws-header-row"
                    value={headerRow}
                    label="Header Row"
                    onChange={(e) => setHeaderRow(e.target.value as number)}
                >
                    {rowNumbers.map(x =>
                        <MenuItem key={x} value={x}>
                            {x}
                        </MenuItem>)
                    }
                </Select>
            </FormControl>
        }
    </React.Fragment>
}
