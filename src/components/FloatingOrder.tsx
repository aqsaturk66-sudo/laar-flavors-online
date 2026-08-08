import { Phone } from "lucide-react";

import { site, telHref } from "@/data/site";

/** Mobile-only floating call-to-order button. */
export function FloatingOrder() {
  return (
    <a
      href={telHref(site.phones[0])}
      className="btn-base btn-primary fixed bottom-5 left-1/2 z-40 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 shadow-lift lg:hidden"
    >
      <Phone className="h-4 w-4" aria-hidden /> Order Now — {site.phones[0]}
    </a>
  );
}
