"use client";

import { motion } from "framer-motion";

export function OwnerStory() {
  return (
    <section id="story" className="py-24 lg:py-36 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-4 flex items-center gap-2">
            <span className="text-[#DA291C] text-[8px]">◆</span>
            Straight from the Owner
            <span className="text-[#078930] text-[8px]">◆</span>
          </span>
          <h2 className="font-oswald text-brand-cream text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92] font-light uppercase">
            Meet the Family.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — Owner Reel embed */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[380px] rounded-2xl overflow-hidden border border-brand-gold/15 shadow-2xl shadow-brand-dark/60">
              <iframe
                src="https://www.instagram.com/reel/DO5_oESEqes/embed/"
                width="380"
                height="620"
                style={{ border: 0, display: "block", width: "100%" }}
                scrolling="no"
                allowFullScreen
                title="Habesha Restaurant — Owner story reel"
              />
            </div>
          </motion.div>

          {/* Right — Story + quote + exterior post */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-10"
          >
            {/* Pull quote */}
            <div className="relative pl-6 border-l-2 border-brand-gold">
              <span className="font-oswald text-brand-gold/20 text-[6rem] leading-none absolute -top-6 -left-3 select-none">
                &ldquo;
              </span>
              <blockquote className="font-oswald text-brand-cream text-[clamp(1.4rem,2.5vw,2rem)] font-light uppercase leading-[1.1] relative z-10">
                The most appealing aspect about Habesha Restaurant is the
                authenticity we deliver.
              </blockquote>
            </div>

            <p className="font-dm text-brand-cream/55 text-[0.95rem] leading-relaxed">
              Our main priority is to provide you with a homelike and intimate
              experience with family &amp; friends. But the real thing that sets
              us apart is our devotion to deliver Ethiopia right to you — with a
              great atmosphere, great people, and options for everyone.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-gold/40" />
              <span className="font-dm text-brand-gold/60 text-xs uppercase tracking-[0.2em]">
                Habesha Restaurant Ottawa
              </span>
            </div>

            {/* Exterior building photo — Instagram post embed */}
            <div>
              <p className="font-dm text-brand-cream/30 text-[0.65rem] uppercase tracking-[0.2em] mb-3">
                Find us at 99 Montreal Rd, Vanier
              </p>
              <div className="rounded-xl overflow-hidden border border-brand-gold/12 max-w-[360px]">
                <iframe
                  src="https://www.instagram.com/p/DPXYDQ5Dqr3/embed/"
                  width="360"
                  height="440"
                  style={{ border: 0, display: "block", width: "100%" }}
                  scrolling="no"
                  allowFullScreen
                  title="Habesha Restaurant — 99 Montreal Rd exterior"
                />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
