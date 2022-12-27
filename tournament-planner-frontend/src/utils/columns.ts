import { CellObject, SSF } from "xlsx";
import { ImportMatch } from "../api";

export type Dictionary = {
    [key: string]: string
}
export type MappingOption = {
    key: string,
    label: string,
    setValue: (match: ImportMatch, cell: CellObject) => any
    getValue?: (cell: CellObject, offset: number) => any
}
export const mappingOptions: MappingOption[] = [
    {
        key: 'ignore',
        label: 'Ignore',
        setValue: () => { }
    },
    {
        key: 'date',
        label: 'Date',
        setValue: (match: ImportMatch, cell: CellObject) => {
            const { y, m, d } = SSF.parse_date_code(cell.v as number);
            const date = new Date(match.dateTime);
            date.setFullYear(y);
            date.setMonth(m);
            date.setDate(d);
            match.dateTime = date.toJSON();
        }
    },
    {
        key: 'time',
        label: 'Time',
        setValue: (match: ImportMatch, cell: CellObject) => {
            const { H, M } = SSF.parse_date_code(cell.v as number);
            const date = new Date(match.dateTime);
            date.setHours(H);
            date.setMinutes(M);

            match.dateTime = date.toJSON();
        }
    },
    {
        key: 'homeTeam',
        label: 'Home Team',
        setValue: (match: ImportMatch, cell: CellObject) => {
            match.homeTeamName = cell.v as string;
        }
    },
    {
        key: 'awayTeam',
        label: 'Away Team',
        setValue: (match: ImportMatch, cell: CellObject) => {
            match.awayTeamName = cell.v as string;
        }
    },
    {
        key: 'location',
        label: 'Location',
        setValue: (match: ImportMatch, cell: CellObject) => {
            if (match.location) {
                match.location = `${cell.v} ${match.location}`;
            } else {
                match.location = cell.v as string;
            }
        }
    },
    {
        key: 'field',
        label: 'Field',
        setValue: (match: ImportMatch, cell: CellObject) => {
            if (match.location) {
                match.location = `${match.location} ${cell.v}`;
            } else {
                match.location = cell.v as string;
            }
        }
    }
]
