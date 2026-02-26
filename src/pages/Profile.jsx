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

  /* ===============================
     NOT AUTHENTICATED VIEW
  ================================ */
  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen bg-cream overflow-hidden">
        {/* Warm Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-orange/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[36rem] h-[36rem] bg-peach/30 rounded-full blur-3xl" />
        </div>

        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-32 px-4"
        >
          <div className="max-w-md mx-auto text-center pt-20">
            <div
              className="
                p-12 rounded-3xl
                bg-white/70 backdrop-blur-xl
                border border-peach
                shadow-soft
              "
            >
              <div className="flex justify-center mb-6">
                <div className="p-5 rounded-2xl bg-brand-gradient shadow-glow">
                  <Lock size={56} className="text-coffee" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-coffee mb-2">
                Please Sign In
              </h2>

              <p className="text-muted mb-8">
                You need to be signed in to view your profile
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="
                  px-10 py-3 rounded-xl
                  bg-brand-gradient text-coffee font-semibold
                  shadow-soft hover:shadow-glow transition
                "
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ===============================
     AUTHENTICATED VIEW
  ================================ */
  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">
      {/* Warm Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[42rem] h-[42rem] bg-orange/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[42rem] h-[42rem] bg-peach/30 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <ProfilePanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
    </div>
  );
}