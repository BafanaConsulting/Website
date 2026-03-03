import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ApproachSection } from "@/components/approach-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Approach | Bafana Consulting Pty Ltd",
  description: "Our proven methodology for digital excellence: discovery, strategy, implementation, and ongoing optimization.",
}

export default function ApproachPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ApproachSection />
      </main>
      <Footer />
    </>
  )
}
