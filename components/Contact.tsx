import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-forest-950 py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-grid-fade bg-[size:52px_52px] opacity-[0.14] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-emerald/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-moss/10 blur-[120px]" />

      <div className="shell relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-moss">
                <span className="h-px w-8 bg-moss/60" />
                Get in touch
              </p>
              <h2 className="mt-5 font-display text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl">
                Contact
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/65">
                Please get in touch, all inquiries are welcome.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5 lg:pt-24">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm sm:p-9">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                  Or Call Us On
                </p>
                <a
                  href="tel:07830676674"
                  className="mt-3 block font-display text-[2.1rem] font-extrabold tracking-[-0.03em] text-white transition hover:text-moss sm:text-[2.6rem]"
                >
                  07830676674
                </a>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
                  Speak directly with our team for domestic and commercial
                  enquiries across Scotland.
                </p>
              </div>

              <div className="mt-9 space-y-1 border-t border-white/10 pt-2">
                <a
                  href="mailto:info@pipemedicuk.com"
                  className="group flex items-center gap-4 border-b border-white/10 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-moss">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Email
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-white/85 transition group-hover:text-moss">
                      info@pipemedicuk.com
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-4 border-b border-white/10 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-moss">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Address
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold leading-relaxed text-white/85">
                      9 Royal Crescent, Glasgow, Scotland, G3 7SP
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white/5 p-4">
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
                  <p className="text-sm font-bold text-white">Gas Safe Registered</p>
                  <p className="mt-1 text-xs text-white/50">
                    Company number SC735678
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
