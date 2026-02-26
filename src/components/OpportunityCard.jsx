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
      <div
        className="
          relative h-full flex flex-col overflow-hidden rounded-3xl
          bg-white/60 backdrop-blur-xl
          border border-peach
          shadow-soft
          hover:border-orange
          hover:shadow-glow
          transition-all duration-300
        "
      >
        {/* Glossy Overlay */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-tr from-white/50 via-white/10 to-transparent
            opacity-0 group-hover:opacity-100
            transition duration-500
          "
        />

        {/* IMAGE SECTION */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={opportunity.image}
            alt={opportunity.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-coffee/30 to-transparent" />

          {/* Save Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleSave}
            className="
              absolute top-4 right-4 z-10
              p-2 rounded-full
              bg-white/70 backdrop-blur-md
              border border-peach
              hover:bg-peach/50
              transition-all
            "
          >
            <Heart
              size={18}
              className={
                isSaved
                  ? "fill-orange text-orange"
                  : "text-coffee"
              }
            />
          </motion.button>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-gradient text-coffee shadow-md">
              {opportunity.category}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          {/* TITLE */}
          <h3 className="text-lg font-bold text-coffee mb-2 line-clamp-2 group-hover:text-orange transition-colors">
            {opportunity.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-muted mb-5 line-clamp-3 leading-relaxed">
            {opportunity.description}
          </p>

          {/* INFO */}
          <div className="mt-auto space-y-3">
            {/* Budget */}
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 text-muted">
                <DollarSign size={14} />
                Budget
              </span>
              <span className="font-semibold text-orange">
                ₹ {opportunity.budget}
              </span>
            </div>

            {/* Date & Views */}
            <div className="flex items-center justify-between text-xs text-muted">
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
              className="
                w-full mt-4 py-3 rounded-xl
                bg-brand-gradient
                text-coffee font-semibold text-sm
                shadow-soft
                hover:shadow-glow
                transition-all
              "
            >
              View Details
            </motion.button>
          </div>
        </div>

        {/* Top Shine Strip */}
        <div
          className="
            absolute top-0 left-0 w-full h-[2px]
            bg-gradient-to-r from-transparent via-white/70 to-transparent
          "
        />
      </div>
    </motion.div>
  );
}