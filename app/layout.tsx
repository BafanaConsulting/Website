import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ChatWidget } from "@/components/chat-widget"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bafana Consulting Pty Ltd | Innovating Tomorrow",
  description:
    "Leading technology consulting firm specializing in blockchain, AI, cloud computing, and digital innovation solutions.",
  generator: "v0.app",
  metadataBase: new URL("https://www.bafanaconsulting.co.za"),
  verification: {
    google: "HAG_QC0zp8NhiwSPjG1xoN7lIFa3F2_ZdhYBFMq51so",
  },
  openGraph: {
    title: "Bafana Consulting Pty Ltd | Innovating Tomorrow",
    description: "Leading technology consulting firm specializing in blockchain, AI, cloud computing, and digital innovation solutions.",
    url: "https://www.bafanaconsulting.co.za",
    siteName: "Bafana Consulting",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Bafana Consulting Logo",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bafana Consulting Pty Ltd | Innovating Tomorrow",
    description: "Leading technology consulting firm specializing in blockchain, AI, cloud computing, and digital innovation solutions.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
