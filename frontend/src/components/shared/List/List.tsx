import { List as MuiList } from '@mui/material'

type Props = {
    children: React.ReactNode
}

const List = ({ children }: Props) => {
    return <MuiList>
        {children}
    </MuiList>
}

export default List