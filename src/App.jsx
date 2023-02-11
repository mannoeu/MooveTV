import React from "react";
import Routes from "./routes";
import GlobalStyle from "./global";
import { ThemeProvider } from "styled-components";
import { useStore } from "./store";

function App() {
  const { state } = useStore();

  return (
    <ThemeProvider theme={state.theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
