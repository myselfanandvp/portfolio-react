import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProjectsPage from "./pages/ProjectsPage"
import SkillsPage from "./pages/SkillsPage"
import { Routes, Route } from "react-router-dom"
import AppBackground from "./components/AppBackground"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
function App() {
  return (
    <AppBackground>
      <Navbar />
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<SkillsPage />} path="/skills" />
        <Route element={<ProjectsPage />} path="/projects" />
      </Routes>
      <Footer />
    </AppBackground>
  )
}



export default App
