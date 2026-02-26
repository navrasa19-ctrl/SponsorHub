import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupPromptModal from "./SignupPromptModal.jsx";
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Building2,
  CheckCircle,
  Users,
} from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);

  const isLoggedIn = () => Boolean(localStorage.getItem("token"));

  return (
    <div className="pt-32 pb-24 px-4 relative overflow-hidden bg-cream">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-peach/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-peach mb-6">
            <Sparkles size={16} className="text-orange" />
            <span className="text-sm font-semibold text-coffee">
              Welcome to SponsorHub
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-coffee">Connect Events with </span>
            <span className="text-transparent bg-clip-text bg-brand-gradient animate-gradient">
              Perfect Sponsors
            </span>
          </h1>

          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
            Unlock sponsorship opportunities for your events and help brands
            connect with their audience. Find the perfect match in minutes.
          </p>

          {/* CTA */}
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/opportunity")}
              className="px-8 py-4 rounded-lg bg-brand-gradient text-coffee font-semibold shadow-soft flex items-center gap-2"
            >
              Explore Opportunities <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                !isLoggedIn()
                  ? setShowSignupPrompt(true)
                  : navigate("/createopportunity")
              }
              className="px-8 py-4 rounded-lg border border-peach text-coffee font-semibold hover:bg-peach/40 transition-colors flex items-center gap-2"
            >
              Create Opportunity <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Active Opportunities", value: "61+", icon: Briefcase },
            { label: "Sponsor Companies", value: "523", icon: Building2 },
            { label: "Successful Matches", value: "234", icon: CheckCircle },
            { label: "Community Members", value: "8.9K", icon: Users },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-peach hover:border-orange transition-all"
              >
                <div className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 group-hover:opacity-15 transition-all" />

                <div className="relative flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-brand-gradient">
                    <Icon className="text-coffee w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {showSignupPrompt && (
        <SignupPromptModal
          onClose={() => setShowSignupPrompt(false)}
          onSignup={() => navigate("/signup")}
        />
      )}
    </div>
  );
}