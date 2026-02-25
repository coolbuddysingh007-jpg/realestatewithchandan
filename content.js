"use client";
import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const NAV = [
  { label: "HOME", href: "/" },
  { label: "PROPERTIES", href: "/properties" },
  { label: "QUICK SEARCH", href: "/quick-search" },
  { label: "BUYING", href: "/buying" },
  { label: "SELLING", href: "/selling" },
  { label: "MARKET UPDATE", href: "/market-update/surrey" },
  { label: "BLOG", href: "/blog" },
  { label: "COMMUNITIES", href: "/communities" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function SiteHeader(){
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="/" className="group">
          <div className="text-lg md:text-xl font-display tracking-[0.22em]">
            <span className="text-white">CHANDAN</span>{" "}
            <span className="text-champagne-400">RATHOD</span>
          </div>
          <div className="text-[11px] tracking-[0.4em] text-white/60 group-hover:text-white/80 transition">
            REAL ESTATE ADVISOR
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-xs tracking-[0.22em] text-white/75 hover:text-white transition">
              {n.label}
            </a>
          ))}
          <Button href="#book" className="ml-3">BOOK CONSULTATION</Button>
        </nav>

        <button
          className="lg:hidden rounded-full border border-white/15 px-4 py-2 text-xs tracking-[0.22em] text-white/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          MENU
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <Container className="py-4">
            <div className="grid gap-3">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-white/85" onClick={()=>setOpen(false)}>
                  {n.label}
                </a>
              ))}
              <div className="pt-2">
                <Button href="#book" className="w-full">BOOK CONSULTATION</Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
