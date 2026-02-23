import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-indigo-600/5 to-slate-900" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                SponsorHub
              </span>
            </Link>

            <p className="text-gray-400 text-sm">
              Connecting events with brands for meaningful sponsorships.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white">Explore</Link></li>
              <li><Link to="/opportunity" className="text-gray-400 hover:text-white">Opportunities</Link></li>
              <li><Link to="/saved" className="text-gray-400 hover:text-white">Saved</Link></li>
              <li><Link to="/profile" className="text-gray-400 hover:text-white">Profile</Link></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400"
              >
                <Twitter size={18} />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400"
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400"
              >
                <Github size={18} />
              </motion.a>

              <motion.a
                href="mailto:support@sponsorhub.com"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

        {/* Bottom */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {year} SponsorHub. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}