import { Alert } from "@mui/material"
import { MatchImportSummary } from "../../../api"
import { ValidationMessages } from "./ValidationMessages"


type Props = {
    summary?: MatchImportSummary
}

export const ImportSummary = ({ summary }: Props) => {

    if (!summary) {
        return null
    }

    return <>
        <Alert>
            {`Imported ${summary.matchesCreated}. Created ${summary.teamsCreated} teams. ${summary.errors} errors and ${summary.warnings} warnings.`}
        </Alert>
        <ValidationMessages messages={summary.messages} />
    </>
}
