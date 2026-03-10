import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Submit Application", desc: "Complete our accreditation questionnaire and investment profile." },
  { num: "02", title: "Interview", desc: "30-minute call with our membership team to align on goals." },
  { num: "03", title: "Verification", desc: "Accreditation and identity verification through our partners." },
  { num: "04", title: "Welcome Aboard", desc: "Access the deal pipeline and attend your first syndicate call." },
];

export default function HowToJoin() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            How to <span className="text-gradient">Join</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-8 items-start"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="font-display text-lg font-bold text-primary">{step.num}</span>
                </div>
                <div className="glass rounded-2xl p-8 flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
