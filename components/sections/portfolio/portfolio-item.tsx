import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface PortfolioItemProps {
  id: number
  title: string
  category: string
  imageUrl?: string
}

export default function PortfolioItem({ id, title, category, imageUrl }: PortfolioItemProps) {
  return (
    <Card className="border-0 bg-white dark:bg-gray-900 overflow-hidden group">
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-gray-400 text-sm">Imagem não disponível</span>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{category}</p>
        <Button
          variant="outline"
          size="sm"
          className="w-full rounded-full border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/20 bg-transparent"
        >
          <Eye className="w-4 h-4 mr-2" />
          Ver mais
        </Button>
      </CardContent>
    </Card>
  )
}
