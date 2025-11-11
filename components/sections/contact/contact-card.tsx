import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ContactCardProps {
  title: string
  value: string
  link: string
  icon: LucideIcon | any
}

export default function ContactCard({ title, value, link, icon: Icon }: ContactCardProps) {
  return (
    <Card className="border-0 bg-white dark:bg-gray-900 text-center">
      <CardContent className="p-6">
        <Icon className="w-8 h-8 mx-auto mb-4 text-green-600" />
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white text-sm">{title}</h3>
        <a
          href={link}
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-green-600 hover:text-green-700 text-xs break-all"
        >
          {value}
        </a>
      </CardContent>
    </Card>
  )
}
