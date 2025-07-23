import { Mail, Phone, Linkedin, Instagram, Github } from "lucide-react"
import ContactCard from "./contact-card"

export default function ContactSection() {
  const contactItems = [
    {
      title: "Email",
      value: "lucassilvadossantos2005@gmail.com",
      link: "mailto:lucassilvadossantos2005@gmail.com",
      icon: Mail,
    },
    {
      title: "Telefone",
      value: "(35) 9 8886-2172",
      link: "tel:+5535988862172",
      icon: Phone,
    },
    {
      title: "LinkedIn",
      value: "Lucas Silva",
      link: "https://linkedin.com/in/lucas-silva-dos-santos",
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
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contato</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Entre em contato para projetos, colaborações ou oportunidades
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {contactItems.map((item, index) => (
            <ContactCard key={index} title={item.title} value={item.value} link={item.link} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
