import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

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
      message:
        "Your application is being reviewed. Expecting response within 5 days.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
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
      message:
        "Congratulations! Your sponsorship has been approved. Next steps will be shared soon.",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=250&fit=crop",
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
      message:
        "Unfortunately, your application was not selected this time. Try again for future events!",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
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
      message:
        "Your application has been submitted and is waiting for initial review.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
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
        return "bg-orange/20 text-orange border-orange/40";
      case "Approved":
        return "bg-emerald-500/20 text-emerald-600 border-emerald-500/40";
      case "Declined":
        return "bg-red-500/20 text-red-600 border-red-500/40";
      case "Pending":
        return "bg-peach/40 text-coffee border-peach";
      default:
        return "bg-peach/40 text-coffee border-peach";
    }
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
        transition={{ duration: 0.6 }}
        className="pt-32 pb-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-coffee mb-3">
            My{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient">
              Applications
            </span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Track and manage all your sponsorship applications
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto mt-[-30px]">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  group flex flex-col rounded-2xl overflow-hidden
                  bg-white/70 backdrop-blur-xl
                  border border-peach
                  shadow-soft hover:shadow-glow
                  transition-all
                "
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    src={app.image}
                    alt={app.opportunityTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-coffee mb-1 line-clamp-2">
                        {app.opportunityTitle}
                      </h3>
                      <p className="text-muted text-sm">
                        {app.organizerName}
                      </p>
                    </div>

                    {/* Status */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getStatusStyle(
                        app.status
                      )}`}
                    >
                      {getStatusIcon(app.status)}
                      {app.status}
                    </span>

                    {/* Category */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-peach/50 text-coffee">
                      {app.category}
                    </span>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-3 pt-3 pb-4 border-t border-b border-peach">
                      <div>
                        <p className="text-xs uppercase font-semibold text-muted">
                          Applied
                        </p>
                        <p className="text-sm font-semibold text-coffee">
                          {app.appliedDate.split("-").reverse().join("/")}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase font-semibold text-muted">
                          Event
                        </p>
                        <p className="text-sm font-semibold text-coffee">
                          {app.eventDate.split("-").reverse().join("/")}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs uppercase font-semibold text-muted">
                          Budget
                        </p>
                        <p className="text-sm font-semibold text-orange">
                          {app.budget}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted">
                      {app.message.substring(0, 100)}...
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2.5 rounded-lg border border-peach text-coffee font-semibold hover:bg-peach/40 flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle size={16} />
                      Message
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2.5 rounded-lg bg-brand-gradient text-coffee font-semibold shadow-soft flex items-center justify-center gap-1.5"
                    >
                      Details
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}