import { Handshake } from "lucide-react";
import Reveal from "./Reveal";

export default function Partnership() {
  return (
    <section id="partnership" className="bg-cream pb-24 sm:pb-28 lg:pb-32">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="h-px flex-1 bg-forest-950/10" />
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-stone">
              Working in partnership with
            </p>
            <span className="h-px flex-1 bg-forest-950/10" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="group flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-forest-950/10 bg-white p-7 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card sm:flex-row sm:gap-6 sm:p-8 sm:text-left">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-forest-950 text-cream">
                <Handshake className="h-9 w-9 text-moss" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-lg font-extrabold tracking-tight text-forest-950 sm:text-xl">
                  Kaizen All Trades
                </p>
                <p className="mt-1 text-sm font-medium text-stone">
                  Trading name of Zen KZ Ltd
                </p>
                <p className="mt-3 text-xs font-medium leading-relaxed text-stone">
                  Registered no.{" "}
                  <span className="font-bold text-forest-950/80">SC839658</span>
                  <br />
                  Registered Office: Suite 3, 75 Firhill Road, Glasgow,
                  Scotland, G20 7BA
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
