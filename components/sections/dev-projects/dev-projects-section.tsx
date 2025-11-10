// src/components/sections/dev-projects/dev-projects-section.tsx
import ProjectCard, { Project } from "./project-card"

const devProjects: Project[] = [
  {
    title: "Meu Portfólio Pessoal",
    description: "O site que você está vendo. Feito com Next.js, Tailwind CSS e Framer Motion.",
    longDescription: "Este portfólio foi um projeto completo para solidificar minhas habilidades em desenvolvimento front-end moderno. O objetivo era criar uma experiência de usuário rápida, responsiva e visualmente agradável, com suporte a temas claro e escuro, animações suaves e uma arquitetura de componentes bem estruturada usando shadcn/ui.",
    imageUrl: "/projetos/portfolio_lucas.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    githubUrl: "https://github.com/lucas-s-santos/Meu_Portfolio",
    liveUrl: "https://portfolio-lucas-s-s.netlify.app/",
    videoUrl: "/projetos/video-portfolio.mp4",
    
    // --- ADICIONE OS CAMINHOS DAS SUAS NOVAS IMAGENS AQUI ---
    galleryImages: [
      "/projetos/portfolio_lucas.png",      
      "/projetos/portfolio_lucas2.png",        // Imagem 2 (nova)
      "/projetos/sobremim.png",    
      "/projetos/linguagens.png",
      "/projetos/projetos.png",
      "/projetos/artes.png",
      "/projetos/contato.png"
    ] 
  },
  {
    title: "API de Gerenciamento de Tarefas",
    description: "API RESTful para um app de To-Do com autenticação JWT e banco de dados NoSQL.",
    longDescription: "Desenvolvi esta API como um estudo aprofundado de back-end com Node.js e Express...",
    imageUrl: "/projetos-dev/api-cover.png",
    tags: ["Node.js", "Express", "JWT", "MongoDB", "Zod", "Swagger"],
    githubUrl: "https://github.com/seu-usuario/api-tarefas",
    // Se quiser adicionar uma galeria a este projeto, basta criar a lista:
    // galleryImages: ["/caminho/para/imagem1.png", "/caminho/para/imagem2.png"]
  },
];

export default function DevProjectsSection( ) {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Projetos de Desenvolvimento</h2>
          <p className="text-lg text-muted-foreground mt-2">Uma seleção dos meus principais trabalhos. Clique para ver mais.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
