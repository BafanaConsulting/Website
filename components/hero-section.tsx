import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ConsultationDialog } from "@/components/consultation-dialog"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-digital-circuit-board-technology-pattern.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-20 text-center">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            Where Innovation Meets
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            We are a collection of specialized technology experts united by our deep tech knowledge, innovative mindset,
            and passion for leveraging cutting-edge solutions to drive business transformation.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button size="lg" className="group" asChild>
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <ConsultationDialog />
          </div>
        </div>
      </div>
    </section>
  )
}
