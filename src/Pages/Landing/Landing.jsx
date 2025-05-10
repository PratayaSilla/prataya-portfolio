import React from "react";
import HamburgerMenu from "../../components/Hamburger/HamburgerMenu";
import HeroSection from "../../components/Hero-section.jsx/HeroSection";
import AboutSection from "../../components/About/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import EducationSection from "../../components/EducationSection/EducationSection";
import FooterContact from "../../components/FooterContact/FooterContact";

export default function Landing() {
  return (
    <>
      <HamburgerMenu />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <FooterContact />
    </>
  );
}
