"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "meat",
    label: "Meat Dishes",
    items: [
      { name: "Beef Tibs", note: "Sautéed tender beef with Ethiopian spices, onions & jalapeños" },
      { name: "Lamb Wot", note: "Slow-braised lamb in rich berbere sauce" },
      { name: "Beef Sambusa", note: "Crispy pastry filled with spiced minced beef" },
      { name: "Kitfo", note: "Ethiopian-style beef tartare, spiced with mitmita" },
      { name: "Gored Gored", note: "Cubed raw beef with awaze and kibbeh" },
    ],
  },
  {
    id: "vegetarian",
    label: "Vegetarian",
    items: [
      { name: "Diffin Messir Wot", note: "Red lentils slow-cooked in berbere — a Habesha staple" },
      { name: "Shiro", note: "Spiced chickpea flour stew, silky and rich" },
      { name: "Tikel Gomen", note: "Cabbage, carrot & potato in mild turmeric spice" },
      { name: "Fosolia", note: "Green beans and carrots sautéed with garlic" },
      { name: "Vegetarian Sambusa", note: "Crispy pastry filled with spiced lentils" },
    ],
  },
  {
    id: "fish",
    label: "Fish Dishes",
    items: [
      { name: "Asa Tibs", note: "Pan-seared fish fillet with Ethiopian herbs & spices" },
      { name: "Asa Wot", note: "Fish in rich tomato-berbere sauce" },
      { name: "Grilled Fish", note: "Marinated and chargrilled, served with injera" },
    ],
  },
  {
    id: "habeshas",
    label: "Habeshas' Specials",
    items: [
      { name: "Habesha Combination", note: "A sampler of our best — meat, veg, and injera" },
      { name: "Ethiopian Coffee Ceremony", note: "Traditional 3-round jebena coffee service" },
      { name: "Tej", note: "Traditional Ethiopian honey wine" },
      { name: "Firfir", note: "Torn injera sautéed with berbere and niter kibbeh" },
    ],
  },
];

export function Menu() {
  const [active, setActive] = useState("meat");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 lg:py-36 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-4 block">
            Our Menu
          </span>
          <h2 className="font-oswald text-brand-cream text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.92] font-light uppercase">
            Authentic Ethiopian Flavour.
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`px-6 py-2.5 rounded-full font-dm text-xs tracking-[0.12em] uppercase transition-all ${
                active === id
                  ? "bg-brand-gold text-brand-dark font-semibold"
                  : "border border-brand-gold/20 text-brand-cream/50 hover:border-brand-gold/40 hover:text-brand-cream"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {current.items.map(({ name, note }) => (
              <div
                key={name}
                className="flex items-start gap-4 p-6 bg-brand-dark border border-brand-gold/10 rounded-xl hover:border-brand-gold/25 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                <div>
                  <p className="font-oswald text-brand-cream text-lg font-medium uppercase tracking-wide">
                    {name}
                  </p>
                  <p className="font-dm text-brand-cream/40 text-xs mt-1 leading-relaxed">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 font-dm text-brand-cream/25 text-xs uppercase tracking-[0.15em]">
          All dishes served with traditional injera. Gluten-free options available on request.
        </p>
      </div>
    </section>
  );
}
