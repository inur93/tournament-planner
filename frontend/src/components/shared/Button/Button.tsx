import { Button as MuiButton } from '@mui/material'

type Props = {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    primary?: boolean
    autoFocus?: boolean
}
const Button = ({ primary, ...props }: Props) => {

    return <MuiButton {...props} variant="contained" color={primary ? 'primary' : 'inherit'} href="#" />
}

export default Button;