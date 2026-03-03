import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | Bafana Consulting Pty Ltd",
  description: "Explore our technology consulting services including integrated IT services, software development, data analytics, AI, and more.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}
