import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  Container
} from "./components";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? defaultTheme : darkTheme;

  if(!componentMounted) {
      return <div />;
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
        <PrimaryButton>Hello World!</PrimaryButton>
        <SecondaryButton>Hello World!</SecondaryButton>
        <TertiaryButton>Hello World!</TertiaryButton>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
