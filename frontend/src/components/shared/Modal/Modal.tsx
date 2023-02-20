import { DialogContent, DialogTitle, Dialog as MuiModal } from '@mui/material'

type Props = {
  children: React.ReactNode
  open: boolean
  onClose?: () => void
  title?: string
}
const Modal = ({ children, open, onClose, title }: Props) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </MuiModal>
  )
}

export default Modal
