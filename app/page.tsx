"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero/hero-section"
import SkillsSection from "@/components/sections/skills/skills-section"
import PortfolioSection from "@/components/sections/portfolio/portfolio-section"
import ResumeSection from "@/components/sections/resume/resume-section"
import ContactSection from "@/components/sections/contact/contact-section"
import FooterSection from "@/components/sections/footer/footer-section"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "habilidades", "portfolio", "curriculo", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          darkMode={darkMode}
          onThemeToggle={toggleTheme}
        />

        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  )
}
