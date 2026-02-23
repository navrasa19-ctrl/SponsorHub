import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FileText, Clock, CheckCircle, AlertCircle, MessageCircle, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";

export default function MyApplications() {
  const [applications] = useState([
    {
      id: 1,
      opportunityTitle: "Tech Summit 2026",
      appliedDate: "2026-02-15",
      eventDate: "2026-06-20",
      organizerName: "TechCorp Events",
      budget: "$50,000 - $100,000",
      status: "Under Review",
      statusColor: "yellow",
      message: "Your application is being reviewed. Expecting response within 5 days.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      category: "Technology",
    },
    {
      id: 2,
      opportunityTitle: "Music Festival 2026",
      appliedDate: "2026-02-10",
      eventDate: "2026-08-15",
      organizerName: "Festival Organizers Inc.",
      budget: "$75,000 - $150,000",
      status: "Approved",
      statusColor: "green",
      message: "Congratulations! Your sponsorship has been approved. Next steps will be shared soon.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=250&fit=crop",
      category: "Entertainment",
    },
    {
      id: 3,
      opportunityTitle: "Marketing Conference",
      appliedDate: "2026-02-05",
      eventDate: "2026-07-10",
      organizerName: "Marketing Professionals",
      budget: "$30,000 - $60,000",
      status: "Declined",
      statusColor: "red",
      message: "Unfortunately, your application was not selected this time. Try again for future events!",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      category: "Business",
    },
    {
      id: 4,
      opportunityTitle: "Gaming Expo 2026",
      appliedDate: "2026-01-28",
      eventDate: "2026-05-20",
      organizerName: "Gaming Events Global",
      budget: "$40,000 - $80,000",
      status: "Pending",
      statusColor: "blue",
      message: "Your application has been submitted and is waiting for initial review.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      category: "Gaming",
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "Under Review":
        return <Clock className="w-4 h-4" />;
      case "Approved":
        return <CheckCircle className="w-4 h-4" />;
      case "Declined":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Under Review":
        return "bg-amber-500/20 text-amber-400 border-amber-500/50";
      case "Approved":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
      case "Declined":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      case "Pending":
        return "bg-slate-500/20 text-slate-400 border-slate-500/50";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/50";
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-3">
                My <span className="text-purple-400">Applications</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Track and manage all your sponsorship applications
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto mt-[-30px]">
          {applications.length > 0 ? (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group flex flex-col rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 overflow-hidden hover:border-white/40 hover:shadow-2xl transition-all"
                >
                  {/* Image - Top */}
                  <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      src={app.image}
                      alt={app.opportunityTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content - Bottom */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Title & Organizer */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-300 transition-all">
                          {app.opportunityTitle}
                        </h3>
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                          {app.organizerName}
                        </p>
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1.5 ${getStatusStyle(app.status)}`}>
                          {getStatusIcon(app.status)}
                          {app.status}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-gray-300">
                          {app.category}
                        </span>
                      </div>

                      {/* Details Grid - 2x2 */}
                      <div className="grid grid-cols-2 gap-3 pt-3 pb-4 border-t border-b border-white/10">
                        <div className="space-y-1">
                          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Applied</p>
                          <p className="text-white font-semibold text-sm">{app.appliedDate.split('-').reverse().join('/')}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Event</p>
                          <p className="text-white font-semibold text-sm">{app.eventDate.split('-').reverse().join('/')}</p>
                        </div>
                        <div className="col-span-2 space-y-1">
                          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Budget Range</p>
                          <p className="text-purple-300 font-semibold text-sm">{app.budget}</p>
                        </div>
                      </div>

                      {/* Message */}
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {app.message.substring(0, 100)}...
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-4 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle size={16} />
                        Message
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2.5 rounded-lg bg-purple-600/50 border border-purple-500/60 text-purple-100 font-semibold text-sm hover:bg-purple-600/70 transition-all flex items-center justify-center gap-1.5"
                      >
                        Details
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block p-12 rounded-3xl bg-white/5 border border-white/20 mb-8"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex justify-center mb-6"
                >
                  <FileText size={80} className="text-gray-500" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  No Applications Yet
                </h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Start exploring sponsorship opportunities and apply to grow your brand
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/opportunity"
                  className="inline-block px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all"
                >
                  Explore Opportunities
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
