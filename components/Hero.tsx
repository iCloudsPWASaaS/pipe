import Image from "next/image";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-950"
    >
      <Image
        src="/images/hero.jpg"
        alt="Wind turbines on green fields in Scotland"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_32%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/85 to-forest-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-forest-950/70" />
      <div className="absolute inset-0 bg-grid-fade bg-[size:44px_44px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="shell relative z-10 pb-16 pt-32 lg:pb-20 lg:pt-44">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-moss backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                Domestic &amp; Commercial
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 max-w-4xl font-display text-[2.9rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.35rem]">
                Offering Domestic and{" "}
                <span className="text-moss">Commercial</span> Solutions
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                We specialise in Gas, Electrical and Plumbing systems.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-moss px-7 py-4 text-sm font-bold text-forest-950 transition hover:bg-white"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:07830676674"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  07830676674
                </a>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-10 flex max-w-md items-center gap-4 border-t border-white/15 pt-7">
                <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/images/badges.png"
                    alt="Gas Safe Register"
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </span>
                <div>
                  <p className="flex items-center gap-1.5 text-sm font-bold text-white">
                    <ShieldCheck className="h-4 w-4 text-moss" />
                    Gas Safe Registered
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/55">
                    Registered in Scotland · Company number SC735678
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={420} className="lg:col-span-4">
            <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                  Need us now?
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-moss/15 text-moss">
                  <Phone className="h-4 w-4" />
                </span>
              </div>
              <a
                href="tel:07830676674"
                className="mt-4 block font-display text-2xl font-bold tracking-tight text-white transition hover:text-moss"
              >
                07830676674
              </a>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Or call us on — our experienced team is ready to help.
              </p>
              <div className="mt-5 h-px bg-white/10" />
              <p className="mt-5 flex items-start gap-2 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                Based in Glasgow, serving Scotland
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
