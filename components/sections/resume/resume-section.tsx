"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export default function ResumeSection() {
  return (
    <section id="curriculo" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Currículo</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Baixe meu currículo completo para conhecer minha experiência profissional
          </p>
        </div>
        <div className="text-center">
          <Card className="inline-block border-0 bg-white dark:bg-gray-900">
            <CardContent className="p-12">
              <FileText className="w-16 h-16 mx-auto mb-6 text-green-600" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Currículo Profissional</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                Documento completo com experiência profissional, formação acadêmica e habilidades técnicas
              </p>
              <a 
                  href="https://drive.google.com/file/d/1Epav02CDg2gsWuYAzlZs6i20uNjpqEIv/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#225a42] hover:bg-[#44cf7a] text-white rounded-full transition-all duration-300 shadow-md"
                >
                  <Download className="mr-2 h-5 w-5" /> Baixar Currículo
                </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
