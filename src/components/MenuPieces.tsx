import { formatPrice, type MenuCategory } from "@/data/menu";

export function MenuItemRow({
  name,
  price,
  unit,
  available = true,
}: {
  name: string;
  price: number | null;
  unit?: string;
  available?: boolean;
}) {
  return (
    <li className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border/70 py-4 last:border-0">
      <div className="min-w-0">
        <h4 className="font-display text-lg leading-snug text-foreground transition-colors group-hover:text-primary">
          {name}
        </h4>
        {(unit || !available) && (
          <p className="mt-1 text-xs tracking-wide text-muted-foreground">
            {unit}
            {!available && (unit ? " • " : "") + "Currently unavailable"}
          </p>
        )}
      </div>
      <span
        className={
          price === null
            ? "max-w-[9.5rem] text-right text-xs leading-snug text-muted-foreground"
            : "price-tag text-lg"
        }
      >
        {formatPrice(price)}
      </span>
    </li>
  );
}

export function CategoryPanel({ category }: { category: MenuCategory }) {
  return (
    <div>
      {category.priceTable && (
        <div className="card-surface mb-8 overflow-hidden">
          <div className="border-b border-border bg-secondary px-5 py-3 text-xs font-bold tracking-[0.2em] uppercase">
            Pizza Sizes — same price for every flavour
          </div>
          <div className="grid grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x">
            {category.priceTable.map((row) => (
              <div key={row.label} className="px-5 py-5 text-center">
                <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {row.label}
                </p>
                <p className="price-tag mt-2 text-xl">{formatPrice(row.price)}</p>
              </div>
            ))}
          </div>
          {category.extras?.length ? (
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 py-3 text-sm">
              {category.extras.map((extra) => (
                <span key={extra.name} className="flex w-full justify-between gap-4">
                  <span className="text-muted-foreground">{extra.name}</span>
                  <span className="price-tag">{formatPrice(extra.price)}</span>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-14">
        {category.groups.map((group, i) => (
          <div key={group.label ?? i} className={category.groups.length === 1 ? "lg:col-span-2" : ""}>
            {group.label && (
              <h3 className="mb-2 text-xs font-bold tracking-[0.22em] text-primary uppercase">
                {group.label}
              </h3>
            )}
            <ul className={category.groups.length === 1 ? "lg:columns-2 lg:gap-14" : ""}>
              {group.items.map((item) => (
                <MenuItemRow key={item.name} {...item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
