import PortfolioItem from "./portfolio-item"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Logo Lucarts.Designer - LOGO",
      category: "Logo Empresarial",
      imageUrl: "https://i.postimg.cc/QC8qkhC3/Logo-Design-Textura.jpg",
    },
    {
      id: 2,
      title: "Logo CalmDev - LOGO",
      category: "Logo Empresarial",
      imageUrl: "https://i.postimg.cc/wB9cd95s/Logo-Calm-Dev-2.jpg",
    },
    {
      id: 3,
      title: "Cartão TG FLASH - CARTÃO DE VISITA",
      category: "Cartão de Visita Empresarial",
      imageUrl: "https://i.postimg.cc/tJg90nJm/CARTAO-DE-VISITA.jpg",
    },
    {
      id: 4,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/WpDkJdX7/11-07-Gabriel.jpg",
    },
    {
      id: 5,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/WpD27gRh/28-06-Gabriel.jpg",
    },
    {
      id: 6,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/GtsdhwPk/31-05-gabriel.jpg",
    },
    {
      id: 7,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/LsNHxV6Z/gabriel-23-05.jpg",
    },
    {
      id: 8,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/52p0rJs0/12-07guilherme.jpg",
    },
    {
      id: 9,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/kgC6Zf9j/05-07-Guilherme.jpg",
    },
    {
      id: 10,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/J46vYdb8/10-05-guilherme.jpg",
    },
    {
      id: 11,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/jS9V2k5c/guilherme26-04.jpg",
    },
    {
      id: 12,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/tT4FcDd0/19-07-Leo-Maia.jpg",
    },
    {
      id: 13,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/KzTQf0mZ/28-06leo-Maia.jpg",
    },
    {
      id: 14,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/6qYZfZ4W/31-leo-maia.jpg",
    },
    {
      id: 15,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/dV7CGLsF/10-07-Matheus.jpg",
    },
    {
      id: 16,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/FK5YcpCb/03-07-Matheus.jpg",
    },
    {
      id: 17,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/7L3fNzjF/16-17-18do06-Matheus2.jpg",
    },
    {
      id: 18,
      title: "Arte Connect Sports - ARTE JOGADOR",
      category: "Dia de Jogo",
      imageUrl: "https://i.postimg.cc/7hfHjJQY/Contrato-de-forma-o.jpg",
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
