import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { ConsultationDialog } from "@/components/consultation-dialog"

export function CTASection() {
  return (
    <section className="w-full bg-primary py-20 text-primary-foreground md:py-32">
      <div className="container">
        <Card className="border-0 bg-primary-foreground/10 backdrop-blur">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl">
                Let's discuss how our technology solutions can drive innovation and growth for your organization. Our
                team is ready to help you navigate the digital landscape.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                <ConsultationDialog
                  trigger={
                    <Button size="lg" variant="secondary" className="group">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Case Studies
                </Button>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 border-t border-primary-foreground/20 pt-8 sm:flex-row sm:gap-12">
                <a
                  href="mailto:info@bafanaconsulting.com"
                  className="flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@bafanaconsulting.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                  <Phone className="h-5 w-5" />
                  <span>+27 (0) 11 123 4567</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
