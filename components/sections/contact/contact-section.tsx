// src/components/sections/contact/contact-section.tsx
"use client" // Adicionado para garantir compatibilidade com hooks e eventos

// 1. Importações: Phone foi removido e FaWhatsapp foi adicionada
import { Mail, Linkedin, Instagram, Github } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import ContactCard from "./contact-card"
import ContactForm from "./contact-form"

export default function ContactSection() {
  const contactItems = [
    {
      title: "Email",
      value: "lucassilvadosantos2005@gmail.com",
      link: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVJJwMZwNNwKjpqNGjVgQPcgHSnQwRhDBbGfvhWNDMTdddrMQBxBLmLHFqPSSHNwVBltMQ",
      icon: Mail,
    },
    {
      // 2. O título foi atualizado para refletir o novo ícone
      title: "WhatsApp",
      value: "(35 ) 9 8886-2172",
      link: "http://wa.me/5535988862172",
      // 3. O ícone foi trocado de 'Phone' para 'FaWhatsapp'
      icon: FaWhatsapp,
    },
    {
      title: "LinkedIn",
      value: "Lucas Silva",
      link: "https://www.linkedin.com/in/lucas-silva-dos-santos-31026726a/",
      icon: Linkedin,
    },
    {
      title: "Instagram",
      value: "@lucartes.design",
      link: "https://www.instagram.com/lucartes.design/",
      icon: Instagram,
    },
    {
      title: "GitHub",
      value: "lucas-s-santos",
      link: "https://github.com/lucas-s-santos",
      icon: Github,
    },
  ]

  return (
    <section id="contato" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contato</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Entre em contato para projetos, colaborações ou oportunidades!
          </p>
        </div>

        {/* Grid com formulário e cards de contato */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário à esquerda */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Cards de contato à direita */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Redes Sociais</h3>
            <div className="space-y-3">
              {contactItems.map((item, index) => (
                <ContactCard key={index} title={item.title} value={item.value} link={item.link} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
