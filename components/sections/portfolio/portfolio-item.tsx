"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Palette } from "lucide-react"
import ImageModal from "./imagem-modal"

interface PortfolioItemProps {
  id: number
  title: string
  category: string
  imageUrl?: string
}

export default function PortfolioItem({ id, title, category, imageUrl }: PortfolioItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewMore = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card className="border-0 bg-white dark:bg-gray-900 overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Palette className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-gray-400 text-sm">Imagem em breve</span>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{category}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleViewMore}
            className="w-full rounded-full border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/20 bg-transparent transition-all duration-200"
          >
            <Eye className="w-4 h-4 mr-2" />
            Ver Imagem
          </Button>
        </CardContent>
      </Card>

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={imageUrl}
        title={title}
        category={category}
      />
    </>
  )
}
