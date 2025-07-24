import { Mail, Phone, Linkedin, Instagram, Github } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lucas Silva dos Santos</h3>
          <p className="text-gray-600 dark:text-gray-400">Programador & Designer | Alfenas/MG</p>
        </div>
        <p className="text-gray-500 text-sm">© 2025 Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
