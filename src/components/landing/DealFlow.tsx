import { motion } from "framer-motion";
import { Zap, Shield, Globe, Brain } from "lucide-react";

const deals = [
  { icon: Zap, sector: "AI / ML", stage: "Series A", raised: "$12M", status: "Closing Soon" },
  { icon: Shield, sector: "Cybersecurity", stage: "Seed", raised: "$4M", status: "Open" },
  { icon: Globe, sector: "Climate Tech", stage: "Pre-Seed", raised: "$2M", status: "Open" },
  { icon: Brain, sector: "Biotech", stage: "Series B", raised: "$28M", status: "Waitlist" },
];

export default function DealFlow() {
  return (
    <section id="deals" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Curated Deal<span className="text-gradient"> Flow</span>
          </h2>
          <p className="mt-4 text-silver max-w-xl text-lg">
            Every deal is vetted through our 8-step due diligence process. Only 2% of applications make it through.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.sector}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass rounded-2xl p-8 magnetic-hover cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <deal.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{deal.sector}</h3>
                    <p className="text-sm text-muted-foreground">{deal.stage}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  deal.status === "Closing Soon" ? "bg-gold/20 text-gold" :
                  deal.status === "Open" ? "bg-primary/20 text-primary" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {deal.status}
                </span>
              </div>
              <div className="mt-6 pt-6 border-t border-border/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground">Raising</span>
                  <p className="font-display text-xl font-bold text-foreground">{deal.raised}</p>
                </div>
                <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
