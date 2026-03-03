import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const values = [
  "Innovation and continuous learning",
  "Client-focused solutions",
  "Deep technical expertise",
  "Integrity and transparency",
  "Collaboration and empowerment",
  "Operational excellence",
  "Future-ready technologies",
]

export function AboutSection() {
  return (
    <section className="w-full bg-muted/50 py-20 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Innovating Tomorrow, Today
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                At Bafana Consulting, we believe that technology should empower businesses, not complicate them. Our
                team of specialized experts brings decades of combined experience across integrated IT services, software development and automation, IT advisory & strategy description, and managed services & support description.
              </p>
              <p className="text-pretty leading-relaxed">
                We partner with organizations of all sizes—from innovative startups to established enterprises—helping
                them navigate complex technological landscapes and emerge as leaders in their industries.
              </p>
              <p className="text-pretty leading-relaxed">
                Our approach combines cutting-edge technology with practical business sense, ensuring every solution we
                deliver drives real, measurable impact for your organization.
              </p>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-semibold">What Drives Us</h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-card-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
