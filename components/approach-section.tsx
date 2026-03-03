import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your business, challenges, and goals through comprehensive analysis and stakeholder engagement.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our experts craft a tailored roadmap that aligns technology solutions with your business objectives and growth targets.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We execute with precision, leveraging agile methodologies and best practices to deliver solutions on time and within scope.",
  },
  {
    number: "04",
    title: "Optimization & Support",
    description:
      "Post-launch, we provide ongoing support, monitoring, and optimization to ensure sustained success and continuous improvement.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="w-full py-20 md:py-32">
      <div className="container space-y-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            A Strategic Approach to Digital Excellence
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Our proven methodology ensures successful outcomes through structured planning, expert execution, and
            continuous refinement.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8">
                <div className="hidden md:flex md:w-16 md:items-start md:justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-xl font-bold text-primary">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 space-y-2 pb-8 pt-2">
                  <div className="flex items-center gap-4 md:hidden">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-lg font-bold text-primary">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <h3 className="hidden text-2xl font-semibold md:block">{step.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-xl">
          <Image
            src="/professional-technology-consulting-team-collaborat.jpg"
            alt="Team collaboration"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
