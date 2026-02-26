import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Edit2,
  Trash2,
  Eye,
  Users,
  Inbox as InboxIcon,
  Calendar,
  MapPin,
} from "lucide-react";

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
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=250&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
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
      prev.map((item) => (item.id === currentEdit.id ? currentEdit : item))
    );
    setIsEditOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-cream overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-peach/30 rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-32 pb-12 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-coffee mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient">
              Opportunities
            </span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Manage all your posted sponsorship opportunities in one place
          </p>
        </div>
      </motion.div>

      {/* Cards */}
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
                  className="
                    group rounded-2xl overflow-hidden
                    bg-white/70 backdrop-blur-xl
                    border border-peach
                    shadow-soft hover:shadow-glow
                    transition-all
                  "
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-coffee mb-2">
                      {opp.title}
                    </h3>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-peach/50 text-coffee font-semibold">
                        {opp.category}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          opp.status === "Active"
                            ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/40"
                            : "bg-muted/30 text-coffee border border-peach"
                        }`}
                      >
                        {opp.status}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="text-muted text-sm space-y-2 mb-4">
                      <p className="flex items-center gap-2">
                        <Calendar size={14} /> {opp.eventDate}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={14} /> {opp.location}
                      </p>
                    </div>

                    <p className="text-orange font-semibold text-lg mb-4">
                      {opp.budget}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-between text-sm mb-5">
                      <div className="flex items-center gap-1 text-coffee font-semibold">
                        <Users size={16} />
                        {opp.applicants}
                      </div>
                      <div className="flex items-center gap-1 text-coffee font-semibold">
                        <Eye size={16} />
                        {opp.views}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEditClick(opp)}
                        className="
                          flex-1 py-2 rounded-lg
                          border border-peach
                          text-coffee font-semibold
                          hover:bg-peach/40
                          flex items-center justify-center gap-2
                        "
                      >
                        <Edit2 size={16} />
                        Edit
                      </motion.button>

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDelete(opp.id)}
                        className="
                          flex-1 py-2 rounded-lg
                          bg-red-600/20 border border-red-500/50
                          text-red-600 font-semibold
                          hover:bg-red-600/30
                          flex items-center justify-center gap-2
                        "
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
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-block p-8 rounded-2xl bg-white/70 border border-peach shadow-soft">
                <div className="flex justify-center mb-4">
                  <InboxIcon size={80} className="text-muted" />
                </div>
                <h3 className="text-2xl font-bold text-coffee mb-2">
                  No opportunities yet
                </h3>
                <p className="text-muted mb-6">
                  Create your first sponsorship opportunity to get started
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/createopportunity"
                  className="
                    inline-block px-6 py-3 rounded-lg
                    bg-brand-gradient
                    text-coffee font-semibold
                    shadow-soft hover:shadow-glow
                  "
                >
                  Create Opportunity
                </motion.a>
              </div>
            </motion.div>
          )}

          {/* Edit Modal */}
          {isEditOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg p-8 rounded-2xl bg-white/80 backdrop-blur-xl border border-peach shadow-2xl"
              >
                <h2 className="text-2xl font-bold text-coffee mb-6">
                  Edit Opportunity
                </h2>

                <div className="space-y-4">
                  {["title", "category", "location", "budget"].map((field) => (
                    <input
                      key={field}
                      type="text"
                      value={currentEdit[field]}
                      onChange={(e) =>
                        setCurrentEdit({
                          ...currentEdit,
                          [field]: e.target.value,
                        })
                      }
                      className="
                        w-full px-4 py-2 rounded-lg
                        bg-white/70 border border-peach
                        text-coffee
                        focus:outline-none focus:border-orange
                      "
                    />
                  ))}

                  <input
                    type="date"
                    value={currentEdit.eventDate}
                    onChange={(e) =>
                      setCurrentEdit({
                        ...currentEdit,
                        eventDate: e.target.value,
                      })
                    }
                    className="
                      w-full px-4 py-2 rounded-lg
                      bg-white/70 border border-peach
                      text-coffee
                    "
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setIsEditOpen(false)}
                    className="flex-1 py-2 rounded-lg border border-peach text-coffee hover:bg-peach/40"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="flex-1 py-2 rounded-lg bg-brand-gradient text-coffee font-semibold shadow-soft"
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