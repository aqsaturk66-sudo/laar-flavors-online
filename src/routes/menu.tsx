import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useState } from "react";

import { CategoryPanel } from "@/components/MenuPieces";
import { Reveal } from "@/components/Reveal";
import { menu } from "@/data/menu";
import { site, telHref, whatsappHref } from "@/data/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Prices — Laar Restaurant & Fast Food, Badin" },
      {
        name: "description",
        content:
          "Full menu and prices at Laar Restaurant & Fast Food, Badin: desi karahi and handi, biryani, Chinese, fish, tandoor, BBQ, pizza, burgers, sandwiches, rolls, fries, sweets and drinks.",
      },
      { property: "og:title", content: "Menu & Prices — Laar Restaurant & Fast Food, Badin" },
      {
        property: "og:description",
        content: "Browse the full Laar Restaurant menu by category, with prices in PKR.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <>
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 md:px-8 lg:pt-24">
          <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">Our Menu</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-on-dark sm:text-5xl lg:text-6xl">
            Everything We Serve
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-on-dark-muted sm:text-base">
            Prices in Pakistani Rupees. Choose a category to browse the menu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telHref(site.phones[0])} className="btn-base btn-primary">
              <Phone className="h-4 w-4" aria-hidden /> Call to place your order
            </a>
            <a href={whatsappHref} className="btn-base btn-outline-light">
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Category navigation — horizontally scrollable on mobile */}
        <nav
          aria-label="Menu categories"
          className="sticky top-[68px] z-30 border-t border-on-dark/10 bg-charcoal/95 backdrop-blur-md"
        >
          <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 md:px-8">
            {menu.map((c) => {
              const isActive = c.id === active.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  aria-current={isActive}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-bold tracking-[0.12em] uppercase transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lift"
                      : "border border-on-dark/20 text-on-dark-muted hover:border-on-dark/50 hover:text-on-dark"
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>
        </nav>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
        <Reveal key={active.id}>
          <header className="mb-10">
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">{active.name}</h2>
            <span className="rule-gold mt-5" />
          </header>
          <CategoryPanel category={active} />
        </Reveal>
      </section>
    </>
  );
}
