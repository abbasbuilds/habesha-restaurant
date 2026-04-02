export function Footer() {
  return (
    <footer className="py-10 bg-brand-dark border-t border-brand-gold/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-oswald text-xl text-brand-cream/45 uppercase tracking-[0.12em] font-light">
          Habesha Restaurant
        </span>

        <p className="font-dm text-brand-cream/20 text-xs tracking-[0.1em] text-center">
          99 Montreal Rd, Vanier · 613-761-6120 · Authentic Ethiopian · Halal
        </p>

        <p className="font-dm text-brand-cream/15 text-xs">
          © {new Date().getFullYear()} Habesha Restaurant
        </p>
      </div>
    </footer>
  );
}
