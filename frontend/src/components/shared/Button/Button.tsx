import { ButtonProps, Button as MuiButton } from '@mui/material'

type Props = {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    primary?: boolean
    autoFocus?: boolean
    submit?: boolean
    disabled?: boolean
}
const Button = ({ primary, submit, onClick, ...otherProps }: Props) => {
    const props = {
        ...otherProps,
        variant: 'contained',
        color: primary ? 'primary' : 'inherit'
    } as ButtonProps
    
    if (submit) {
        return <MuiButton {...props} type="submit" />
    }
    return <MuiButton
        {...props}
        type='button'
        onClick={(e) => {
            e.preventDefault();
            onClick && onClick(e)
        }}
    />
}

export default Button;