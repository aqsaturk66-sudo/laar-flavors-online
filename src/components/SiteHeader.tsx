import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { site, telHref } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-lift" : "bg-charcoal"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/50 bg-primary/15">
            <span className="font-display text-lg leading-none text-gold">L</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight text-on-dark md:text-xl">
              Laar Restaurant
            </span>
            <span className="block truncate text-[0.62rem] font-semibold tracking-[0.2em] text-on-dark-muted uppercase">
              {site.secondaryIdentity}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-semibold text-on-dark-muted transition-colors hover:text-on-dark"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <a href={telHref(site.phones[0])} className="btn-base btn-primary ml-3">
            <Phone className="h-4 w-4" aria-hidden /> Order Now
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-on-dark/25 text-on-dark lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <Menu className="hidden" /> : null}
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <div className="border-t border-on-dark/10 bg-charcoal lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-on-dark/10 py-4 font-display text-xl text-on-dark last:border-0"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={telHref(site.phones[0])}
              onClick={() => setOpen(false)}
              className="btn-base btn-primary my-4"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call to place your order
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
