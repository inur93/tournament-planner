import { makeStyles } from 'tss-react/mui';
import React from "react"
import { Theme } from '@mui/material';

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        "& > .MuiButtonBase-root": {
            marginRight: theme.spacing(1)
        }
    }
}))

type Props = {
    children?: React.ReactNode
}
export const ButtonContainer = ({ children }: Props) => {
    const { classes } = useStyles();
    return <div className={classes.container}>
        {children}
    </div>
}