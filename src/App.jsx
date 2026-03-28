import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Overview />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
