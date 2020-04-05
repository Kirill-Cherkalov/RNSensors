import * as React from "react";
import { ThemeProvider } from "styled-components";

import Router from "./src/router";

const theme = {
  dark: "#0B0F18",
  red: "#C93A29",
  white: "#ffffff",
};

export default () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);
