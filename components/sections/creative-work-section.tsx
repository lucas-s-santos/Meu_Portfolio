// src/components/sections/creative-work-section.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"

// LISTA DE ARTES: Edite ou reduza se quiser.
const creativeWorks = [
  { id: 1, title: "Logo Lucarts.Designer", imageUrl: "/artes/LogoDesignTextura.jpg" },
  { id: 2, title: "Logo CalmDev", imageUrl: "/artes/Logo CalmDev 2.jpg" },
  { id: 3, title: "Cartão TG FLASH", imageUrl: "/artes/CARTAO-DE-VISITA.jpg" },
  { id: 4, title: "Felipe Moreira - PODCAST", imageUrl: "/artes/26-05-felipe.jpg" },
  { id: 5, title: "Arte Connect Sports", imageUrl: "/artes/11-07Gabriel.jpg" },
  { id: 6, title: "Arte Connect Sports", imageUrl: "/artes/28-06Gabriel.jpg" },
  { id: 7, title: "Arte Connect Sports", imageUrl: "/artes/31-05-Gabriel.jpg" },
  { id: 8, title: "Arte Connect Sports", imageUrl: "/artes/12-07Guilherme.jpg" },
  // Adicione mais se desejar, o carrossel cuidará do resto.
];

export default function CreativeWorkSection() {
  return (
    <section id="outras-habilidades" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Outras Habilidades Criativas</h2>
            <p className="text-md text-muted-foreground mt-2 max-w-2xl mx-auto">
              Além do código, também tenho experiência em design gráfico e identidade visual.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {creativeWorks.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12 hidden sm:flex" />
            <CarouselNext className="mr-12 hidden sm:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
