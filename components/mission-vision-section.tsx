import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Lightbulb } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section id="mission-vision" className="w-full py-20 md:py-32">
      <div className="container">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Our Purpose & Direction
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Guided by our mission and vision, we drive innovation and transformation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-2 border-accent/20 bg-background transition-all hover:border-accent/40">
            <CardContent className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                To deliver transformative technology solutions that simplify operations, enhance decision-making, and accelerate digital growth for businesses across South Africa and beyond..
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-background transition-all hover:border-primary/40">
            <CardContent className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                To empower African enterprises with intelligent, data-driven, and future-ready technology solutions that compete globally.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 bg-background transition-all hover:border-accent/40">
            <CardContent className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold">Our Objective</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                To establish a credible footprint in South Africa through strategic partnerships, tender participation, and direct client engagements, while building capacity to expand into the Middle East and Africa (MEA) region within three years.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
