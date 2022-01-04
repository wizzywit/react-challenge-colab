import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    error: {
      main: "#F56236",
    },
    warning: {
      main: "#FCE788"
    },
    info: {
      main: "#88FCA3"
    }
  },
});
const App: React.FC<{}> = () => {

  return (
      <ThemeProvider theme={theme}>
        <div>
          <Navbar/>
        </div>
      </ThemeProvider>
  );
}

export default App;
