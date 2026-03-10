import { motion } from "framer-motion";

export default function NetworkingEvent() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Exclusive networking event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </motion.div>

      <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-3 block">Next Event</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
              Q2 Investor Summit
            </h2>
            <p className="text-silver max-w-md text-lg">
              San Francisco · June 14, 2026 · Members Only
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
