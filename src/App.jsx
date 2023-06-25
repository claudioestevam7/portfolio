import "./App.css";
import { useState, useContext, useEffect } from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Projects from "./components/Projects/Projects";
import DataScience from "./components/DataScience/DataScience";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);



  const alterTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  } 
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header  alterTheme={alterTheme}/>
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
              {/* <DataScience /> */}
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      {/* <ScrollUp /> */}
    </ThemeProvider>
  );
}

export default App;
