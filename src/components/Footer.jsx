import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 bg-cream border-t border-peach">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-orange/10 to-peach/20" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center shadow-soft">
                <span className="text-coffee font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg text-coffee">
                SponsorHub
              </span>
            </Link>

            <p className="text-muted text-sm">
              Connecting events with brands for meaningful sponsorships.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-coffee mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted hover:text-orange transition">
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/opportunity"
                  className="text-muted hover:text-orange transition"
                >
                  Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/saved"
                  className="text-muted hover:text-orange transition"
                >
                  Saved
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-muted hover:text-orange transition"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-coffee mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted hover:text-orange transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted hover:text-orange transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted hover:text-orange transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted hover:text-orange transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-coffee mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Github, href: "https://github.com" },
                { icon: Mail, href: "mailto:support@sponsorhub.com" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="
                      p-3 rounded-lg
                      bg-white/70 backdrop-blur
                      border border-peach
                      text-coffee
                      hover:text-orange
                      hover:border-orange
                      transition
                    "
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-peach to-transparent mb-12" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-muted text-sm">
            © {year} SponsorHub. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link
              to="/privacy"
              className="text-muted hover:text-orange transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted hover:text-orange transition"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-muted hover:text-orange transition"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}