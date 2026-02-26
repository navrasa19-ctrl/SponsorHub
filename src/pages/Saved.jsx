import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import OpportunityCard from "../components/OpportunityCard";
import DetailsModal from "../components/DetailsModal";
import { opportunitiesData } from "../context/dummyData";
import { Heart } from "lucide-react";
import Footer from "../components/Footer";

export default function Saved() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [savedItems, setSavedItems] = useState(opportunitiesData.slice(0, 3)); // demo

  const handleApply = () => {
    setSelectedOpportunity(null);
    alert("Application submitted! We will review your application shortly.");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">
      {/* Warm background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-peach/30 rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-32 pb-14 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-coffee mb-4">
            Saved <span className="text-orange">Opportunities</span>
          </h1>

          <p className="text-muted text-lg max-w-2xl mx-auto">
            {savedItems.length} opportunity
            {savedItems.length !== 1 ? "ies" : ""} saved for later
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          {savedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedItems.map((opportunity, i) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <OpportunityCard
                    opportunity={opportunity}
                    onViewDetails={setSelectedOpportunity}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <div
                className="
                  inline-block p-14 rounded-3xl
                  bg-white/70 backdrop-blur-xl
                  border border-peach
                  shadow-soft
                "
              >
                <div className="flex justify-center mb-6">
                  <div className="p-5 rounded-2xl bg-brand-gradient shadow-glow">
                    <Heart size={56} className="text-coffee" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-coffee mb-2">
                  No Saved Opportunities Yet
                </h3>

                <p className="text-muted max-w-sm mx-auto mb-8">
                  Explore opportunities and save the ones you're interested in to review later.
                </p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/opportunity"
                  className="
                    inline-block px-10 py-3 rounded-xl
                    bg-brand-gradient text-coffee font-semibold
                    shadow-soft hover:shadow-glow transition
                  "
                >
                  Explore Opportunities
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      <DetailsModal
        opportunity={selectedOpportunity}
        isOpen={!!selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onApply={handleApply}
      />

      <Footer />
    </div>
  );
}