import { Typography } from "@mui/material"
import { Modal } from "../shared/Modal"
import { CreateTeam } from "./CreateTeam"

type Props = {
    open: boolean,
    onClose: () => void
}
export const CreateTeamModal = ({ open, onClose }: Props) => {

    return <Modal open={open} onClose={onClose}>
        <Typography variant="h2">New Team</Typography>
        <CreateTeam afterCreate={onClose} />
    </Modal>
}
