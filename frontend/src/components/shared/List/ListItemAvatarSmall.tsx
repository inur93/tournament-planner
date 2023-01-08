import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar"

type Props = {
    children: React.ReactNode
}

const ListItemAvatarSmall = ({ children }: Props) => {
    return <ListItemAvatar sx={{
        width: 35,
        minWidth: 'auto',
        textAlign: 'left'
    }}>
        {children}
    </ListItemAvatar>
}

export default ListItemAvatarSmall