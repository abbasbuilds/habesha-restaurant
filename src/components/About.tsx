"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4.6", label: "Star Rating" },
  { value: "633", label: "Google Reviews" },
  { value: "100%", label: "Halal Certified" },
  { value: "11am", label: "Open Daily" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-px bg-brand-gold/10 border border-brand-gold/10 rounded-2xl overflow-hidden"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-brand-charcoal px-8 py-10 flex flex-col gap-2"
              >
                <span className="font-oswald text-[3rem] text-brand-gold font-light leading-none">
                  {value}
                </span>
                <span className="font-dm text-brand-cream/45 text-xs uppercase tracking-[0.15em]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 block">
              Who We Are
            </span>
            <h2 className="font-oswald text-brand-cream text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92] font-light uppercase mb-8">
              The Heart of Ethiopian Ottawa.
            </h2>
            <div className="space-y-5 font-dm text-brand-cream/55 text-[0.95rem] leading-relaxed">
              <p>
                Habesha Restaurant is where Ottawa comes to taste Ethiopia.
                Nestled at 99 Montreal Rd in the heart of Vanier, we&apos;ve
                been serving authentic Ethiopian cuisine to our community for
                years — and the community has spoken. 4.6 stars. 633 reviews.
              </p>
              <p>
                Everything on our menu is made the way it should be: real
                injera, slow-cooked wots, hand-spiced sambusas, and an
                Ethiopian coffee ceremony that takes you back to the source.
              </p>
              <p>
                We are 100% Halal, with generous vegan and vegetarian options.
                High chairs available. Family welcome. Community first.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
