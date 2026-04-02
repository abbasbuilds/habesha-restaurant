"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Ethiopian New Year",
    subtitle: "Enkutatash Celebration",
    description:
      "Join us every September for our annual Ethiopian New Year party. Live music, traditional food, community.",
    detail: "Saturday, September 14th · 6pm · $20 Food",
  },
  {
    title: "Private Bookings",
    subtitle: "Make It Yours",
    description:
      "Host your birthday, corporate dinner, or community event at Habesha. We handle everything.",
    detail: "Call 613-761-6120 to book",
  },
  {
    title: "Community Dinners",
    subtitle: "Every Week",
    description:
      "Regularly hosting community gatherings, cultural events, and celebrations. Follow us on Instagram for updates.",
    detail: "@otthabesharesto",
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 lg:py-36 bg-brand-charcoal">
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
            Events & Gatherings
          </span>
          <h2 className="font-oswald text-brand-cream text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92] font-light uppercase">
            Celebrate With Us.
          </h2>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map(({ title, subtitle, description, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-brand-dark border border-brand-gold/12 rounded-2xl p-8 flex flex-col gap-4 hover:border-brand-gold/28 transition-colors"
            >
              <div className="w-10 h-px bg-brand-gold" />
              <div>
                <p className="font-oswald text-brand-cream text-2xl uppercase font-medium leading-tight">
                  {title}
                </p>
                <p className="font-dm text-brand-gold/70 text-xs uppercase tracking-[0.12em] mt-1">
                  {subtitle}
                </p>
              </div>
              <p className="font-dm text-brand-cream/50 text-sm leading-relaxed flex-1">
                {description}
              </p>
              <div className="pt-4 border-t border-brand-gold/10">
                <p className="font-dm text-brand-gold text-xs uppercase tracking-[0.12em]">
                  {detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
