import React  from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./components/Navbar";
import {Box} from "@mui/material";
import {createGlobalStyle} from "styled-components";
import Content from "./components/Content";
import Provider from "./context/Provider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000"
    },
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

const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
     box-sizing: border-box;
   }
 `
const App: React.FC<{}> = () => {

  return (
      <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Provider>
                <Box sx={{width: "100%", boxSizing: "border-box"}}>
                    <Navbar/>
                    <Content/>
                </Box>
            </Provider>
        </ThemeProvider>
      </>

  );
}

export default App;
