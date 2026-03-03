import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesMarquee } from "@/components/services-marquee"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesMarquee />
      </main>
      <Footer />
    </>
  )
}
