import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const maskVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <TrendingUp size={14} className="text-primary" />
          <span className="text-xs font-medium text-silver">$240M+ deployed across 80+ startups</span>
        </motion.div>

        <div className="space-y-2">
          {["Invest Alongside", "The World's Elite", "Angel Investors"].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                custom={i}
                variants={maskVariants}
                initial="hidden"
                animate="visible"
                className={`font-display font-900 leading-[1.05] tracking-tight ${
                  i === 1 ? "text-5xl md:text-7xl lg:text-8xl text-gradient" : "text-5xl md:text-7xl lg:text-8xl text-foreground"
                }`}
                style={{ fontWeight: 900 }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 max-w-xl mx-auto text-silver text-lg leading-relaxed"
        >
          Exclusive access to pre-vetted startup deals. Minimum $5K check sizes. 
          Maximum returns. Join 2,400+ accredited investors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#apply" className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base flex items-center gap-3 hover:brightness-110 transition-all glow">
            Apply for Membership
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#deals" className="px-8 py-4 rounded-xl glass text-foreground font-display font-semibold text-base hover:bg-card/60 transition-all">
            View Deal Flow
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "3.2x", label: "Avg. Return" },
            { value: "80+", label: "Portfolio Co's" },
            { value: "$5K", label: "Min. Check" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
