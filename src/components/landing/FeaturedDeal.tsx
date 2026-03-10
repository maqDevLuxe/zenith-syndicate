import { motion } from "framer-motion";
import { Lock, Eye } from "lucide-react";

export default function FeaturedDeal() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-gradient">Upcoming Deal</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-10 md:p-14 overflow-hidden"
        >
          {/* Blurred content */}
          <div className="filter blur-md select-none pointer-events-none">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20" />
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">████████ AI</h3>
                <p className="text-muted-foreground">Series A · $18M Round</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-xs text-muted-foreground">Valuation</p>
                <p className="font-display text-xl font-bold text-foreground">$██M</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Revenue</p>
                <p className="font-display text-xl font-bold text-foreground">$█.█M ARR</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Growth</p>
                <p className="font-display text-xl font-bold text-foreground">███% MoM</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Revolutionary platform leveraging advanced machine learning to transform enterprise workflows.
              Founded by ex-Google engineers with deep domain expertise in natural language processing.
            </p>
          </div>

          {/* Lock overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 backdrop-blur-sm rounded-3xl">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
              <Lock size={28} className="text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Members Only</h3>
            <p className="text-muted-foreground text-sm mb-6">Apply for membership to unlock deal details</p>
            <a href="#apply" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm flex items-center gap-2 hover:brightness-110 transition-all glow">
              <Eye size={16} /> Unlock Access
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
