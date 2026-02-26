import { motion } from "framer-motion";
import { useState } from "react";
import OpportunityCard from "./OpportunityCard";
import DetailsModal from "./DetailsModal";
import { opportunitiesData } from "../context/dummyData";
import { useNavigate } from "react-router-dom";

export default function FeaturedOpportunities() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [savedItems, setSavedItems] = useState([]);
  const navigate = useNavigate();

  const handleSave = (opportunity) => {
    const isSaved = savedItems.some((item) => item.id === opportunity.id);
    setSavedItems(
      isSaved
        ? savedItems.filter((item) => item.id !== opportunity.id)
        : [...savedItems, opportunity]
    );
  };

  const handleApply = () => {
    setSelectedOpportunity(null);
    alert("Application submitted! We’ll review it shortly.");
  };

  return (
    <section className="relative py-20 px-4 mt-16 bg-cream overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-coffee mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-brand-gradient">
                Opportunities
              </span>
            </h2>
            <p className="text-muted text-lg max-w-xl">
              Handpicked sponsorship opportunities waiting for you
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/opportunity")}
            className="px-6 py-3 rounded-xl bg-brand-gradient text-coffee font-semibold shadow-soft hover:shadow-glow transition-all"
          >
            View All Opportunities
          </motion.button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunitiesData.slice(0, 6).map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              onViewDetails={setSelectedOpportunity}
              onSave={handleSave}
              isSaved={savedItems.some((i) => i.id === opportunity.id)}
            />
          ))}
        </div>
      </div>

      <DetailsModal
        opportunity={selectedOpportunity}
        isOpen={!!selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onApply={handleApply}
      />
    </section>
  );
}