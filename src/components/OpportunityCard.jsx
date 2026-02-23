import { motion } from "framer-motion";
import { Heart, DollarSign, Calendar, Eye } from "lucide-react";
import { useState } from "react";

export default function OpportunityCard({
  opportunity,
  onViewDetails,
  onSave,
}) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.stopPropagation(); 
    setIsSaved((prev) => !prev);
    if (onSave) onSave(opportunity);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group h-full"
    >
      <div className="h-full flex flex-col rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-purple-600/20 hover:border-purple-500/40 transition-all duration-300">

        {/* IMAGE SECTION */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={opportunity.image}
            alt={opportunity.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Save Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleSave}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
          >
            <Heart
              size={18}
              className={
                isSaved
                  ? "fill-red-500 text-red-500"
                  : "text-white"
              }
            />
          </motion.button>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
              {opportunity.category}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-grow">

          {/* TITLE */}
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
            {opportunity.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-300 mb-5 line-clamp-3 leading-relaxed">
            {opportunity.description}
          </p>

          {/* INFO */}
          <div className="mt-auto space-y-3">

            {/* Budget */}
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 text-gray-400">
                <DollarSign size={14} />
                Budget
              </span>
              <span className="font-semibold text-purple-400">
                {opportunity.budget}
              </span>
            </div>

            {/* Date & Views */}
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {opportunity.eventDate}
              </span>

              {opportunity.views && (
                <span className="flex items-center gap-1">
                  <Eye size={14} />
                  {opportunity.views}
                </span>
              )}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewDetails(opportunity)}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm hover:shadow-lg transition-all"
            >
              View Details
            </motion.button>

          </div>
        </div>
      </div>
    </motion.div>
  );
}