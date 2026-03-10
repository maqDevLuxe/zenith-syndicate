import { motion, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-6xl font-bold text-foreground">
        {prefix}{value.toLocaleString()}{suffix}
      </div>
    </div>
  );
}

const counters = [
  { target: 2400, suffix: "+", label: "Active Members" },
  { target: 240, suffix: "M", prefix: "$", label: "Capital Deployed" },
  { target: 82, suffix: "", label: "Portfolio Companies" },
  { target: 32, suffix: "x", label: "Best Return" },
];

export default function MemberCounters() {
  return (
    <section className="section-padding border-y border-border/30">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {counters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <Counter target={c.target} suffix={c.suffix} prefix={c.prefix} />
            <p className="mt-2 text-sm text-muted-foreground">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
