import './App.css'
import AboutSection from './components/About/AboutSection'
import EducationSection from './components/EducationSection/EducationSection'
import FooterContact from './components/FooterContact/FooterContact'
import HamburgerMenu from './components/Hamburger/HamburgerMenu'
import HeroSection from './components/Hero-section.jsx/HeroSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

function App() {
  return (
    <>
    <HamburgerMenu />
     <HeroSection />
     <AboutSection />
     <ProjectsSection />
     <EducationSection />
     <FooterContact />
    </>
  )
}

export default App
