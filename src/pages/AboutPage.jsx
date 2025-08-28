import React from "react";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import AboutHero from "../components/AboutHero";
import Capabilities from "../components/Capabilities";
import Experience from "../components/Experience";

const AboutPage = () => {
  return (
    <div>
      <Nav />
      <AboutHero />
      <Capabilities />
     <Experience />

      <Contact />
    </div>
  );
};
export default AboutPage;
