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
      title: "Arte Vital Aço - ARTE DE APRESENTAÇÃO",
      category: "Arte Empresarial",
      imageUrl: "https://i.postimg.cc/tTBHzRkd/vital-Post.jpg",
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
      imageUrl: "https://i.postimg.cc/WpD27gRh/28-06-Gabriel.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Artes e Identidade Visual</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Portfólio de design esportivo e criação visual para atletas e projetos
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
