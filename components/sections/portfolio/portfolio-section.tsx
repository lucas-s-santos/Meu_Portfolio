import PortfolioItem from "./portfolio-item"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Logo Lucarts.Designer - LOGO",
      category: "Logo Empresarial",
      imageUrl: "/artes/LogoDesignTextura.jpg",
    },
    {
      id: 2,
      title: "Logo CalmDev - LOGO",
      category: "Logo Empresarial",
      imageUrl: "/artes/Logo CalmDev 2.jpg",
    },
    {
      id: 3,
      title: "Cartão TG FLASH - CARTÃO DE VISITA",
      category: "Cartão de Visita Empresarial",
      imageUrl: "/artes/CARTAO-DE-VISITA.jpg",
    },
    {
      id: 4,
      title: "Felipe Moreira - PODCAST",
      category: "Convidado PodCast",
      imageUrl: "/artes/26-05-felipe.jpg",
    },
    {
      id: 5,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/11-07Gabriel.jpg",
    },
    {
      id: 6,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/28-06Gabriel.jpg",
    },
    {
      id: 7,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/31-05-Gabriel.jpg",
    },
    {
      id: 8,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/12-07Guilherme.jpg",
    },
    {
      id: 9,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/05-07-Guilherme.jpg",
    },
    {
      id: 10,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/10-05-Guilherme.jpg",
    },
    {
      id: 11,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/Guilherme26-04.jpg",
    },
    {
      id: 12,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/19-07LeoMaia.jpg",
    },
    {
      id: 13,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/28-06LeoMaia.jpg",
    },
    {
      id: 14,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/31-leo-maia.jpg",
    },
    {
      id: 15,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/10-07Matheus.jpg",
    },
    {
      id: 16,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/03-07Matheus.jpg",
    },
    {
      id: 17,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/16-17-18do06-Matheus2.jpg",
    },
    {
      id: 18,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "/artes/Contrato-de-Formacao.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Artes e Identidade Visual</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Veja algumas das minhas criações visuais, onde cada detalhe é pensado para transmitir identidade, estilo e propósito em projetos únicos!
          </p>
        </div>

        {/* Mapeia os itens e usa a imagem específica de cada um */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}  // <- aqui pega a imagem correta
            />
          ))}
        </div>
      </div>
    </section>
  )
}
