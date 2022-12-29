import { Box, Modal as MuiModal } from "@mui/material"

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
    children: React.ReactNode,
    open: boolean,
    onClose?: () => void
}
const Modal = ({ children, open, onClose }: Props) => {

    return <MuiModal open={open} onClose={onClose}>
        <Box sx={style}>
            {children}
        </Box>
    </MuiModal>
}

export default Modal