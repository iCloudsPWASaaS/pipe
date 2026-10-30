import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Planned Maintenance",
    description:
      "Our Professional Engineers will keep your home or business serviced consistently so you don’t have to worry about unexpected breakdowns.",
    image: "/images/planned-maintenance.jpg",
    alt: "Engineer carrying out planned maintenance",
    span: "md:col-span-7",
  },
  {
    title: "Reactive Maintenance",
    description:
      "When unexpected repairs arise, our team is equipped to deal with urgent requests.",
    image: "/images/reactive-maintenance.jpg",
    alt: "Reactive maintenance on a plumbing system",
    span: "md:col-span-5",
  },
  {
    title: "Out of Hours Service",
    description:
      "Get Professional Out of Hour Services for your property, as our experienced staff are available around the clock.",
    image: "/images/out-of-hours.jpg",
    alt: "Out of hours emergency plumbing service",
    span: "md:col-span-5",
  },
  {
    title: "Project Managed Services",
    subtitle: "for larger renovations",
    description: "Get professional services for large renovation projects.",
    image: "/images/project-managed.jpg",
    alt: "Project managed renovation work",
    span: "md:col-span-7",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="eyebrow text-emerald-deep">What we do</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.035em] text-forest-950 sm:text-5xl">
              Our Services
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-base leading-relaxed text-stone lg:pb-2">
              From routine servicing to urgent call-outs, we keep domestic and
              commercial properties running all year round.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              delay={index * 90}
              className={`group relative isolate min-h-[430px] overflow-hidden rounded-[2rem] bg-forest-950 sm:min-h-[460px] ${service.span}`}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/45 to-transparent" />
              <div className="absolute inset-0 bg-forest-950/10" />

              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 sm:p-7">
                <span className="rounded-full border border-white/20 bg-forest-950/35 px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-white/70 backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {service.title}
                  {service.subtitle ? (
                    <span className="mt-1.5 block text-sm font-semibold uppercase tracking-[0.16em] text-moss">
                      {service.subtitle}
                    </span>
                  ) : null}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 sm:text-[15px]">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
