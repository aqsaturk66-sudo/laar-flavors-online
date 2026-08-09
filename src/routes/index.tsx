import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, UtensilsCrossed } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import karahiImg from "@/assets/karahi.jpg";
import handiImg from "@/assets/handi.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import bbqImg from "@/assets/bbq.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import chineseImg from "@/assets/chinese.jpg";
import sandwichImg from "@/assets/sandwich.jpg";
import interiorImg from "@/assets/interior.jpg";
import eventsImg from "@/assets/events.jpg";

import { QuickActions } from "@/components/QuickActions";
import { Reveal } from "@/components/Reveal";
import { cuisineList, formatPrice } from "@/data/menu";
import { site, telHref } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laar Restaurant & Fast Food — Gym Khana Badin" },
      {
        name: "description",
        content:
          "Laar Restaurant & Fast Food, Gym Khana Badin. Desi food, BBQ, biryani, Chinese, fish, pizza, burgers and rolls in Badin, Sindh. Call to place your order.",
      },
      { property: "og:title", content: "Laar Restaurant & Fast Food — Gym Khana Badin" },
      {
        property: "og:description",
        content: "Good Food. Great Moments. Desi flavors, BBQ and fast food in the heart of Badin.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = [
  { name: "Chicken White Karahi", price: 2200, unit: "per kg", category: "Desi Food", image: karahiImg },
  { name: "Chicken Boneless Handi", price: 3000, unit: "per kg", category: "Desi Food", image: karahiImg },
  { name: "Bombay Biryani", price: 500, unit: "", category: "Biryani & Pulao", image: biryaniImg },
  { name: "Chicken Fried Rice", price: 500, unit: "", category: "Chinese", image: chineseImg },
  { name: "Malai Boti", price: 1500, unit: "", category: "Bar B.Q", image: bbqImg },
  { name: "Chicken Tikka Pizza", price: 450, unit: "from — small", category: "Pizza", image: pizzaImg },
  { name: "Zinger Burger", price: 400, unit: "", category: "Burger / Broast", image: burgerImg },
  { name: "Club Sandwich", price: 450, unit: "", category: "Sandwich", image: sandwichImg },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-charcoal">
        <img
          src={heroImg}
          alt="Chicken karahi with naan and grilled BBQ skewers served at Laar Restaurant"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/45" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8">
          <Reveal className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-gold uppercase">
              <MapPin className="h-4 w-4" aria-hidden /> {site.city}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-on-dark sm:text-6xl lg:text-7xl">
              Good Food.
              <br />
              Great Moments.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
              Desi flavors, BBQ, fast food and more — served in the heart of Badin.
            </p>
            <p className="mt-4 text-sm font-semibold tracking-wide text-on-dark/80">
              Desi Food · BBQ · Fast Food · Pizza · Chinese
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/menu" className="btn-base btn-primary">
                <UtensilsCrossed className="h-4 w-4" aria-hidden /> Explore Menu
              </Link>
              <a href={telHref(site.phones[0])} className="btn-base btn-outline-light">
                <Phone className="h-4 w-4" aria-hidden /> Order Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <QuickActions />

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">Welcome</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Welcome to Laar Restaurant
            </h2>
            <span className="rule-gold mt-6" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Laar Restaurant &amp; Fast Food is a family restaurant at Gym Khana Badin, serving a
              broad menu that brings desi cooking, barbecue and fast food together under one roof.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From karahi and handi by the kilo to biryani, fish, tandoor breads, pizza, burgers,
              rolls and sweets — there is something on the menu for every table, whether you are
              dining with family or ordering for a gathering.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {cuisineList.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold tracking-wide text-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/about" className="btn-base btn-outline-dark">
                More About Us <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="relative overflow-hidden rounded-2xl shadow-lift">
              <img
                src={interiorImg}
                alt="Dining area at Laar Restaurant with warm lighting and wooden tables"
                width={1200}
                height={1408}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FROM OUR KITCHEN */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">From Our Kitchen</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A taste of what we serve
            </h2>
            <span className="rule-gold mt-6" />
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, i) => (
              <Reveal as="li" key={item.name + item.category} delay={(i % 4) * 90}>
                <article className="card-surface group h-full overflow-hidden transition-shadow duration-300 hover:shadow-lift">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={900}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.65rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl leading-snug">{item.name}</h3>
                    <p className="mt-3 flex items-baseline gap-2">
                      <span className="price-tag text-lg">{formatPrice(item.price)}</span>
                      {item.unit && (
                        <span className="text-xs text-muted-foreground">{item.unit}</span>
                      )}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12 flex justify-center">
            <Link to="/menu" className="btn-base btn-primary">
              View Full Menu <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="relative isolate overflow-hidden bg-charcoal">
        <img
          src={eventsImg}
          alt="Long table set for a celebration at Laar Restaurant"
          width={1400}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
          <Reveal className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">For All Occasions</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-on-dark sm:text-4xl lg:text-5xl">
              Made for Every Occasion
            </h2>
            <p className="mt-6 text-base leading-relaxed text-on-dark-muted">
              Host birthdays, family gatherings, parties, seminars and corporate events at Laar
              Restaurant.
            </p>
            <div className="mt-9">
              <Link to="/events" className="btn-base btn-primary">
                Contact Us for Events <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-24">
        <Reveal className="card-surface grid gap-8 p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <p className="eyebrow">Ordering</p>
            <h2 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
              Call to place your order
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {site.address} — {site.city}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
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
