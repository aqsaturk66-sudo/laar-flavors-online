import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import interiorImg from "@/assets/interior.jpg";
import bbqImg from "@/assets/bbq.jpg";
import sweetsImg from "@/assets/sweets.jpg";
import fishImg from "@/assets/fish.jpg";
import { Reveal } from "@/components/Reveal";
import { cuisineList } from "@/data/menu";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Laar Restaurant & Fast Food, Gym Khana Badin" },
      {
        name: "description",
        content:
          "About Laar Restaurant & Fast Food at Gym Khana Badin — a family restaurant in Badin serving desi food, BBQ, biryani, Chinese, fish, tandoor, pizza and fast food.",
      },
      { property: "og:title", content: "About — Laar Restaurant & Fast Food" },
      {
        property: "og:description",
        content: "A family restaurant in Badin serving desi food, BBQ, Chinese, pizza and fast food.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
          <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">About Us</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-on-dark sm:text-5xl lg:text-6xl">
            Welcome to Laar Restaurant
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-on-dark-muted sm:text-base">
            {site.tagline} · {site.secondaryIdentity}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={interiorImg}
                alt="Interior seating at Laar Restaurant, Badin"
                width={1200}
                height={1408}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">Our Restaurant</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              One kitchen, a very broad menu
            </h2>
            <span className="rule-gold mt-6" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Laar Restaurant &amp; Fast Food is located on Pir Luar Road, near Shaheed Benazir
              Bhutto Chowk in Badin, and is also known locally as Gym Khana Badin.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The menu covers desi cooking — karahi, handi, qorma and nihari — alongside biryani and
              pulao, Chinese dishes, fish, mix vegetable and daal, fresh tandoor breads, barbecue,
              and a full fast food selection of pizza, burgers, broast, sandwiches, rolls and fries.
              Sweets, tea, coffee and cold drinks round off the table.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The restaurant also caters to occasions — birthdays, family gatherings, parties,
              seminars and corporate events.
            </p>

            <h3 className="mt-10 text-xs font-bold tracking-[0.22em] text-primary uppercase">
              What we serve
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-3">
              {cuisineList.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/menu" className="btn-base btn-primary">
                Explore Menu <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/contact" className="btn-base btn-outline-dark">
                Visit Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-3 md:px-8">
          {[
            { img: bbqImg, title: "Charcoal Bar B.Q", text: "Boti, kababs and tikka from the grill." },
            { img: fishImg, title: "Fish", text: "Fish curry, fish fry and steam fish." },
            { img: sweetsImg, title: "Sweets", text: "Kheer mix, lab-e-shireen, fruit custard and more." },
          ].map((card, i) => (
            <Reveal as="article" key={card.title} delay={i * 100}>
              <div className="card-surface group h-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
