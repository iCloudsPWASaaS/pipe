import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";

const accreditations = [
  {
    name: "Gas Safe Register",
    detail: "Registration 923324",
    href: "https://www.gassaferegister.co.uk",
    logo: "/images/badges.png",
    width: 860,
    height: 940,
    logoClass: "h-16 w-16 rounded-lg",
    unoptimized: false,
  },
  {
    name: "MCS Certified",
    detail: "Certification IAA-10192",
    href: "https://mcscertified.com/",
    logo: "/images/accred-mcs.svg",
    width: 80,
    height: 80,
    logoClass: "h-14 w-14 rounded-md",
    unoptimized: true,
  },
  {
    name: "Installation Assurance Authority",
    detail: "IAA certified installer",
    href: "https://www.theiaa.co.uk/micro-generation-certification-scheme/",
    logo: "/images/accred-iaa.png",
    width: 1350,
    height: 520,
    logoClass: "h-12 w-auto",
    unoptimized: false,
  },
  {
    name: "NICEIC Approved Contractor",
    detail: "Approved electrical contractor",
    href: "https://niceic.com",
    logo: "/images/accred-niceic.svg",
    width: 740,
    height: 160,
    logoClass: "h-9 w-auto",
    unoptimized: true,
  },
  {
    name: "Heat Geek",
    detail: "Certified heat pump installer",
    href: "https://www.heatgeek.com",
    logo: "/images/accred-heatgeek.svg",
    width: 153,
    height: 64,
    logoClass: "h-11 w-auto",
    unoptimized: true,
  },
];

export default function Accreditations() {
  return (
    <section id="accreditations" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="eyebrow text-emerald-deep">Certified &amp; accredited</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.035em] text-forest-950 sm:text-5xl">
              Qualified, registered and trusted
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-base leading-relaxed text-stone lg:pb-2">
              Our work is backed by the UK&apos;s leading trade bodies, so you can
              have complete confidence in every installation and service.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {accreditations.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-forest-950/10 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-card"
              >
                <div className="flex h-20 items-center justify-start">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={item.width}
                    height={item.height}
                    unoptimized={item.unoptimized}
                    className={`${item.logoClass} object-contain`}
                  />
                </div>
                <div className="mt-auto flex items-start justify-between gap-3 border-t border-forest-950/10 pt-4">
                  <div>
                    <p className="font-display text-sm font-extrabold leading-snug text-forest-950">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-stone">
                      {item.detail}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-stone/50 transition group-hover:text-emerald" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-emerald/15 bg-emerald/5 px-5 py-4 text-sm font-semibold text-forest-950 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-emerald-deep" />
              Gas Safe Registration: 923324
            </p>
            <p className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-emerald-deep" />
              MCS Certification: IAA-10192
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
