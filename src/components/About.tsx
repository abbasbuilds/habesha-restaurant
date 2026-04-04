"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "4.6★", label: "Star Rating" },
  { value: "633", label: "Google Reviews" },
  { value: "100%", label: "Halal Certified" },
  { value: "11am", label: "Open Daily" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 flex items-center gap-2">
              <span className="text-[#DA291C] text-[8px]">◆</span>
              Who We Are
              <span className="text-[#078930] text-[8px]">◆</span>
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

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px mt-10 border border-brand-gold/12 rounded-xl overflow-hidden">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className="bg-brand-charcoal px-6 py-7 flex flex-col gap-1 border-t-[3px]"
                  style={{
                    borderTopColor: ["#DA291C", "#FCDD09", "#078930", "#D4A820"][i],
                  }}
                >
                  <span className="font-oswald text-brand-gold text-[2.8rem] font-light leading-none">
                    {value}
                  </span>
                  <span className="font-dm text-brand-cream/35 text-[0.68rem] uppercase tracking-[0.15em]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — photos */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Main photo — injera spread */}
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1765338915553-6e02fe63ff4f?w=800&auto=format&fit=crop&q=80"
                alt="Ethiopian injera spread — Habesha Restaurant"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            {/* Two smaller — jebena + restaurant exterior */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631166092772-d07aed54b9a0?w=600&auto=format&fit=crop&q=80"
                  alt="Ethiopian coffee ceremony — jebena"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1593787614887-004b2ffb0057?w=600&auto=format&fit=crop&q=80"
                  alt="Ethiopian tibs dish"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
