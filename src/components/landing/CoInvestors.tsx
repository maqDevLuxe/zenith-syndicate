import { motion } from "framer-motion";

const investors = [
  { name: "Sequoia Capital", logo: "S" },
  { name: "a16z", logo: "a16z" },
  { name: "Accel", logo: "A" },
  { name: "Y Combinator", logo: "YC" },
  { name: "Lightspeed", logo: "LS" },
  { name: "Tiger Global", logo: "TG" },
  { name: "Founders Fund", logo: "FF" },
  { name: "Benchmark", logo: "B" },
];

export default function CoInvestors() {
  return (
    <section className="section-padding border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          Co-investing alongside top-tier firms
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {investors.map((inv, i) => (
            <motion.div
              key={inv.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex flex-col items-center gap-3 magnetic-hover cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
                <span className="font-display font-bold text-sm text-silver">{inv.logo}</span>
              </div>
              <span className="text-xs text-muted-foreground">{inv.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
