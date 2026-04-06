"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Buffet() {
  return (
    <section id="buffet" className="py-24 lg:py-36 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_rgba(31,59,23,0.25)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 flex items-center gap-2">
              <span className="text-[#DA291C] text-[8px]">◆</span>
              All You Can Eat
              <span className="text-[#078930] text-[8px]">◆</span>
            </span>
            <h2 className="font-oswald text-brand-cream text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92] font-light uppercase mb-6">
              Vegetarian Buffet.
            </h2>
            <p className="font-dm text-brand-cream/55 text-[0.95rem] leading-relaxed mb-8">
              Monday to Saturday — all-you-can-eat plates of our finest
              vegetarian Ethiopian dishes. Messir Wot, Shiro, Tikel Gomen,
              Fosolia, and more. No limits. All injera. All love.
            </p>

            <div className="inline-flex items-baseline gap-2 px-8 py-5 bg-brand-green/25 border border-brand-gold/20 rounded-2xl mb-8">
              <span className="font-oswald text-brand-gold text-5xl font-light">$25</span>
              <span className="font-dm text-brand-cream/50 text-sm uppercase tracking-[0.1em]">
                + per person
              </span>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6">
              <div>
                <p className="font-oswald text-brand-cream text-lg uppercase font-medium">Mon – Sat</p>
                <p className="font-dm text-brand-cream/40 text-xs uppercase tracking-[0.1em]">Days available</p>
              </div>
              <div className="w-px bg-brand-gold/15" />
              <div>
                <p className="font-oswald text-brand-cream text-lg uppercase font-medium">Self Serve</p>
                <p className="font-dm text-brand-cream/40 text-xs uppercase tracking-[0.1em]">Come as you are</p>
              </div>
              <div className="w-px bg-brand-gold/15" />
              <div>
                <p className="font-oswald text-brand-cream text-lg uppercase font-medium">100% Halal</p>
                <p className="font-dm text-brand-cream/40 text-xs uppercase tracking-[0.1em]">Always</p>
              </div>
            </div>
          </motion.div>

          {/* Real food photo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1682495889756-9229b479faaf?w=900&auto=format&fit=crop&q=80"
              alt="Vegetarian Ethiopian buffet spread"
              fill
              className="object-cover"
              unoptimized
            />
            {/* Gold vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="font-oswald text-brand-gold text-xl uppercase tracking-wide">
                Vegetarian Buffet — From $25+
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
