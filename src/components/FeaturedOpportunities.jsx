import { motion } from 'framer-motion';
import { useState } from 'react';
import OpportunityCard from './OpportunityCard';
import DetailsModal from './DetailsModal';
import { opportunitiesData } from '../context/dummyData';
import { useNavigate } from "react-router-dom";

export default function FeaturedOpportunities() {
    const [selectedOpportunity, setSelectedOpportunity] = useState(null);
    const [savedItems, setSavedItems] = useState([]);
    const navigate = useNavigate();

    const handleSave = (opportunity) => {
        const isAlreadySaved = savedItems.some(item => item.id === opportunity.id);
        if (isAlreadySaved) {
            setSavedItems(savedItems.filter(item => item.id !== opportunity.id));
        } else {
            setSavedItems([...savedItems, opportunity]);
        }
    };

    const handleApply = () => {
        setSelectedOpportunity(null);
        alert('Application submitted! We will review your application shortly.');
    };

    return (
        <div className="py-18 px-4 mt-12 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Featured <span className="text-purple-400">Opportunities</span> 
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Handpicked sponsorship opportunities waiting for you
                        </p>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/opportunity")}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r 
                        from-indigo-600 via-purple-600 to-pink-600 
                        text-white font-semibold shadow-lg 
                        hover:shadow-purple-500/30 transition-all duration-300"
                    >
                        View All Opportunities
                    </motion.button>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {opportunitiesData.slice(0, 6).map((opportunity) => (
                        <OpportunityCard
                            key={opportunity.id}
                            opportunity={opportunity}
                            onViewDetails={setSelectedOpportunity}
                            onSave={handleSave}
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
        </div>
    );
}