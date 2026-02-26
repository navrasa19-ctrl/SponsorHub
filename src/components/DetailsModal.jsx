import { useState } from "react";
import SignupPromptModal from "./SignupPromptModal.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Users, Eye, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DetailsModal({
  opportunity,
  isOpen,
  onClose,
  onApply,
}) {
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const navigate = useNavigate();

  if (!isOpen || !opportunity) return null;

  const handleApply = () => {
    const isLoggedIn = Boolean(localStorage.getItem("token"));
    if (!isLoggedIn) {
      setShowSignupPrompt(true);
      return;
    }
    onApply();
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.3 }}
        className="
          fixed inset-3 md:inset-16 lg:inset-24 z-50
          rounded-3xl overflow-hidden flex flex-col
          bg-white/60 backdrop-blur-xl
          border border-peach
          shadow-2xl
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-peach bg-cream/80 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-coffee font-semibold text-lg">
            Opportunity Details
          </h2>

          <motion.button
            whileHover={{ rotate: 90 }}
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-peach/40 transition"
          >
            <X size={22} className="text-coffee" />
          </motion.button>
        </div>

        {/* CONTENT */}
        <div className="overflow-y-auto flex-1">
          {/* HERO */}
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={opportunity.image}
              alt={opportunity.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-coffee/30 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-gradient text-coffee shadow-md">
                {opportunity.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 drop-shadow">
                {opportunity.title}
              </h1>
              <p className="text-white/80 text-sm mt-1">
                Posted by {opportunity.owner}
              </p>
            </div>
          </div>

          {/* MAIN */}
          <div className="p-6 md:p-10 space-y-10">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: MapPin, label: "Location", value: opportunity.location },
                { icon: Calendar, label: "Event Date", value: opportunity.eventDate },
                { icon: Users, label: "Applicants", value: opportunity.applicants },
                { icon: Eye, label: "Views", value: opportunity.views },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="
                      p-4 rounded-2xl
                      bg-white/70 backdrop-blur
                      border border-peach
                      hover:border-orange
                      transition
                    "
                  >
                    <Icon className="w-5 h-5 text-orange mb-2" />
                    <p className="text-xs text-muted">{stat.label}</p>
                    <p className="text-lg font-semibold text-coffee">
                      {stat.value || "-"}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Budget */}
            <div className="p-8 rounded-3xl bg-brand-gradient border border-peach shadow-soft">
              <p className="text-coffee/80 mb-2 text-sm uppercase tracking-wide">
                Sponsorship Budget
              </p>
              <p className="text-4xl font-bold text-coffee">
                ₹ {opportunity.budget}
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-semibold text-coffee mb-4">
                About This Opportunity
              </h3>
              <p className="text-muted leading-relaxed">
                {opportunity.fullDescription}
              </p>
            </div>

            {/* Benefits */}
            {opportunity.benefits && (
              <div>
                <h3 className="text-2xl font-semibold text-coffee mb-6">
                  What You'll Get
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {opportunity.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="
                        flex items-center gap-3 p-4 rounded-xl
                        bg-white/70 backdrop-blur
                        border border-peach
                      "
                    >
                      <Check size={18} className="text-orange" />
                      <span className="text-coffee">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex gap-4 p-6 border-t border-peach bg-cream/80 backdrop-blur-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleApply}
            className="
              flex-1 py-3 rounded-xl
              bg-brand-gradient
              text-coffee font-semibold
              shadow-soft
              hover:shadow-glow
              transition
            "
          >
            Apply Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="
              flex-1 py-3 rounded-xl
              border border-peach
              text-coffee font-semibold
              hover:bg-peach/40
              transition
            "
          >
            Close
          </motion.button>
        </div>
      </motion.div>

      {showSignupPrompt && (
        <SignupPromptModal
          onClose={() => setShowSignupPrompt(false)}
          onSignup={() => navigate("/signup")}
        />
      )}
    </AnimatePresence>
  );
}