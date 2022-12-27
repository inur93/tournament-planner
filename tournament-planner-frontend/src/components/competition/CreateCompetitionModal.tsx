import { Grid, Typography } from "@mui/material"
import { Modal } from "../shared/Modal"
import { CreateCompetition } from "./CreateCompetition"

type Props = {
    open: boolean,
    onClose: () => void,
}
export const CreateCompetitionModal = ({ open, onClose }: Props) => {
    return (<Modal open={open} onClose={onClose}>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h2">New Competition</Typography>
                <CreateCompetition afterCreate={onClose} hideBackButton />
            </Grid>
        </Grid>
    </Modal>)
}