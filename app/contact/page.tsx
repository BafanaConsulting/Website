import type { Metadata } from "next"
import { Header } from "@/components/header"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Bafana Consulting Pty Ltd",
  description: "Get in touch with Bafana Consulting to discuss how our technology solutions can transform your business.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
