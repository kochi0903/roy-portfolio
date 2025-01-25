import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ThemeContext } from "./main.jsx";

const App = () => {
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
