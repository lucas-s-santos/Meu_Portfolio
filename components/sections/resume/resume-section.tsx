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
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                onClick={() => window.open("/mnt/data/currículo-lucas.pdf", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar Currículo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
