import { Card, ListItem as MuiListItem } from '@mui/material'

type Props = {
    children: React.ReactNode,
}

const ListItem = ({ children }: Props) => {
    return <MuiListItem component={Card}>
        {children}
    </MuiListItem>
}

export default ListItem