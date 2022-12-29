import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/shared';
import { ThemeProvider } from '@mui/material';
import { theme } from './config/Theme';
import StyledButtonContainer from './components/shared/ButtonContainer/ButtonContainer';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyledButtonContainer>
          <Button primary onClick={() => { }}>
            Click me
          </Button>
          <Button onClick={() => { }}>
            Click me
          </Button>
        </StyledButtonContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
