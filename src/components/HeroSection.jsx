import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import SignupPromptModal from "./SignupPromptModal.jsx";
import { ArrowRight, Sparkles, Briefcase, Building2, CheckCircle, Users } from 'lucide-react';


export default function HeroSection() {
  const navigate = useNavigate();
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const isLoggedIn = () => {
  return Boolean(localStorage.getItem("token")); 
};
  return (
    <div className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-semibold text-gray-300">Welcome to SponsorHub</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Connect Events with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
              Perfect Sponsors
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Unlock sponsorship opportunities for your events and help brands connect with their audience. Find the perfect match in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/opportunity')}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold flex items-center gap-2 hover:shadow-2xl transition-shadow"
            >
              Explore Opportunities <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (!isLoggedIn()) {
                  setShowSignupPrompt(true);
                } else {
                  navigate("/createopportunity");
                }
              }}
              className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Create Opportunity <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              label: "Active Opportunities",
              value: "61+",
              icon: Briefcase,
            },
            {
              label: "Sponsor Companies",
              value: "523",
              icon: Building2,
            },
            {
              label: "Successful Matches",
              value: "234",
              icon: CheckCircle,
            },
            {
              label: "Community Members",
              value: "8.9K",
              icon: Users,
            },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 
                hover:border-purple-500/40 
                transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-indigo-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />

                <div className="relative flex items-center gap-4">

                  {/* Icon Circle */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                    <Icon className="text-white w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
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