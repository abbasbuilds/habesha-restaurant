"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden bg-brand-dark">
      {/* Real photo background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593252719532-53f183016149?w=1920&auto=format&fit=crop&q=80')`,
          backgroundPosition: "center 40%",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/90" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-dark/85 via-brand-dark/45 to-transparent" />

      {/* Ethiopian green tint — upper left */}
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(ellipse_40%_35%_at_15%_25%,_rgba(31,59,23,0.4)_0%,_transparent_70%)]" />
      {/* Gold glow — lower right */}
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(ellipse_35%_30%_at_85%_75%,_rgba(212,168,32,0.12)_0%,_transparent_65%)]" />

      {/* Content — vertically centered */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-center px-6 pt-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-[58%] lg:max-w-[52%]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#DA291C] text-[8px]">◆</span>
            <span className="font-dm text-brand-gold uppercase tracking-[0.3em] text-[0.68rem] font-medium">
              99 Montreal Rd · Vanier, Ottawa · Authentic Ethiopian · Halal
            </span>
            <span className="text-[#078930] text-[8px]">◆</span>
          </div>

          <h1
            className="font-oswald leading-[0.88] flex flex-col uppercase"
            style={{ textShadow: "0 2px 32px rgba(0,0,0,0.6)" }}
          >
            <span className="text-[clamp(3.2rem,6vw,7rem)] text-brand-cream font-light">
              Where
            </span>
            <span className="text-[clamp(3.2rem,6vw,7rem)] text-brand-gold font-bold">
              Ethiopia
            </span>
            <span className="text-[clamp(3.2rem,6vw,7rem)] text-brand-cream font-light">
              Comes Home.
            </span>
          </h1>

          <p className="font-dm text-brand-cream/60 text-[clamp(0.875rem,1.2vw,1rem)] max-w-[440px] mt-5 leading-relaxed">
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
              className="px-8 py-3.5 border border-brand-cream/25 text-brand-cream font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-cream/8 transition-colors"
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
