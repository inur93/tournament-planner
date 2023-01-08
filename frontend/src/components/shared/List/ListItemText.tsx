import { ListItemText as MuiListItemText } from '@mui/material'

type Props = {
    primary?: string | null,
    secondary?: string
}

const ListItemText = ({ primary, secondary }: Props) => {
    return <MuiListItemText primary={primary} secondary={secondary}></MuiListItemText>
}

export default ListItemText