import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  Container,
  SignUpModal
} from "./components";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const [showModal, setShowModal] = useState(false);
  const themeMode = theme === 'light' ? defaultTheme : darkTheme;

  if(!componentMounted) {
      return <div />;
  };

  const toggleModal = () => {
      setShowModal(!showModal);
  }

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
        <PrimaryButton modifiers={['small', 'success']} onClick={toggleModal}>Toggle Modal</PrimaryButton>
        <SignUpModal showModal={showModal} setShowModal={setShowModal}></SignUpModal>
        <PrimaryButton>Hello World!</PrimaryButton>
        <SecondaryButton>Hello World!</SecondaryButton>
        <TertiaryButton>Hello World!</TertiaryButton>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
