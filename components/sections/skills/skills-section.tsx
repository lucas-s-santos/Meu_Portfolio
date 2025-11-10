// src/components/sections/skills/skills-section.tsx
"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TechIcon = ({ src, name, color, darkSrc }: { src: string; name: string; color: string; darkSrc?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="group relative flex flex-col items-center justify-center p-4"
  >
    <div 
      className="w-16 h-16 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 flex items-center justify-center"
    >
      {/* Versão Light (SVG) - sempre mostra, exceto se houver darkSrc no dark */}
      <img
        src={src}
        alt={name}
        className={`w-full h-full object-contain ${darkSrc ? 'dark:hidden' : ''}`}
        loading="lazy"
      />
      {/* Versão Dark (PNG) - só mostra se tiver darkSrc */}
      {darkSrc && (
        <img
          src={darkSrc}
          alt={name}
          className="w-full h-full object-contain hidden dark:block"
          loading="lazy"
        />
      )}
    </div>
    <span className="absolute bottom-[-2.5rem] text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      {name}
    </span>
  </motion.div>
);

export default function SkillsSection() {
  // --- LISTA CORRIGIDA COM OS NOMES EXATOS E A EXTENSÃO DUPLA '.svg.svg' ---
  const technologies = {
    frontend: [
      { src: "/icons/html.svg.svg", name: "HTML5", color: "#E34F26" },
      { src: "/icons/css.svg.svg", name: "CSS3", color: "#1572B6" },
      { src: "/icons/javascript.svg.svg", name: "JavaScript", color: "#F7DF1E" },
      { src: "/icons/typescript.svg.svg", name: "TypeScript", color: "#3178C6" },
      { src: "/icons/react.svg.svg", name: "React.js", color: "#61DAFB" },
      { src: "/icons/nextjs.svg.svg", name: "Next.js", color: "#000000", darkSrc: "/icons/nextjsbranco.svg" },
      { src: "/icons/vuejs.svg.svg", name: "Vue.js", color: "#4FC08D" },
      { src: "/icons/tailwindcss.svg.svg", name: "Tailwind CSS", color: "#06B6D4" },
    ],
    backend: [
      { src: "/icons/Node.js.svg", name: "Node.js", color: "#339933" },
      { src: "/icons/Java.svg", name: "Java", color: "#007396" },
      { src: "/icons/PHP.svg", name: "PHP", color: "#777BB4" },
      { src: "/icons/c-sharp.svg.svg", name: "C#", color: "#512BD4" },
      { src: "/icons/c-plus-plus.svg.svg", name: "C++", color: "#00599C" },
    ],
    databases: [
      { src: "/icons/supabase.svg.svg", name: "Supabase", color: "#3ECF8E" },
      { src: "/icons/mysql.svg.svg", name: "MySQL", color: "#4479A1" },
      { src: "/icons/sql-server.svg.svg", name: "SQL Server", color: "#CC2927" },
      { src: "/icons/neo4j.svg.svg", name: "Neo4j", color: "#008CC1" },
    ],
    toolsAndDesign: [
      { src: "/icons/Git.svg", name: "Git", color: "#F05032" },
      { src: "/icons/GitHub.svg", name: "GitHub", color: "#181717", darkSrc: "/icons/Githubbranco.png" },
      { src: "/icons/Figma.svg", name: "Figma", color: "#F24E1E" },
      { src: "/icons/photoshop.svg.svg", name: "Photoshop", color: "#31A8FF" },
      { src: "/icons/premiere.svg.svg", name: "Premiere Pro", color: "#9999FF" },
      { src: "/icons/After Effects.svg", name: "After Effects", color: "#9999FF" },
    ]
  };

  return (
    // O resto do seu componente continua exatamente igual.
    <section id="habilidades" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground">
            Proficiência nas seguintes ferramentas e linguagens...
          </h2>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Front-end</TabsTrigger>
            <TabsTrigger value="backend">Back-end</TabsTrigger>
            <TabsTrigger value="databases">Banco de Dados</TabsTrigger>
            <TabsTrigger value="toolsAndDesign">Ferramentas & Design</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-y-12 gap-x-6 pt-8">
              {technologies.frontend.map((tech) => <TechIcon key={tech.name} {...tech} />)}
            </div>
          </TabsContent>

          <TabsContent value="backend">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-y-12 gap-x-6 pt-8">
              {technologies.backend.map((tech) => <TechIcon key={tech.name} {...tech} />)}
            </div>
          </TabsContent>

          <TabsContent value="databases">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-y-12 gap-x-6 pt-8">
              {technologies.databases.map((tech) => <TechIcon key={tech.name} {...tech} />)}
            </div>
          </TabsContent>

          <TabsContent value="toolsAndDesign">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-y-12 gap-x-6 pt-8">
              {technologies.toolsAndDesign.map((tech) => <TechIcon key={tech.name} {...tech} />)}
            </div>
          </TabsContent>
        </Tabs>
        
      </div>
    </section>
  )
}
