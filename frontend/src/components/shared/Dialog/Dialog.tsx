import { Dialog as MuiDialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import Button from '../Button/Button'


type Props = {
    id: string,
    open: boolean,
    onClose?: () => void,
    onAccept?: () => void,
    title: string,
    description: string

}
const Dialog = ({ id, title, description, open, onClose, onAccept }: Props) => {

    return <MuiDialog
        open={open}
        onClose={onClose}
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
    >
        <DialogTitle id={`${id}-title`}>
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id={`${id}-description`}>
                {description}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>No</Button>
            <Button primary onClick={onAccept} autoFocus>
                Yes
            </Button>
        </DialogActions>
    </MuiDialog>
}

export default Dialog