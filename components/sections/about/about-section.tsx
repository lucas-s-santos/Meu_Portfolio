"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import React from "react"

// NOVO COMPONENTE: O DISPLAY DA LOGO INTERATIVA
const InteractiveLogoDisplay = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  const rotateX = useTransform(mouseY, [-150, 150], [15, -15]);
  const rotateY = useTransform(mouseX, [-150, 150], [-15, 15]);
  
  const glareX = useTransform(mouseX, [-150, 150], [0, 100]);
  const glareY = useTransform(mouseY, [-150, 150], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-[250px] aspect-square rounded-3xl bg-secondary/30 border border-border"
    >
      <div 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="absolute inset-5"
      >
        <motion.div
          animate={{ y: [-5, 5] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          {/* A LOGO BRANCA QUE MUDA DE COR COM CSS */}
          <img 
            src="/logoLBranco.jpg" 
            alt="Logo"
            // O filtro 'invert(1)' torna a logo branca preta. 'dark:invert(0)' remove o filtro no modo escuro.
            className="w-full h-full object-contain invert dark:invert-0 transition-all duration-300"
          />
        </motion.div>
      </div>

      {/* EFEITO DE BRILHO */}
      <motion.div
        className="absolute inset-0 w-full h-full rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />
    </motion.div>
  );
};


export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground mt-2">Minha jornada e minha paixão por tecnologia.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Coluna Esquerda: LOGO INTERATIVA */}
            <div className="lg:col-span-1 flex justify-center items-center h-full">
              <InteractiveLogoDisplay />
            </div>

            {/* Coluna Direita: Abas de Conteúdo (sem alterações) */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="biografia" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-background border border-border p-1 h-auto">
                  <TabsTrigger value="biografia" className="py-2">Biografia</TabsTrigger>
                  <TabsTrigger value="trajetoria" className="py-2">Trajetória</TabsTrigger>
                </TabsList>

                <TabsContent value="biografia" className="mt-6 text-muted-foreground leading-relaxed px-1">
                  <p className="mb-4">
                    Olá! Sou Lucas Silva, um profissional apaixonado pela convergência entre tecnologia e criatividade. Com formação em andamento em <strong>Ciência da Computação</strong> e background técnico, meu objetivo é construir soluções digitais que não apenas funcionem de forma impecável, mas que também ofereçam uma experiência de usuário intuitiva e visualmente agradável.
                  </p>
                  <p>
                    Minha jornada como freelancer em design e edição de vídeo me deu uma perspectiva única sobre a importância da identidade visual. Agora, busco canalizar essa visão e meu conhecimento técnico para conseguir minha primeira oportunidade como <strong>DESENVOLVEDOR JÚNIOR</strong>, contribuindo para projetos inovadores e crescendo junto a uma equipe talentosa.
                  </p>
                  <a href="/curriculo-lucas.pdf" target="_blank" rel="noopener noreferrer">
                    <Button className="mt-6">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar Currículo
                    </Button>
                  </a>
                </TabsContent>

                <TabsContent value="trajetoria" className="mt-6 space-y-6 px-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full"><Briefcase className="w-5 h-5 text-primary" /></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Experiência Profissional</h4>
                      <p className="text-sm text-muted-foreground">Designer Gráfico nos tempos livres, Cinegrafista na TV Alfenas e Auxiliar de Fotografia, onde desenvolvi habilidades de design, edição e suporte técnico.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full"><GraduationCap className="w-5 h-5 text-primary" /></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Formação Acadêmica</h4>
                      <p className="text-sm text-muted-foreground">Bacharelado em Ciência da Computação (em andamento) e formação como Técnico em Informática pelo Senac MG.</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
