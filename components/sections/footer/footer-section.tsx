import { Mail, Phone, Linkedin, Instagram, Github } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lucas Silva dos Santos</h3>
          <p className="text-gray-600 dark:text-gray-400">Programador & Designer | Alfenas/MG</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:lucassilvadossantos2005@gmail.com"
            className="text-gray-400 hover:text-green-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:+5535988862172" className="text-gray-400 hover:text-green-600 transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/lucas-silva-dos-santos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/lucartes.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/lucas-s-santos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">© 2024 Lucas Silva dos Santos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
