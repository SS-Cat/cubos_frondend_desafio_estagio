import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from "styles";
import { Routes } from 'routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
