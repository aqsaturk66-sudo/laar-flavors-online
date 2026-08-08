import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Cake, Phone, Users } from "lucide-react";

import eventsImg from "@/assets/events.jpg";
import { Reveal } from "@/components/Reveal";
import { site, telHref, whatsappHref } from "@/data/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Occasions — Laar Restaurant, Badin" },
      {
        name: "description",
        content:
          "Host birthdays, family gatherings, parties, seminars and corporate events at Laar Restaurant & Fast Food, Gym Khana Badin.",
      },
      { property: "og:title", content: "Events & Occasions — Laar Restaurant, Badin" },
      {
        property: "og:description",
        content: "Made for every occasion — birthdays, gatherings, seminars and corporate events.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const occasions = [
  { icon: Cake, title: "Birthdays", text: "Host birthdays at the restaurant." },
  { icon: Users, title: "Parties & Family Gatherings", text: "Gathering available for family and friends." },
  { icon: Building2, title: "Seminars & Corporate Events", text: "Space for seminars and corporate events." },
];

function EventsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-charcoal">
        <img
          src={eventsImg}
          alt="Table set for a gathering at Laar Restaurant"
          width={1400}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
          <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">For All Occasions</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-on-dark sm:text-5xl lg:text-6xl">
            Made for Every Occasion
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-on-dark-muted">
            Host birthdays, family gatherings, parties, seminars and corporate events at Laar
            Restaurant.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-base btn-primary">
              Contact Us for Events
            </Link>
            <a href={whatsappHref} className="btn-base btn-outline-light">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <ul className="grid gap-6 md:grid-cols-3">
          {occasions.map((o, i) => (
            <Reveal as="li" key={o.title} delay={i * 100}>
              <div className="card-surface h-full p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10">
                  <o.icon className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <h2 className="mt-6 font-display text-xl leading-snug">{o.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="card-surface mt-14 grid gap-8 p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <p className="eyebrow">Plan your occasion</p>
            <h2 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
              Speak to our team about your event
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Call the restaurant or our management team to discuss dates and arrangements.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {site.phones.map((p) => (
              <a key={p} href={telHref(p)} className="btn-base btn-outline-dark">
                <Phone className="h-4 w-4" aria-hidden /> {p}
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
