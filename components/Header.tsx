"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Renewables", href: "#renewables" },
  { label: "Partnership", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/90 text-forest-950 shadow-[0_1px_0_rgba(15,31,23,0.08)] backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-4 lg:h-24">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="PipeMedic UK home"
        >
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/10">
            <Image
              src="/images/logo.png"
              alt="PipeMedic UK logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight">
              PipeMedic
              <span className={solid ? "text-emerald-deep" : "text-moss"}>UK</span>
            </span>
            <span
              className={`mt-1.5 text-[9px] font-bold uppercase tracking-[0.24em] transition-colors ${
                solid ? "text-stone" : "text-white/60"
              }`}
            >
              Gas · Electrical · Plumbing
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                solid
                  ? "text-forest-950/70 hover:bg-forest-950/5 hover:text-forest-950"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:07830676674"
            className={`hidden items-center gap-2 text-sm font-semibold transition lg:flex ${
              solid ? "text-forest-950/70 hover:text-forest-950" : "text-white/75 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            07830676674
          </a>
          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
              solid
                ? "bg-forest-950 text-cream hover:bg-emerald-deep"
                : "bg-moss text-forest-950 hover:bg-white"
            }`}
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
            solid
              ? "border-forest-950/10 text-forest-950 hover:bg-forest-950/5"
              : "border-white/20 text-white hover:bg-white/10"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-forest-950/5 transition-all duration-300 lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="shell flex flex-col gap-1 py-5" aria-label="Mobile navigation">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-forest-950/80 transition hover:bg-forest-950/5 hover:text-forest-950"
            >
              {item.label}
              <ArrowUpRight className="h-4 w-4 text-stone" />
            </a>
          ))}
          <a
            href="tel:07830676674"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-forest-950 px-5 py-3.5 text-sm font-bold text-cream"
          >
            <Phone className="h-4 w-4" />
            Call 07830676674
          </a>
        </nav>
      </div>
    </header>
  );
}
