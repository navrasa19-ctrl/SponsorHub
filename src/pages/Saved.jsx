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
  const [savedItems, setSavedItems] = useState(opportunitiesData.slice(0, 3)); // Demo: showing first 3

  const handleApply = () => {
    setSelectedOpportunity(null);
    alert("Application submitted! We will review your application shortly.");
  };

  const handleRemove = (id) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-32 pb-12 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Saved <span className="text-purple-400">Opportunities</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-[-30px]">
            {savedItems.length} opportunity{savedItems.length !== 1 ? "ies" : ""} saved for later
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-4 py-12 ">
        <div className="max-w-6xl mx-auto">
          {savedItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedItems.map((opportunity, i) => (
                  <motion.div
                    key={opportunity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <OpportunityCard
                      opportunity={opportunity}
                      onViewDetails={setSelectedOpportunity}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-block p-12 rounded-2xl bg-white/5 border border-white/20 mb-6">
                <Heart size={64} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  No Saved Opportunities Yet
                </h3>
                <p className="text-gray-400 max-w-sm mx-auto mb-8">
                  Explore opportunities and save the ones you're interested in to review later.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/opportunity"
                  className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-shadow"
                >
                  Explore Opportunities
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
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
