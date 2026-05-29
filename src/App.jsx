import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import ProjectCard from "./components/ProjectCard"
import { siteData } from "./data/site"
import { useEffect, useState } from "react"
import ThemeToggle from "./components/ThemeToggle"
import Footer from "./components/Footer"
import Button from "./components/Button"
import { en } from "./locales/en"
import { jp } from "./locales/jp"
import LanguageToggle from "./components/LanguageToggle"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import BackgroundTexture from "./components/BackgroundTexture"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const [language, setLanguage] = useState("en")
  const locale =
  language === "en"
    ? en
    : jp

  return (
    <Layout>
      <BackgroundTexture />
      <div className={language === "jp" ? "font-jp" : "font-en"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} ThemeToggle={ThemeToggle} language={language} setLanguage={setLanguage}
        locale={locale} LanguageToggle={LanguageToggle}/>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12">
      <Hero locale={locale} language={language}/>
      <AboutSection locale={locale} language={language}/>
      <ProjectsSection locale={locale} language={language}/>
      <ContactSection locale={locale} language={language}/>
      </div>

      <Footer />
      
      </div>
    </Layout>
  )
}

export default App