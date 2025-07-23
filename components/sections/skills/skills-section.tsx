import { Code, Palette, Video, Camera, Settings } from "lucide-react"
import SkillCard from "./skill-card"

export default function SkillsSection() {
  const skills = [
    { name: "Front-end", description: "HTML, CSS, JavaScript", icon: Code },
    { name: "Back-end", description: "PHP, Java, Node.js", icon: Code },
    { name: "Design Gráfico", description: "Photoshop, Identidade Visual", icon: Palette },
    { name: "Videomaker", description: "Premiere, After Effects", icon: Video },
    { name: "Fotógrafo", description: "Edição e Tratamento", icon: Camera },
    { name: "Técnico em TI", description: "Suporte e Manutenção", icon: Settings },
  ]

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Habilidades</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combinando programação e design para criar soluções completas e inovadoras
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} description={skill.description} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
