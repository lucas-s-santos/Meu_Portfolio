"use client"

import { useState, useEffect } from "react"
import { Home, Code, Briefcase, Download, Mail, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
  darkMode: boolean
  onThemeToggle: () => void
}

export default function Navigation({ activeSection, onSectionChange, darkMode, onThemeToggle }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { id: "inicio", label: "Início", icon: Home },
    { id: "habilidades", label: "Habilidades", icon: Code },
    { id: "portfolio", label: "Portfólio", icon: Briefcase },
    { id: "curriculo", label: "Currículo", icon: Download },
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

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo com foto */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/QMPLyY5w/Logo-Design-FB.jpg"
                alt="Lucas Silva dos Santos"
                className="w-10 h-10 rounded-full object-cover border-2 border-green-500/20"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-green-600 dark:bg-green-400 rounded-full" />
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-green-50 dark:bg-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onThemeToggle}
                className="w-9 h-9 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden w-9 h-9 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                    : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>

                {/* Active indicator for mobile */}
                {activeSection === item.id && (
                  <div className="ml-auto w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
