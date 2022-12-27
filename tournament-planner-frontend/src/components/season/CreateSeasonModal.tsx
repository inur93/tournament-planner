import { Box, Modal, Typography } from "@mui/material";
import { CreateSeason } from "./CreateSeason";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type Props = {
    open: boolean,
    onClose: () => void
}
export const CreateSeasonModal = ({ open, onClose }: Props) => {

    return <Modal open={open} onClose={onClose}>
        <Box sx={style}>
            <Typography variant="h2">New Season</Typography>
            <CreateSeason afterCreate={onClose} />
        </Box>
    </Modal>
}