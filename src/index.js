import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./style.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    body1: {
      fontWeight: "300",
    },
    h4: {
      fontWeight: "300",
    },
    h3: {
      fontWeight: "300",
    },
    h6: {
      fontWeight: "300",
    },
  },
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  </HashRouter>
);
