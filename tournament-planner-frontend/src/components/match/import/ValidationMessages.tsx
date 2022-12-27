import { Alert } from "@mui/material"
import { MatchValidation } from "../../../api"

type Props = {
    show?: boolean,
    messages: MatchValidation[]
}
export const ValidationMessages = ({ show, messages }: Props) => {
    const grouped = messages.groupBy(x => x.level.toString())

    const errors = grouped.find(x => x.key == "0")?.groupBy(x => x.message)
    const warnings = grouped.find(x => x.key == "1")?.groupBy(x => x.message)
    // if (!show) return null;
    return <>
        {errors?.length &&
            <Alert severity="error">
                {errors.map(x => `${x.key} (${x.length})`)}
            </Alert>
        }
        {warnings?.length &&
            <Alert severity="warning">
                {warnings.map(x => `${x.key} (${x.length})`)}
            </Alert>
        }
        {!errors && !warnings &&
            <Alert severity="success">
                Everything looks good!
            </Alert>}
    </>
}
