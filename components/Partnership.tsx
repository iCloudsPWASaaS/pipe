import Image from "next/image";
import Reveal from "./Reveal";

export default function Partnership() {
  return (
    <section id="partnership" className="bg-cream pb-24 sm:pb-28 lg:pb-32">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="h-px flex-1 bg-forest-950/10" />
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-stone">
              In Partnership With
            </p>
            <span className="h-px flex-1 bg-forest-950/10" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="group flex items-center gap-5 rounded-3xl border border-forest-950/10 bg-white p-4 pr-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card sm:gap-6 sm:p-5 sm:pr-8">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-forest-950 sm:h-20 sm:w-20">
                <Image
                  src="/images/partner.jpg"
                  alt="IGN Property Services logo"
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="font-display text-lg font-extrabold tracking-tight text-forest-950 sm:text-xl">
                  IGN Property Services
                </p>
                <p className="mt-1 text-sm font-medium text-stone">
                  Trusted property partners
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
