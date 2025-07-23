import { Badge } from "@/components/ui/badge"
import { User, Settings, Code, Palette, Video, Camera } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src="https://i.postimg.cc/HL6xxp25/image.png"
            alt="Lucas Silva dos Santos"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Lucas Silva dos Santos</h1>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge variant="secondary" className="text-sm font-medium">
            <User className="w-3 h-3 mr-1" />
            Ciência da Computação
          </Badge>
          <Badge variant="secondary" className="text-sm font-medium">
            <Settings className="w-3 h-3 mr-1" />
            Técnico em Informática
          </Badge>
          <Badge variant="secondary" className="text-sm font-medium">
            <Code className="w-3 h-3 mr-1" />
            Programador
          </Badge>
          <Badge variant="secondary" className="text-sm font-medium">
            <Palette className="w-3 h-3 mr-1" />
            Designer
          </Badge>
          <Badge variant="secondary" className="text-sm font-medium">
            <Video className="w-3 h-3 mr-1" />
            Videomaker
          </Badge>
          <Badge variant="secondary" className="text-sm font-medium">
            <Camera className="w-3 h-3 mr-1" />
            Fotógrafo
          </Badge>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Sou um profissional multidisciplinar que atua na convergência entre tecnologia e design visual, desenvolvendo
          soluções criativas com foco em performance, funcionalidade e identidade. Com experiência em programação web e
          criação gráfica, trabalho como freelancer no perfil{" "}
          <a
            href="https://www.instagram.com/lucartes.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            @lucartes.design
          </a>
          , onde produzo artes visuais para atletas e projetos esportivos. Atualmente, concilio minha atuação no design
          com a formação em Ciência da Computação, contribuindo em projetos digitais que exigem visão estética,
          conhecimento técnico e inovação constante.
        </p>
      </div>
    </section>
  )
}
