import { createFileRoute } from "@tanstack/react-router";
import { Compass, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { directionsHref, mapEmbedSrc, site, telHref, whatsappHref } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Laar Restaurant, Badin" },
      {
        name: "description",
        content:
          "Contact Laar Restaurant & Fast Food, Gym Khana Badin — Pir Luari Road near Shaheed Benazir Bhutto Chowk, Badin. Phone numbers, email and directions.",
      },
      { property: "og:title", content: "Contact & Location — Laar Restaurant, Badin" },
      {
        property: "og:description",
        content: "Find Laar Restaurant & Fast Food on Pir Luari Road, Badin. Call to place your order.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
          <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">Contact</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-on-dark sm:text-5xl lg:text-6xl">
            Visit or Call Us
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-on-dark-muted sm:text-base">
            Call to place your order, or come and dine with us in Badin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl">
              {site.name}
              <span className="mt-1 block text-base font-normal text-primary">
                {site.secondaryIdentity}
              </span>
            </h2>
            <span className="rule-gold mt-5" />

            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="leading-relaxed">{site.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="flex flex-col gap-1.5">
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={telHref(p)}
                      className="font-semibold transition-colors hover:text-primary"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all font-semibold transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={telHref(site.phones[0])} className="btn-base btn-primary">
                <Phone className="h-4 w-4" aria-hidden /> Call to place your order
              </a>
              <a href={whatsappHref} className="btn-base btn-outline-dark">
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
                Management
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {site.management.map((m) => (
                  <li key={m.name} className="card-surface p-5">
                    <p className="font-display text-lg leading-snug">{m.name}</p>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">{m.role}</p>
                    <div className="mt-3 flex flex-col gap-1 text-sm">
                      {m.phones.map((p) => (
                        <a
                          key={p}
                          href={telHref(p)}
                          className="font-semibold transition-colors hover:text-primary"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-surface overflow-hidden">
              <iframe
                title={`Map showing the area around ${site.name}, Badin`}
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 sm:h-[460px] lg:h-[560px]"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-5">
                <p className="min-w-0 text-sm text-muted-foreground">
                  Map location is approximate and can be updated once verified.
                </p>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-outline-dark"
                >
                  <Compass className="h-4 w-4" aria-hidden /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
