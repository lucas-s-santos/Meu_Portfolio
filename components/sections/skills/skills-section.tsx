"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Lista de importações SEGURA E FUNCIONAL com os novos ícones
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs, FaPhp, FaJava, FaGitAlt, FaGithub, FaFigma, FaDatabase, FaCode 
} from "react-icons/fa"
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiAdobephotoshop, SiAdobepremierepro, SiSupabase, SiMysql,
  // ÍCONES NOVOS ADICIONADOS
  SiAdobeaftereffects,
  SiSonyvegas
} from "react-icons/si"

// SEU COMPONENTE DE ÍCONE ORIGINAL (FUNCIONANDO)
const TechIcon = ({ icon, name, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="group relative flex flex-col items-center justify-center p-4"
  >
    <div 
      className="text-5xl text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-[var(--hover-color)]"
      style={{ '--hover-color': color } as React.CSSProperties}
    >
      {icon}
    </div>
    <span className="absolute bottom-[-2.5rem] text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      {name}
    </span>
  </motion.div>
);

export default function SkillsSection() {
  // Lista de tecnologias com ícones substitutos e seguros
  const technologies = {
    frontend: [
      { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
      { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
      { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
      { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
      { icon: <FaVuejs />, name: "Vue.js", color: "#4FC08D" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
    ],
    backend: [
      { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
      { icon: <FaJava />, name: "Java", color: "#007396" },
      { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
      { icon: <FaCode />, name: "C#", color: "#512BD4" },
      { icon: <FaCode />, name: "C++", color: "#00599C" },
    ],
    databases: [
      { icon: <SiSupabase />, name: "Supabase", color: "#3ECF8E" },
      { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
      { icon: <FaDatabase />, name: "SQL Server", color: "#CC2927" },
      { icon: <FaDatabase />, name: "SQL", color: "#888888" },
      { icon: <FaDatabase />, name: "Neo4j", color: "#008CC1" },
    ],
    toolsAndDesign: [
      { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
      { icon: <FaGithub />, name: "GitHub", color: "#181717" },
      { icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
      { icon: <SiAdobephotoshop />, name: "Photoshop", color: "#31A8FF" },
      { icon: <SiAdobepremierepro />, name: "Premiere Pro", color: "#9999FF" },
      // FERRAMENTAS ADICIONADAS
      { icon: <SiAdobeaftereffects />, name: "After Effects", color: "#9999FF" },
      //{ icon: <SiSonyvegas />, name: "Sony Vegas", color: "#BCB0B3" },
    ]
  };

  return (
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
