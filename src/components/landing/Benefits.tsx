import { motion } from "framer-motion";
import { Lock, Users, BarChart3, Briefcase, Gem, Rocket } from "lucide-react";

const benefits = [
  { icon: Lock, title: "Exclusive Access", desc: "Pre-vetted deals unavailable to the public market." },
  { icon: Users, title: "Network Effect", desc: "Connect with 2,400+ accredited investors globally." },
  { icon: BarChart3, title: "Due Diligence", desc: "8-step vetting process with sector expert reviews." },
  { icon: Briefcase, title: "Portfolio Support", desc: "Dedicated team to manage your angel portfolio." },
  { icon: Gem, title: "Premium Events", desc: "Quarterly summits with founders and LPs." },
  { icon: Rocket, title: "Co-Invest Rights", desc: "Pro-rata follow-on rights in top performers." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Syndicate <span className="text-gradient">Benefits</span>
          </h2>
          <p className="mt-4 text-silver text-lg max-w-xl mx-auto">
            Everything you need to invest with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-8 magnetic-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <b.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
