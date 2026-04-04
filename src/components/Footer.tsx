import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Menu",    href: "#menu" },
  { label: "Buffet",  href: "#buffet" },
  { label: "Events",  href: "#events" },
  { label: "Find Us", href: "#visit" },
];

const hours = [
  { day: "Mon – Sat", time: "11am – 9pm" },
  { day: "Sunday",    time: "11am – 8pm" },
];

export function Footer() {
  return (
    <footer className="bg-[#080604] border-t-[3px] border-brand-gold/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-12">

          {/* Col 1 — Brand */}
          <div>
            <span className="font-oswald text-2xl text-brand-cream tracking-[0.12em] font-medium uppercase block mb-3">
              Habesha Restaurant
            </span>
            <p className="font-dm text-brand-cream/35 text-sm leading-relaxed mb-6">
              Authentic Ethiopian cuisine in the heart of Vanier, Ottawa.
              Family-run. 100% Halal. Community first.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/otthabesharesto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
              >
                <Instagram size={15} className="text-brand-gold" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
              >
                <Facebook size={15} className="text-brand-gold" />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links + Hours */}
          <div className="flex gap-10">
            <div>
              <p className="font-dm text-brand-cream/40 text-[0.68rem] uppercase tracking-[0.2em] mb-4">
                Navigate
              </p>
              <ul className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-dm text-brand-cream/55 text-sm hover:text-brand-gold transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-dm text-brand-cream/40 text-[0.68rem] uppercase tracking-[0.2em] mb-4">
                Hours
              </p>
              <ul className="space-y-3">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex items-start gap-2">
                    <Clock size={11} className="text-brand-gold mt-[3px] shrink-0" />
                    <div>
                      <p className="font-dm text-brand-cream/55 text-xs">{day}</p>
                      <p className="font-dm text-brand-gold/70 text-xs">{time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3 — Visit Info */}
          <div>
            <p className="font-dm text-brand-cream/40 text-[0.68rem] uppercase tracking-[0.2em] mb-4">
              Visit Us
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-gold mt-0.5 shrink-0" />
                <p className="font-dm text-brand-cream/55 text-sm">
                  99 Montreal Rd<br />Vanier, Ottawa, ON K1L 6E8
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-brand-gold shrink-0" />
                <a
                  href="tel:6137616120"
                  className="font-dm text-brand-cream/55 text-sm hover:text-brand-gold transition-colors"
                >
                  613-761-6120
                </a>
              </div>
            </div>
            <a
              href="tel:6137616120"
              className="inline-block mt-6 px-6 py-3 bg-brand-gold text-brand-dark font-dm font-semibold text-xs tracking-[0.15em] uppercase rounded-full hover:bg-brand-gold-muted transition-colors"
            >
              Reserve a Table →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-gold/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-dm text-brand-cream/20 text-xs tracking-[0.1em]">
            © {new Date().getFullYear()} Habesha Restaurant · Authentic Ethiopian Cuisine · Halal
          </p>
          <p className="font-dm text-brand-cream/15 text-[0.65rem] uppercase tracking-[0.15em]">
            99 Montreal Rd · Vanier, Ottawa
          </p>
        </div>
      </div>
    </footer>
  );
}
