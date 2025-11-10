// Arquivo da sua seção de ARTES (ex: src/components/sections/portfolio/portfolio-section.tsx)

import PortfolioItem from "./portfolio-item"

export default function ArtsSection() { // Renomeei a função para clareza
  const portfolioItems = [
    // SUA LISTA DE 18 ARTES CONTINUA AQUI, SEM MUDANÇAS
    { id: 1, title: "Logo Lucarts.Designer", category: "Logo Empresarial", imageUrl: "/artes/LogoDesignTextura.jpg" },
    { id: 2, title: "Logo CalmDev", category: "Logo Empresarial", imageUrl: "/artes/Logo CalmDev 2.jpg" },
    { id: 3, title: "Cartão TG FLASH", category: "Cartão de Visita Empresarial", imageUrl: "/artes/CARTAO-DE-VISITA.jpg" },
    { id: 4, title: "Felipe Moreira", category: "Convidado PodCast", imageUrl: "/artes/26-05-felipe.jpg" },
    { id: 5, title: "Arte Jogador ", category: "Dia de Jogo", imageUrl: "/artes/26-09leomaia.jpg" },
    { id: 6, title: "Arte Jogador", category: "Dia de Jogo", imageUrl: "/artes/11-10leomaia2.jpg" },
    { id: 7, title: "Arte Jogador", category: "Dia de Jogo", imageUrl: "/artes/05-07-Guilherme.jpg" },
    { id: 8, title: "Arte Jogador", category: "Dia de Jogo", imageUrl: "/artes/09-08Gui.jpg" },
    { id: 9, title: "Arte Jogador", category: "Dia de Jogo", imageUrl: "/artes/10-07Matheus.jpg" },
    { id: 10, title: "Arte Jogador", category: "Dia de Jogo", imageUrl: "/artes/16-17-18do06-Matheus2.jpg" },
    { id: 11, title: "Arte Jogador", category: "Dia de Jogo", imageUrl: "/artes/11-07Gabriel.jpg" },
    { id: 12, title: "Arte Jogador", category: "Dia de Jogo", imageUrl: "/artes/28-06Gabriel.jpg" },
    { id: 13, title: "Promoção Açaí", category: "Social Mídia Açaí", imageUrl: "/artes/açaí.jpg" },
    { id: 14, title: "Promoção Hortfruti", category: "Social Mídia Hortifruti ", imageUrl: "/artes/TESTEhortifruti.jpg" },
    { id: 15, title: "Apresentação CalmDev", category: "Social Mídia CalmDev", imageUrl: "/artes/conheca-a-calmdev.jpg" },
  ]

  return (
    // ID modificado para não conflitar
    <section id="artes" className="py-20 bg-card">
      {/* Largura aumentada para caber mais colunas */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Título e texto mais sutis */}
          <h2 className="text-3xl font-bold text-foreground">Outras Habilidades Criativas</h2>
          <p className="text-md text-muted-foreground mt-2 max-w-2xl mx-auto">
            Além do código, também tenho experiência em design gráfico e identidade visual.
          </p>
        </div>

        {/* GRADE MODIFICADA: Mais colunas e menos espaçamento */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
