import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#0F2147'
        }
    },
    typography: {
        h1: {
            fontSize: '2em'
        },
        h2: {
            fontSize: '1.75em'
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                margin: 'normal'
            }
        },
        MuiFormControl: {
            defaultProps: {
                margin: 'normal'
            }
        },
        MuiButton: {
            defaultProps: {
                color: 'primary',
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    borderRadius: 0
                }
            }
        },
        MuiCard: {
            defaultProps: {
                variant: 'outlined'
            },
            styleOverrides: {
                root: {
                    borderRadius: 0
                }
            }
        }
    }
})