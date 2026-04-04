import { EthiopianBorder } from "./EthiopianBorder";

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

const sepColors = ["#DA291C", "#FCDD09", "#078930", "#D4A820"];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <EthiopianBorder id="hr-marquee-top" />
      <div className="py-3.5 bg-brand-dark border-y border-white/[0.05]">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-6 font-dm text-[0.7rem] text-brand-cream/65 uppercase tracking-[0.18em]"
            >
              {item}
              <span
                className="text-sm font-bold"
                style={{ color: sepColors[i % sepColors.length] }}
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
      <EthiopianBorder id="hr-marquee-bot" flip />
    </div>
  );
}
