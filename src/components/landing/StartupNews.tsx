import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "AI Startup Funding Hits Record $72B in 2025",
    source: "TechCrunch",
    date: "Mar 5, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
  },
  {
    title: "Why Angel Syndicates Are Outperforming VCs",
    source: "Forbes",
    date: "Mar 2, 2026",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    title: "Climate Tech Sees 400% Growth in Deal Volume",
    source: "Bloomberg",
    date: "Feb 28, 2026",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
];

export default function StartupNews() {
  return (
    <section id="news" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Startup <span className="text-gradient">News</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass rounded-2xl overflow-hidden magnetic-hover cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-primary font-medium">{article.source}</span>
                  <span className="text-xs text-muted-foreground">· {article.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <div className="mt-4 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
