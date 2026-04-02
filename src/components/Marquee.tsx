const items = [
  "⭐ 4.6 Rating",
  "633 Google Reviews",
  "Authentic Ethiopian Cuisine",
  "100% Halal",
  "99 Montreal Rd · Vanier",
  "Vegan Options Available",
  "Order Pickup & Delivery",
  "Open Daily from 11am",
  "Best Ethiopian in Ottawa",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-4 bg-brand-green/20 border-y border-brand-gold/12">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 font-dm text-[0.72rem] text-brand-cream/50 uppercase tracking-[0.18em]"
          >
            {item}
            <span className="text-brand-gold/45 text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
