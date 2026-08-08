import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { site, telHref } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-on-dark-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8 lg:gap-16">
        <div>
          <h2 className="font-display text-2xl text-on-dark">LAAR RESTAURANT</h2>
          <p className="mt-2 text-sm">{site.tagline}</p>
          <p className="text-sm text-gold">{site.secondaryIdentity}</p>
          <span className="rule-gold mt-6" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Desi flavors, BBQ, fast food and more — served in the heart of Badin.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.22em] text-on-dark uppercase">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/events", label: "Events" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.22em] text-on-dark uppercase">Contact</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span className="flex flex-col gap-1">
                {site.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="transition-colors hover:text-primary">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-primary"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-on-dark/10 px-5 py-6 text-center text-xs md:px-8">
        © 2026 Laar Restaurant &amp; Fast Food. All rights reserved.
      </div>
    </footer>
  );
}
