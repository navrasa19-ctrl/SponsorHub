import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import ProfilePanel from "../components/ProfilePanel";
import { Lock } from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [panelOpen, setPanelOpen] = useState(true);

  if (!isAuthenticated) {
    return (
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-32 px-4"
        >
          <div className="max-w-md mx-auto text-center pt-20">
            <div className="p-12 rounded-2xl bg-white/5 border border-white/20 mb-6">
              <div className="flex justify-center mb-4"><Lock size={80} className="text-gray-400" /></div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Please Sign In
              </h2>
              <p className="text-gray-400 mb-8">
                You need to be signed in to view your profile
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-shadow"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />
      <ProfilePanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
    </div>
  );
}