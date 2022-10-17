import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global";

import { Routes } from "./Routes";

import theme from "./Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.ThemeContainer}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
