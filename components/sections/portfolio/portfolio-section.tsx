import PortfolioItem from "./portfolio-item"

export default function PortfolioSection() {
  const portfolioItems = [
    { id: 1, title: "Arte Esportiva - Futebol", category: "Design Esportivo" },
    { id: 2, title: "Identidade Visual - Atleta", category: "Branding" },
    { id: 3, title: "Arte para Redes Sociais", category: "Social Media" },
    { id: 4, title: "Design de Apresentação", category: "Design Gráfico" },
    { id: 5, title: "Arte Promocional", category: "Marketing" },
    { id: 6, title: "Logo e Identidade", category: "Branding" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              // Você pode adicionar imagens aqui:
              // imageUrl="/caminho/para/sua/imagem.jpg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
