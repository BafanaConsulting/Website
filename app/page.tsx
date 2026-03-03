import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { AboutSection } from "@/components/about-section"
import { ApproachSection } from "@/components/approach-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <MissionVisionSection />
        <AboutSection />
        <ApproachSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
