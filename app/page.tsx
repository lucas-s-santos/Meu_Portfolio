// src/app/page.tsx
"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero/hero-section"
import AboutSection from "@/components/sections/about/about-section"
import SkillsSection from "@/components/sections/skills/skills-section"
import DevProjectsSection from "@/components/sections/dev-projects/dev-projects-section"
import ArtsSection from "@/components/sections/portfolio/portfolio-section"
import ContactSection from "@/components/sections/contact/contact-section"
import FooterSection from "@/components/sections/footer/footer-section"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "habilidades", "projetos", "artes", "contato"]
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // DIV PRINCIPAL CORRIGIDO: Sem classes de fundo.
    // A cor do texto é herdada do body, e o fundo (com a malha) é controlado pelo layout.tsx.
    <div>
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <DevProjectsSection />
        <ArtsSection />
        <ContactSection />
      </main>
      
      <FooterSection />
    </div>
  )
}
