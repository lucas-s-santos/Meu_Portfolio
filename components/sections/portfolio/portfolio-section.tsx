"use client"

// Arquivo da sua seção de ARTES (ex: src/components/sections/portfolio/portfolio-section.tsx)

import React, { useEffect, useRef, useState } from "react";
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

    // Refs e estado para o carrossel em loop
    const carouselRef = useRef<HTMLDivElement | null>(null)
    const innerRef = useRef<HTMLDivElement | null>(null)
    const rafRef = useRef<number | null>(null)
    const [paused, setPaused] = useState(false)
    const resumeTimeoutRef = useRef<number | null>(null)
  const cardWidthRef = useRef<number>(320) // largura do card em px

    // não usamos innerHTML para clonar (quebrava eventos React). Vamos renderizar os itens duas vezes em JSX.

    // Handle arrow: move um card para a direção e pausa o auto-scroll por curto período
    const handleArrowClick = (direction: number) => {
      const carousel = carouselRef.current
      if (!carousel) return
      setPaused(true)
      // scroll por 1 card
      const dist = cardWidthRef.current * direction
      carousel.scrollBy({ left: dist, behavior: 'smooth' })
      // resume após 1s
      if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = window.setTimeout(() => setPaused(false), 1000)
    }

    // Auto-scroll contínuo em loop usando requestAnimationFrame
    useEffect(() => {
      const carousel = carouselRef.current
      const inner = innerRef.current
      if (!carousel || !inner) return

      const originalWidth = inner.scrollWidth / 2
      const speed = 1.2 // px por frame, ajuste aqui para velocidade

      const step = () => {
        if (!carousel) return
        if (!paused) {
          carousel.scrollLeft += speed
          if (carousel.scrollLeft >= originalWidth) {
            // reset para o início do loop
            carousel.scrollLeft -= originalWidth
          }
        }
        rafRef.current = requestAnimationFrame(step)
      }

      rafRef.current = requestAnimationFrame(step)

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current)
      }
    }, [paused])

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
      </div>

      {/* Carrossel full-bleed: ocupa toda a largura da página */}
      <div className="w-full">
        <div className="relative max-w-full">
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full shadow p-2 hover:bg-white"
            onClick={() => handleArrowClick(-1)}
            aria-label="Voltar"
            type="button"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>

          <div
            ref={carouselRef}
            id="carousel-artes"
            className="flex overflow-x-hidden gap-4 pb-4 w-full"
            style={{ scrollSnapType: 'none', alignItems: 'start' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div ref={innerRef} className="flex gap-4 pl-6 pr-6">
              {portfolioItems.map((item) => (
                <div key={"orig-" + item.id} style={{ scrollSnapAlign: 'start', minWidth: '320px', maxWidth: '320px' }}>
                  <PortfolioItem
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    imageUrl={item.imageUrl}
                  />
                </div>
              ))}
              {/* cópia para loop contínuo - mantém eventos React */}
              {portfolioItems.map((item) => (
                <div key={"copy-" + item.id} style={{ scrollSnapAlign: 'start', minWidth: '320px', maxWidth: '320px' }}>
                  <PortfolioItem
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    imageUrl={item.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full shadow p-2 hover:bg-white"
            onClick={() => handleArrowClick(1)}
            aria-label="Avançar"
            type="button"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
