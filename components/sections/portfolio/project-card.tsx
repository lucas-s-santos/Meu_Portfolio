// src/components/sections/portfolio/project-card.tsx
"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string; // Opcional
}

export default function ProjectCard({ title, description, imageUrl, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-card rounded-lg overflow-hidden border border-border flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex items-center gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
