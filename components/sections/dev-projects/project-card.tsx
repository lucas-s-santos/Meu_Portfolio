// src/components/sections/dev-projects/project-card.tsx
"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import React from "react"

// A interface do Projeto continua a mesma
export interface Project {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  galleryImages?: string[];
}

// --- LIGHTBOX COM A NOVA CLASSE CSS PARA TAMANHO MÁXIMO ---
const ImageLightbox = ({ imageUrl, projectTitle, onClose }: { imageUrl: string | null; projectTitle: string; onClose: () => void }) => {
  if (!imageUrl) return null;

  return (
    <Dialog open={!!imageUrl} onOpenChange={(isOpen) => !isOpen && onClose()}>
      {/* A NOVA CLASSE 'image-lightbox-content' É APLICADA AQUI */}
      <DialogContent className="bg-card border-border image-lightbox-content">
        <DialogHeader>
          <DialogTitle>{projectTitle}</DialogTitle>
          <DialogDescription>Imagem da galeria do projeto</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center p-4">
          {/* A imagem agora pode ocupar até 80% da altura da tela */}
          <img src={imageUrl} alt={`Imagem ampliada do projeto ${projectTitle}`} className="max-w-full max-h-[80vh] object-contain rounded-md" />
        </div>
        <DialogFooter className="text-sm text-muted-foreground">
          Clique fora da imagem ou pressione ESC para fechar
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Componente de vídeo inteligente (sem alterações)
const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const isLocalVideo = videoUrl.startsWith('/');
  if (isLocalVideo) {
    return (
      <video controls preload="metadata" className="w-full h-full rounded-lg bg-black object-cover">
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    );
  }
  return (
    <iframe width="100%" height="100%" src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
  );
};

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [glarePosition, setGlarePosition] = React.useState({ x: -100, y: -100 });
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setGlarePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setGlarePosition({ x: -100, y: -100 });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {/* O CARD DE GATILHO CONTINUA O MESMO */}
          <motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative rounded-xl overflow-hidden flex flex-col cursor-pointer group border border-white/10" whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <div className="absolute inset-0 bg-secondary/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-secondary/60"></div>
            <div className="absolute inset-[-100%] pointer-events-none transition-all duration-300 group-hover:inset-0" style={{ background: `radial-gradient(350px circle at ${glarePosition.x}px ${glarePosition.y}px, hsla(var(--primary), 0.2), transparent 40%)` }} />
            <div className="relative flex flex-col h-full">
              <div className="relative overflow-hidden h-48"><img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <div className="p-6 flex flex-col flex-grow bg-card/20">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">{project.tags.slice(0, 4).map((tag) => (<Badge key={tag} variant="default" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{tag}</Badge>))}</div>
              </div>
            </div>
          </motion.div>
        </DialogTrigger>

        {/* O MODAL DE PROJETO CONTINUA O MESMO */}
        <DialogContent className="sm:max-w-3xl bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>
          <div className="max-h-[70vh] overflow-y-auto pr-4 space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden border bg-muted">{project.videoUrl ? (<VideoPlayer videoUrl={project.videoUrl} />) : (<img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />)}</div>
            <div className="text-sm text-muted-foreground"><p>{project.longDescription}</p></div>
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div>
                <h4 className="text-md font-semibold text-foreground mb-3">Galeria</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, index) => (
                    <button key={index} onClick={() => setLightboxImage(img)} className="block border rounded-md overflow-hidden hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary">
                      <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="aspect-video w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="pt-4 border-t flex items-center gap-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Button variant="outline"><Github className="w-4 h-4 mr-2" />GitHub</Button></a>
            {project.liveUrl && (<a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><Button><ExternalLink className="w-4 h-4 mr-2" />Demonstração</Button></a>)}
          </div>
        </DialogContent>
      </Dialog>

      {/* --- RENDERIZA O LIGHTBOX COM A NOVA CLASSE --- */}
      <ImageLightbox 
        imageUrl={lightboxImage} 
        projectTitle={project.title} 
        onClose={() => setLightboxImage(null)} 
      />
    </>
  )
}
