import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cloud, Lock, Database, Cpu, LineChart } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Integrated IT services",
    description:
      "Deliver integrated IT services across industries to streamline operations, enhance efficiency, and drive digital transformation through seamless technology integration, innovative solutions, and end-to-end support.",
  },
  {
    icon: Cloud,
    title: "Software Development & Automation",
    description:
      "Build and automate intelligent software solutions that streamline operations, eliminate manual processes, and accelerate innovation by leveraging advanced technologies, agile development, and data-driven automation",
  },
  {
    icon: LineChart,
    title: "Data Analytics & AI",
    description:
      "Leverage the power of data analytics and artificial intelligence to uncover insights, predict trends, and drive smarter decision-making. By combining advanced analytics, machine learning, and automation, we transform raw data into actionable intelligence that fuels innovation, efficiency, and business growth.",
  },
  {
    icon: Lock,
    title: "IT Advisory & Strategy description",
    description:
      "Provide expert IT advisory and strategic guidance to align technology with business goals, optimize IT investments, and drive digital transformation. By leveraging industry insights, emerging technologies, and best practices, we help organizations plan, implement, and manage IT initiatives that enhance efficiency, mitigate risks, and deliver sustainable growth.",
  },
  {
    icon: Cpu,
    title: "Managed Services & Support description",
    description:
      "Deliver comprehensive managed IT services and support that ensure seamless operations, minimize downtime, and maximize system performance. By proactively monitoring, maintaining, and optimizing IT environments, we provide reliable, scalable, and secure solutions that allow businesses to focus on growth while we handle their technology needs.",
  },
 /* {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics, business intelligence, and predictive modeling solutions.",
  },*/
]

export function ServicesSection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container space-y-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Our Technology Services
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Our collection of tech services spans various needs at every stage of the digital transformation process.
            Explore how we help businesses evolve.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
