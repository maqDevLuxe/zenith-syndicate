import { motion } from "framer-motion";

const returns = [
  { company: "NeuralPay", entry: "$8M", current: "$120M", multiple: "15x", year: "2021" },
  { company: "GreenGrid", entry: "$3M", current: "$21M", multiple: "7x", year: "2022" },
  { company: "DataShield", entry: "$5M", current: "$45M", multiple: "9x", year: "2020" },
  { company: "QuantumLeap", entry: "$12M", current: "$60M", multiple: "5x", year: "2021" },
  { company: "BioSync", entry: "$2M", current: "$8M", multiple: "4x", year: "2023" },
];

export default function PastMultipliers() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Past <span className="text-gradient">Multipliers</span>
          </h2>
          <p className="mt-4 text-silver text-lg">Track record that speaks for itself.</p>
        </motion.div>

        <div className="space-y-4">
          {returns.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6 flex items-center gap-6"
            >
              <div className="hidden sm:block w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-primary text-sm">{r.company.slice(0, 2)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-foreground">{r.company}</h3>
                <p className="text-xs text-muted-foreground">Entered {r.year}</p>
              </div>
              <div className="hidden md:flex items-center gap-8 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Entry</p>
                  <p className="font-display font-semibold text-silver">{r.entry}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Current</p>
                  <p className="font-display font-semibold text-foreground">{r.current}</p>
                </div>
              </div>
              <div className="text-right">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                  className="h-1 rounded-full bg-gradient-to-r from-primary to-primary/30 mb-2"
                  style={{ maxWidth: `${parseInt(r.multiple) * 10}px` }}
                />
                <span className="font-display text-2xl font-bold text-primary">{r.multiple}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
