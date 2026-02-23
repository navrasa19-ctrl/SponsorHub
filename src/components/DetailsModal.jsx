import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Users, Eye, Check } from "lucide-react";

export default function DetailsModal({
  opportunity,
  isOpen,
  onClose,
  onApply,
}) {
  if (!isOpen || !opportunity) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-3 md:inset-16 lg:inset-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-white/10 shadow-2xl z-50 overflow-hidden flex flex-col"
      >
        {/* HEADER (Sticky) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-white font-semibold text-lg">
            Opportunity Details
          </h2>

          <motion.button
            whileHover={{ rotate: 90 }}
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <X size={22} className="text-white" />
          </motion.button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="overflow-y-auto flex-1">

          {/* HERO */}
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={opportunity.image}
              alt={opportunity.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                {opportunity.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-3">
                {opportunity.title}
              </h1>
              <p className="text-gray-300 text-sm mt-1">
                Posted by {opportunity.owner}
              </p>
            </div>
          </div>

          {/* MAIN CONTENT */}
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
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <Icon className="w-5 h-5 text-purple-400 mb-2" />
                    <p className="text-xs text-gray-400">{stat.label}</p>
                    <p className="text-lg font-semibold text-white">
                      {stat.value || "-"}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Budget */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 border border-white/10">
              <p className="text-gray-300 mb-2 text-sm uppercase tracking-wide">
                Sponsorship Budget
              </p>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                {opportunity.budget}
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                About This Opportunity
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {opportunity.fullDescription}
              </p>
            </div>

            {/* Benefits */}
            {opportunity.benefits && (
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  What You'll Get
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {opportunity.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <Check size={18} className="text-purple-400" />
                      <span className="text-gray-200">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="flex gap-4 p-6 border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onApply}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-xl transition"
          >
            Apply Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}