// src/components/navigation.tsx
"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes" // <-- IMPORTANTE: Importando o hook correto
import { Home, User, Code, Briefcase, Palette, Mail, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// As props de tema foram removidas, pois o hook 'useTheme' cuida de tudo.
interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // 'theme' e 'setTheme' agora vêm diretamente do provedor global 'next-themes'
  const { theme, setTheme } = useTheme() 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lista de itens do menu ATUALIZADA com os IDs corretos
  const menuItems = [
    { id: "inicio", label: "Início", icon: Home },
    { id: "sobre", label: "Sobre", icon: User },
    { id: "habilidades", label: "Habilidades", icon: Code },
    { id: "projetos", label: "Projetos", icon: Briefcase },
    { id: "artes", label: "Artes", icon: Palette },
    { id: "contato", label: "Contato", icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  // Função que alterna o tema usando o 'setTheme' do hook
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo na Esquerda */}
            <a href="#inicio" onClick={() => scrollToSection('inicio')} className="flex items-center space-x-3 group">
              <img src="/LogoDesignFB.JPG" alt="Logo" className="w-8 h-8 rounded-full transition-transform group-hover:scale-110" />
              
            </a>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* O botão de tema agora funciona corretamente */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeSection === item.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent/50'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
