import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, FileCheck, Scale } from "lucide-react";

const protocols = [
  { icon: ShieldCheck, title: "8-Step Due Diligence", desc: "Financial audits, market analysis, founder background checks, legal review, and competitive landscape assessment." },
  { icon: AlertTriangle, title: "Risk Scoring", desc: "Proprietary algorithm assigns risk scores from A (lowest) to D (highest) across 40+ data points." },
  { icon: FileCheck, title: "Legal Protection", desc: "Standardized SAFEs and convertible notes reviewed by top-tier law firms. Full investor protections included." },
  { icon: Scale, title: "Portfolio Diversification", desc: "AI-powered recommendations to balance your portfolio across sectors, stages, and geographies." },
];

export default function RiskProtocol() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Risk <span className="text-gradient">Protocol</span>
          </h2>
          <p className="mt-4 text-silver text-lg max-w-xl mx-auto">
            Your capital is protected by institutional-grade processes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {protocols.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-8 magnetic-hover"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <p.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
