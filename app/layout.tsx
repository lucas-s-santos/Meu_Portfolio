import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lucas Silva dos Santos - Portfólio",
  description:
    "Programador e Designer Freelancer especializado em soluções criativas e funcionais. Estudante de Ciência da Computação.",
  keywords:
    "programador, designer, freelancer, ciência da computação, desenvolvimento web, design gráfico, videomaker, fotógrafo",
  authors: [{ name: "Lucas Silva dos Santos" }],
  openGraph: {
    title: "Lucas Silva dos Santos - Portfólio",
    description: "Programador e Designer Freelancer especializado em soluções criativas e funcionais.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
