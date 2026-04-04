"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const details = [
  { icon: MapPin,    label: "Address", value: "99 Montreal Rd, Vanier, ON K1L 6E8" },
  { icon: Clock,     label: "Hours",   value: "Open Daily · 11am – 9pm" },
  { icon: Phone,     label: "Phone",   value: "613-761-6120" },
  { icon: Instagram, label: "Instagram", value: "@otthabesharesto" },
];

export function VisitUs() {
  return (
    <section id="visit" className="py-24 lg:py-36 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square rounded-2xl overflow-hidden border border-brand-gold/12"
          >
            <iframe
              src="https://maps.google.com/maps?q=99+Montreal+Rd,+Vanier,+Ottawa,+ON+K1L+6E8,+Canada&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Habesha Restaurant — 99 Montreal Rd, Vanier, Ottawa"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 flex items-center gap-2">
              <span className="text-[#DA291C] text-[8px]">◆</span>
              Come See Us
              <span className="text-[#078930] text-[8px]">◆</span>
            </span>
            <h2 className="font-oswald text-brand-cream text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92] font-light uppercase mb-10">
              Heart of Vanier.
            </h2>

            <div className="space-y-6">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-red/20 border border-brand-gold/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-dm text-brand-cream/35 text-[0.68rem] uppercase tracking-[0.15em] mb-0.5">
                      {label}
                    </p>
                    <p className="font-dm text-brand-cream text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="tel:6137616120"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-dark font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-gold-muted transition-colors"
              >
                Call to Reserve →
              </a>
              <a
                href="https://maps.google.com/?q=99+Montreal+Rd+Vanier+Ottawa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-brand-cream/20 text-brand-cream font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-cream/6 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
