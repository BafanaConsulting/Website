import type { Metadata } from "next"
import { Header } from "@/components/header"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Mission & Vision | Bafana Consulting Pty Ltd",
  description: "Our mission, vision, and objectives that drive Bafana Consulting to innovate tomorrow.",
}

export default function MissionVisionPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MissionVisionSection />
      </main>
      <Footer />
    </>
  )
}
