import { Button, Grid } from "@mui/material";
import { startOfToday } from "date-fns";
import { useState } from "react";
import { utils, WorkSheet } from 'xlsx';
import { ImportMatch, MatchImportSummary, MatchValidation } from "../../api";
import { MatchesApi } from "../../apiClient";
import { Dictionary, mappingOptions } from "../../utils/columns";
import { SelectCompetition } from "../competition/SelectCompetition";
import { SelectSeason } from "../season/SelectSeason";
import { ButtonContainer } from "../shared/ButtonContainer";
import ImportMatchesTable from "./import/ImportMatchesTable";
import { ImportSummary } from "./import/ImportSummary";
import SelectExcelWorksheet from "./import/SelectExcelWorksheet";
import { ValidationMessages } from "./import/ValidationMessages";

const getData = (
    ws: WorkSheet,
    rows: number[],
    season: string | null | undefined,
    competition: string | null | undefined,
    mappings: Dictionary) => {
    return rows.map(r => {
        const match: ImportMatch = {
            dateTime: startOfToday().toJSON(),
            seasonId: parseInt(season!),
            competitionId: parseInt(competition!)
        }

        for (let c of Object.keys(mappings)) {
            const cell = ws[utils.encode_cell({ c: parseInt(c), r: r + 1 })];
            const mapping = mappingOptions.find(x => x.key === mappings[c]);
            if (cell && mapping && mapping.key !== 'ignore') {
                mapping.setValue(match, cell);
            }
        }

        return match;
    })
}

type Props = {
    season?: string | null,
    competition?: string | null
}
export const ImportMatches = (props: Props) => {
    const [ws, setWs] = useState<WorkSheet>()
    const [headerRow, setHeaderRow] = useState(0)
    const [columns, setColumns] = useState<number[]>([])
    const [rows, setRows] = useState<number[]>([])
    const [mappings, setMappings] = useState<Dictionary>({
        1: 'date',
        2: 'time',
        3: 'field',
        4: 'homeTeam',
        5: 'awayTeam'
    })
    const [competition, setCompetition] = useState(props.competition)
    const [season, setSeason] = useState(props.season)
    const [validationMessages, setValidationMessages] = useState<MatchValidation[]>([])
    const [summary, setSummary] = useState<MatchImportSummary>()

    const importData = () => {
        if (!ws) return;

        const data = getData(ws, rows, season, competition, mappings);
        MatchesApi.importMatches(data)
            .then(({ data }) => {
                setSummary(data)
            })
            .catch(({ request }) => {

            });
    }

    const validateData = () => {
        if (!ws) return;
        const data = getData(ws, rows, season, competition, mappings);
        MatchesApi.validateImport(data).then(({ data }) => {
            setValidationMessages(data)
        });
    }

    return <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <SelectExcelWorksheet
                onHeaderRowChange={setHeaderRow}
                onRowsChange={setRows}
                onWsChange={setWs}
                onColumnsChange={setColumns}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <SelectCompetition value={competition || undefined} onChange={e => setCompetition(e.target.value)} />
            <SelectSeason value={season || undefined} onChange={e => setSeason(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
            <ButtonContainer>
                <Button onClick={importData}>Import</Button>
                <Button onClick={validateData}>Validate</Button>
            </ButtonContainer>
        </Grid>
        <Grid item xs={12}>
            <ImportSummary summary={summary} />
            {!summary && <ValidationMessages messages={validationMessages} />}
        </Grid>
        {
            ws &&
            <Grid item xs={12}>
                <ImportMatchesTable
                    ws={ws}
                    headerRow={headerRow}
                    columns={columns}
                    rows={rows}
                    mappingConfig={{
                        mappingOptions: mappingOptions,
                        mappings,
                        updateMapping: (key, value) => setMappings(old => ({ ...old, [key]: value }))
                    }} />
            </Grid>
        }
    </Grid >
}