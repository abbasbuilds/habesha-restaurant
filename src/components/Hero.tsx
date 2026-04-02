"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden bg-brand-dark">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-charcoal to-brand-dark" />
        {/* Ethiopian green glow — top left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_18%_30%,_rgba(31,59,23,0.55)_0%,_transparent_70%)]" />
        {/* Gold glow — centre */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_60%_55%,_rgba(212,168,32,0.10)_0%,_transparent_65%)]" />
        {/* Red glow — bottom right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_88%_82%,_rgba(140,31,31,0.25)_0%,_transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.3em] text-[0.68rem] font-medium mb-6 block">
            99 Montreal Rd · Vanier, Ottawa · Authentic Ethiopian · Halal
          </span>

          <h1 className="font-oswald leading-[0.88] flex flex-col uppercase">
            <span className="text-[clamp(3.8rem,10vw,9rem)] text-brand-cream font-light">
              Where
            </span>
            <span className="text-[clamp(3.8rem,10vw,9rem)] text-brand-gold font-semibold">
              Ethiopia
            </span>
            <span className="text-[clamp(3.8rem,10vw,9rem)] text-brand-cream font-light">
              Comes Home.
            </span>
          </h1>

          <p className="font-dm text-brand-cream/55 text-[clamp(0.875rem,1.4vw,1.05rem)] max-w-[500px] mt-5 leading-relaxed">
            Authentic Ethiopian cuisine in the heart of Vanier. Halal.
            Family-run. Communal plates, injera, and coffee the way it&apos;s
            meant to be. 4.6 stars · 633 reviews.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="tel:6137616120"
              className="px-8 py-3.5 bg-brand-gold text-brand-dark font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-gold-muted transition-colors"
            >
              Call to Reserve →
            </a>
            <a
              href="#menu"
              className="px-8 py-3.5 border border-brand-cream/20 text-brand-cream font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-cream/6 transition-colors"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 origin-right rotate-90 translate-y-16">
          <span className="font-dm text-brand-gold text-[0.62rem] tracking-[0.3em] font-semibold">
            SCROLL
          </span>
          <div className="w-10 h-[1px] bg-brand-gold/50" />
        </div>
      </div>
    </section>
  );
}
