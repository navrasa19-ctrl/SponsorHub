import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Edit2, Trash2, Eye, Users, Inbox as InboxIcon, Calendar, MapPin } from "lucide-react";
import Footer from "../components/Footer";

export default function MyOpportunities() {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [currentEdit, setCurrentEdit] = useState(null);
    const [opportunities, setOpportunities] = useState([
        {
            id: 1,
            title: "Annual Tech Summit 2026",
            category: "Technology",
            budget: "$50,000 - $100,000",
            eventDate: "2026-06-15",
            location: "San Francisco, USA",
            applicants: 42,
            views: 1250,
            status: "Active",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        },
        {
            id: 2,
            title: "Summer Music Festival",
            category: "Entertainment",
            budget: "$75,000 - $150,000",
            eventDate: "2026-08-20",
            location: "New York, USA",
            applicants: 28,
            views: 856,
            status: "Active",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=250&fit=crop",
        },
        {
            id: 3,
            title: "Global Marketing Conference",
            category: "Marketing",
            budget: "$30,000 - $60,000",
            eventDate: "2026-07-10",
            location: "London, UK",
            applicants: 15,
            views: 524,
            status: "Closed",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        },
        {
            id: 4,
            title: "Annual Tech Summit 2026",
            category: "Technology",
            budget: "$50,000 - $100,000",
            eventDate: "2026-06-15",
            location: "San Francisco, USA",
            applicants: 42,
            views: 1250,
            status: "Active",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        },
    ]);

    const handleDelete = (id) => {
        setOpportunities(opportunities.filter((opp) => opp.id !== id));
    };

    const handleEditClick = (opp) => {
        setCurrentEdit(opp);
        setIsEditOpen(true);
    };

    const handleUpdate = () => {
        setOpportunities((prev) =>
            prev.map((item) =>
                item.id === currentEdit.id ? currentEdit : item
            )
        );
        setIsEditOpen(false);
    };

    return (
        <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen ">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="pt-32 pb-12 px-4"
            >
                <div className="max-w-8xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        My <span className="text-purple-400">Opportunities</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Manage all your posted sponsorship opportunities in one place
                    </p>
                </div>
            </motion.div>

            <div className="px-4 py-16 mt-[-30px]">
                <div className="max-w-7xl mx-auto">
                    {opportunities.length > 0 ? (
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {opportunities.map((opp, index) => (
                                <motion.div
                                    key={opp.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                            src={opp.image}
                                            alt={opp.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {opp.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="text-xs px-3 py-1 rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/50">
                                                {opp.category}
                                            </span>
                                            <span
                                                className={`text-xs px-3 py-1 rounded-full font-semibold ${opp.status === "Active"
                                                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                                                    : "bg-gray-500/20 text-gray-400 border border-gray-500/50"
                                                    }`}
                                            >
                                                {opp.status}
                                            </span>
                                        </div>

                                        <div className="text-gray-300 text-sm space-y-2 mb-4">
                                            <p className="flex items-center gap-2">
                                                <Calendar size={14} /> {opp.eventDate}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <MapPin size={14} /> {opp.location}
                                            </p>
                                        </div>

                                        <p className="text-purple-400 font-semibold text-lg mb-4">
                                            {opp.budget}
                                        </p>

                                        <div className="flex justify-between text-sm mb-5">
                                            <div className="flex items-center gap-1 text-white font-semibold">
                                                <Users size={16} />
                                                {opp.applicants}
                                            </div>
                                            <div className="flex items-center gap-1 text-white font-semibold">
                                                <Eye size={16} />
                                                {opp.views}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleEditClick(opp)}
                                                className="flex-1 py-2 rounded-lg bg-blue-600/20 border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-600/30 transition-all flex items-center justify-center gap-2"
                                            >
                                                <Edit2 size={16} />
                                                Edit
                                            </motion.button>

                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleDelete(opp.id)}
                                                className="flex-1 py-2 rounded-lg bg-red-600/20 border border-red-500/50 text-red-400 font-semibold hover:bg-red-600/30 transition-all flex items-center justify-center gap-2"
                                            >
                                                <Trash2 size={16} />
                                                Delete
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        /* Empty State Same As Before */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <div className="inline-block p-8 rounded-2xl bg-white/5 border border-white/20 mb-6">
                                <div className="flex justify-center mb-4">
                                    <InboxIcon size={80} className="text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    No opportunities yet
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Create your first sponsorship opportunity to get started
                                </p>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/createopportunity"
                                    className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-shadow"
                                >
                                    Create Opportunity
                                </motion.a>
                            </div>
                        </motion.div>
                    )}

                    {isEditOpen && (
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-slate-900 border border-white/20 rounded-2xl p-8 w-full max-w-lg"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Edit Opportunity
                                </h2>

                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        value={currentEdit.title}
                                        onChange={(e) =>
                                            setCurrentEdit({ ...currentEdit, title: e.target.value })
                                        }
                                        placeholder="Title"
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                                    />

                                    <input
                                        type="text"
                                        value={currentEdit.category}
                                        onChange={(e) =>
                                            setCurrentEdit({ ...currentEdit, category: e.target.value })
                                        }
                                        placeholder="Category"
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                                    />

                                    <input
                                        type="date"
                                        value={currentEdit.eventDate}
                                        onChange={(e) =>
                                            setCurrentEdit({ ...currentEdit, eventDate: e.target.value })
                                        }
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                                    />

                                    <input
                                        type="text"
                                        value={currentEdit.location}
                                        onChange={(e) =>
                                            setCurrentEdit({ ...currentEdit, location: e.target.value })
                                        }
                                        placeholder="Location"
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                                    />

                                    <input
                                        type="text"
                                        value={currentEdit.budget}
                                        onChange={(e) =>
                                            setCurrentEdit({ ...currentEdit, budget: e.target.value })
                                        }
                                        placeholder="Budget"
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                                    />
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={() => setIsEditOpen(false)}
                                        className="flex-1 py-2 rounded-lg bg-gray-600/30 border border-gray-500/50 text-gray-300"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleUpdate}
                                        className="flex-1 py-2 rounded-lg bg-indigo-600 text-white font-semibold"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
