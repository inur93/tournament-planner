import { styled } from '@mui/material';

const StyledButtonContainer = styled('div', {
    name: 'button-container'
})(
    ({ theme }) => `
    .MuiButtonBase-root {
        margin-right: ${theme.spacing(1)};
    }    
   `
)

export default StyledButtonContainer