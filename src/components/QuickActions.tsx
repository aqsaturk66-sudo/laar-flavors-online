import { Compass, Phone, UtensilsCrossed, MessageCircle } from "lucide-react";

import { directionsHref, site, telHref, whatsappHref } from "@/data/site";
import { Link } from "@tanstack/react-router";

export function QuickActions() {
  return (
    <section aria-label="Quick actions" className="bg-charcoal-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-6 md:grid-cols-4 md:px-8">
        <a href={telHref(site.phones[0])} className="btn-base btn-primary">
          <Phone className="h-4 w-4" aria-hidden /> Order Now
        </a>
        <a href={whatsappHref} className="btn-base btn-outline-light">
          <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
        </a>
        <Link to="/menu" className="btn-base btn-outline-light">
          <UtensilsCrossed className="h-4 w-4" aria-hidden /> View Menu
        </Link>
        <a
          href={directionsHref}
          target="_blank"
          rel="noreferrer"
          className="btn-base btn-outline-light"
        >
          <Compass className="h-4 w-4" aria-hidden /> Directions
        </a>
      </div>
      <div className="border-t border-on-dark/10 px-5 pb-6 text-center text-xs tracking-wide text-on-dark-muted md:px-8">
        Call to place your order —{" "}
        {site.phones.map((p, i) => (
          <span key={p}>
            <a href={telHref(p)} className="font-semibold text-on-dark hover:text-primary">
              {p}
            </a>
            {i < site.phones.length - 1 ? " · " : ""}
          </span>
        ))}
      </div>
    </section>
  );
}
