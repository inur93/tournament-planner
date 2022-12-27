import { Typography } from "@mui/material"
import { Modal } from "../shared/Modal"
import { CreateMatch } from "./CreateMatch"

type Props = {
    open: boolean,
    onClose: () => void,
}
export const CreateMatchModal = ({ open, onClose }: Props) => {

    return <Modal open={open} onClose={onClose}>
        <Typography variant="h2">New Match</Typography>
        <CreateMatch afterCreate={onClose} />
    </Modal>
}