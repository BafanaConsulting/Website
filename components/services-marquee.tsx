"use client"

import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Integrated IT Services",
    image: "/images/service-it.jpg",
  },
  {
    title: "Software Development & Automation",
    image: "/images/service-software.jpg",
  },
  {
    title: "Data Analytics & AI",
    image: "/images/service-data.jpg",
  },
  {
    title: "IT Advisory & Strategy",
    image: "/images/service-advisory.jpg",
  },
  {
    title: "Managed Services & Support",
    image: "/images/service-managed.jpg",
  },
]

export function ServicesMarquee() {
  const doubledServices = [...services, ...services]

  return (
    <section className="w-full overflow-hidden border-y border-border bg-muted/30 py-12 md:py-16">
      <div className="container mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
          Our Services
        </h2>
        <p className="mt-2 text-muted-foreground">
          Explore what we offer
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent md:w-40" />

        <div className="flex animate-marquee gap-6">
          {doubledServices.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className="group relative flex-shrink-0 overflow-hidden rounded-xl"
            >
              <div className="relative h-56 w-80 overflow-hidden md:h-64 md:w-96">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {service.title}
                  </h3>
                  <span className="mt-1 inline-block text-sm text-primary-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
