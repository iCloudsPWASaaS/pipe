import Image from "next/image";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
} from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Renewables", href: "#renewables" },
  { label: "Partnership", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      <div className="absolute inset-0 bg-grid-fade bg-[size:52px_52px] opacity-[0.12] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="shell relative z-10">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-3" aria-label="PipeMedic UK home">
              <span className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15">
                <Image
                  src="/images/logo.png"
                  alt="PipeMedic UK logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight">
                Pipe Medic <span className="text-moss">UK</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              We offer Commercial and Domestic Heating, Plumbing and electrical
              services all over Scotland. Based in Glasgow.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs font-medium text-white/45">
              <p>
                Company number:{" "}
                <span className="font-bold text-white/75">SC735678</span>
              </p>
              <p>Registered in Scotland</p>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/65 transition hover:text-moss"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
              Get in touch
            </p>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:info@pipemedicuk.com"
                  className="group flex items-center gap-3 text-sm font-medium text-white/65 transition hover:text-moss"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-moss">
                    <Mail className="h-4 w-4" />
                  </span>
                  info@pipemedicuk.com
                </a>
              </li>
              <li>
                <a
                  href="tel:07830676674"
                  className="group flex items-center gap-3 text-sm font-medium text-white/65 transition hover:text-moss"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-moss">
                    <Phone className="h-4 w-4" />
                  </span>
                  (+44) 07830676674
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium leading-relaxed text-white/65">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-moss">
                  <MapPin className="h-4 w-4" />
                </span>
                9 Royal Crescent, Glasgow, Scotland, G3 7SP
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-white/40">
            © 2024 PipeMedicUK All rights reserved
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PipeMedic UK on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-moss/40 hover:text-moss"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PipeMedic UK on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-moss/40 hover:text-moss"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PipeMedic UK on TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-moss/40 hover:text-moss"
            >
              <Music2 className="h-4 w-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-moss text-forest-950 transition hover:bg-white"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
