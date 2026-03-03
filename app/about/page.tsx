import type { Metadata } from "next"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Bafana Consulting Pty Ltd",
  description: "Learn about Bafana Consulting, our values, and what drives us to deliver transformative technology solutions.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
