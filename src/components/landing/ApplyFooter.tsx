import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ApplyFooter() {
  return (
    <>
      {/* CTA Section */}
      <section id="apply" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ready to Invest<br /><span className="text-gradient">Smarter?</span>
            </h2>
            <p className="text-silver text-lg max-w-lg mx-auto mb-10">
              Applications are reviewed weekly. Join 2,400+ accredited investors who trust APEX with their angel portfolio.
            </p>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition-all glow whitespace-nowrap"
              >
                Apply Now <ArrowRight size={18} />
              </button>
            </form>

            <p className="mt-4 text-xs text-muted-foreground">
              By applying, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="font-display text-xl font-bold text-foreground">
                APEX<span className="text-primary">.</span>syndicate
              </a>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
                The world's most exclusive angel investor syndicate. Pre-vetted deals, institutional-grade due diligence, unmatched returns.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Deals", "Benefits", "How It Works", "News"].map((l) => (
                  <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Mail size={14} /> members@apexsyndicate.com</div>
                <div className="flex items-center gap-2"><Phone size={14} /> +1 (415) 555-0199</div>
                <div className="flex items-center gap-2"><MapPin size={14} /> San Francisco, CA</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">© 2026 APEX Syndicate. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Disclosures</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
