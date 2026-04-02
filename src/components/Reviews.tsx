"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    author: "TripAdvisor Guest",
    rating: 5,
    text: "Tasty Ethiopian food and super friendly service in the heart of Vanier. Ordered 4 plates. Started off with beef Sambusas — super tasty, fresh, homemade. One of the best Ethiopian spots in Ottawa.",
  },
  {
    author: "Google Review",
    rating: 5,
    text: "Habesha Restaurant located in the heart of downtown Ottawa serves authentic Ethiopian food. Vegan options, warm atmosphere, and the kind of hospitality that makes you feel like family. 5 stars.",
  },
  {
    author: "Facebook Review",
    rating: 5,
    text: "This place is a gem in Vanier. The injera is perfectly fermented, the wots are rich and aromatic. The Ethiopian coffee ceremony at the end is an experience you can't get anywhere else in Ottawa.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-4 block">
            What People Say
          </span>
          <h2 className="font-oswald text-brand-cream text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92] font-light uppercase">
            Ottawa Has Spoken.
          </h2>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ author, rating, text }, i) => (
            <motion.div
              key={author + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-brand-charcoal border border-brand-gold/12 rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, si) => (
                  <span key={si} className="text-brand-gold text-sm">★</span>
                ))}
              </div>
              <p className="font-dm text-brand-cream/60 text-sm leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-gold/10">
                <div className="w-8 h-8 rounded-full bg-brand-red/30 border border-brand-gold/15 flex items-center justify-center">
                  <span className="font-oswald text-brand-gold text-sm font-medium">
                    {author[0]}
                  </span>
                </div>
                <span className="font-dm text-brand-cream/40 text-xs tracking-wide">
                  — {author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-dm text-brand-cream/30 text-xs uppercase tracking-[0.2em]">
            4.6 stars · 633 Google reviews · Halal certified
          </p>
        </motion.div>
      </div>
    </section>
  );
}
