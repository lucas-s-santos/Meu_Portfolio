"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Nome é obrigatório")
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage("Email é obrigatório")
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Email inválido")
      return false
    }
    if (!formData.message.trim()) {
      setErrorMessage("Mensagem é obrigatória")
      return false
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage("Mensagem deve ter pelo menos 10 caracteres")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage("")

    if (!validateForm()) {
      setStatus("error")
      return
    }

    setStatus("loading")

    try {
      // Enviar para uma API route que processa o email
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        // Limpar mensagem de sucesso após 5 segundos
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setErrorMessage("Erro ao enviar mensagem. Tente novamente.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Erro ao conectar ao servidor. Tente novamente.")
      console.error("Form submission error:", error)
    }
  }

  return (
    <Card className="border-0 bg-white dark:bg-gray-900">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-6 h-6 text-green-600" />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Envie uma Mensagem</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              disabled={status === "loading"}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu.email@exemplo.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              disabled={status === "loading"}
            />
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem aqui..."
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
              disabled={status === "loading"}
            />
          </div>

          {/* Mensagens de status */}
          {status === "error" && errorMessage && (
            <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          {status === "success" && (
            <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg text-sm">
              ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}

          {/* Botão de envio */}
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 font-semibold transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          Responderemos em até 24 horas
        </p>
      </CardContent>
    </Card>
  )
}
