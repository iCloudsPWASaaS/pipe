import { Leaf, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function Renewables() {
  return (
    <section id="renewables" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-forest-950 px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-grid-fade bg-[size:46px_46px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-emerald/25 blur-[110px]" />
            <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-moss/10 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-moss/25 bg-moss/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-moss">
                  <Sparkles className="h-3.5 w-3.5" />
                  Coming soon
                </span>
                <h2 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
                  Heatpumps and Renewables
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
                  We will soon be launching our MCS-accredited services
                  alongside other renewable technologies very soon.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["MCS-accredited", "Heatpumps", "Renewable technologies"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur">
                  <div className="absolute inset-4 rounded-full border border-dashed border-white/15" />
                  <Leaf className="h-16 w-16 text-moss" strokeWidth={1.25} />
                  <span className="absolute -bottom-2 rounded-full bg-moss px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-forest-950">
                    MCS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
