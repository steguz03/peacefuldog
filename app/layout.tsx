import type React from "react"
import type { Metadata, Viewport } from "next"
import { Anton, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PEACEFUL DOG — $PDOG",
  description:
    "He bought Dogecoin in 2014. He forgot about it. Then Dogecoin found him again. The story of $PDOG, the most peaceful dog ever.",
  icons: {
    icon: "/pdog/logo-pdog.png",
    apple: "/pdog/logo-pdog.png",
  },
  openGraph: {
    title: "PEACEFUL DOG — $PDOG",
    description:
      "He bought Dogecoin in 2014. He forgot about it. Then Dogecoin found him again.",
    images: ["/pdog/logo-pdog.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PEACEFUL DOG — $PDOG",
    description: "The most peaceful dog ever.",
    images: ["/pdog/logo-pdog.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#0d0c0b",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
