"use client";

import { motion } from "framer-motion";

export function Buffet() {
  return (
    <section id="buffet" className="py-24 lg:py-36 bg-brand-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_rgba(31,59,23,0.3)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 block">
              All You Can Eat
            </span>
            <h2 className="font-oswald text-brand-cream text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92] font-light uppercase mb-6">
              Vegetarian Buffet.
            </h2>
            <p className="font-dm text-brand-cream/55 text-[0.95rem] leading-relaxed mb-8">
              Monday to Saturday — all-you-can-eat plates of our finest
              vegetarian Ethiopian dishes. Messir Wot, Shiro, Tikel Gomen,
              Fosolia, and more. No limits. All injera. All love.
            </p>

            <div className="inline-flex items-baseline gap-2 px-8 py-5 bg-brand-green/25 border border-brand-gold/20 rounded-2xl">
              <span className="font-oswald text-brand-gold text-5xl font-light">
                $20
              </span>
              <span className="font-dm text-brand-cream/50 text-sm uppercase tracking-[0.1em]">
                + per person
              </span>
            </div>

            <div className="flex gap-6 mt-8">
              <div>
                <p className="font-oswald text-brand-cream text-lg uppercase font-medium">Mon – Sat</p>
                <p className="font-dm text-brand-cream/40 text-xs uppercase tracking-[0.1em]">Days available</p>
              </div>
              <div className="w-px bg-brand-gold/15" />
              <div>
                <p className="font-oswald text-brand-cream text-lg uppercase font-medium">Self Serve</p>
                <p className="font-dm text-brand-cream/40 text-xs uppercase tracking-[0.1em]">Come as you are</p>
              </div>
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="aspect-[4/3] rounded-2xl bg-brand-charcoal border border-brand-gold/12 overflow-hidden relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="font-oswald text-brand-gold text-6xl font-light">ፍ</span>
              <p className="font-oswald text-brand-cream text-2xl uppercase tracking-wide">
                Vegetarian Buffet
              </p>
              <p className="font-dm text-brand-cream/35 text-xs uppercase tracking-[0.15em]">
                All You Can Eat · From $20+
              </p>
              <div className="mt-4 flex gap-2">
                {["Messir Wot", "Shiro", "Gomen", "Fosolia"].map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1.5 bg-brand-green/20 border border-brand-gold/12 rounded-full font-dm text-[0.62rem] text-brand-cream/50 uppercase tracking-[0.1em]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
