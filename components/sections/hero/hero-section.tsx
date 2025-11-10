// src/components/sections/hero/hero-section.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"

const frontendTech = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
const backendTech = ["Node.js", "Java", "PHP", "C#"]
const allTech = [...frontendTech, ...backendTech]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % allTech.length)
    }, 3000) // Troca a cada 3 segundos

    return () => clearInterval(interval)
  }, [])

  // --- FUNÇÕES DE ROLAGEM ADICIONADAS ---
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Lucas Silva <span className="text-primary">dos Santos</span>
            </h1>
            
            <div className="mt-4 h-10 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full text-2xl text-muted-foreground"
                >
                  {allTech[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* --- APENAS ESTA PARTE FOI MODIFICADA --- */}
            <div className="mt-8 flex items-center gap-4">
              {/* 1. Botão "Ver Projetos" agora rola para a seção "projetos" */}
              <Button size="lg" onClick={() => scrollToSection("projetos")}>
                Ver Projetos <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              {/* 2. Botão "Contratar Agora" agora rola para a seção "contato" */}
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contato")}>
                Contratar Agora
              </Button>
            </div>
            {/* --- FIM DA MODIFICAÇÃO --- */}

          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{ y: ["-10px", "10px"] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
              <img
                src="/lucas2.JPG"
                alt="Lucas Silva dos Santos"
                className="relative w-full h-full rounded-full object-cover scale-110 border-4 border-primary/50 shadow-2xl shadow-primary/10"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      <div className="absolute bottom-10">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
   )
}
