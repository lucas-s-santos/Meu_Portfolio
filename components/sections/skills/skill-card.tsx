import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  name: string
  description: string
  icon: LucideIcon
}

export default function SkillCard({ name, description, icon: Icon }: SkillCardProps) {
  return (
    <Card className="border-0 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
      <CardContent className="p-8 text-center">
        <Icon className="w-8 h-8 mx-auto mb-4 text-green-600" />
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
