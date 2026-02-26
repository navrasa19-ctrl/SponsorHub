import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function SponsorPopup({ open, onClose, onGetStarted }) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md mt-8"
          />

          {/* Modal Wrapper */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="
                relative w-full max-w-md rounded-2xl overflow-hidden
                bg-white/70 backdrop-blur-xl
                border border-peach
                shadow-2xl
              "
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-lg hover:bg-peach/40 transition-colors z-10"
              >
                <X size={24} className="text-coffee" />
              </motion.button>

              {/* Content */}
              <div className="p-8 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="
                    inline-block p-4 rounded-2xl
                    bg-brand-gradient
                    border border-peach
                    shadow-soft
                    mb-6
                  "
                >
                  <Sparkles size={32} className="text-coffee" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-coffee mb-3"
                >
                  Looking for Sponsorship?
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted mb-8 leading-relaxed"
                >
                  Join thousands of creators and brands connecting through
                  SponsorHub. Find the perfect sponsorship match for your event
                  or brand today.
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 mb-8 text-left"
                >
                  {[
                    "Access 100+ sponsorship opportunities",
                    "Connect with verified brands and creators",
                    "Find your perfect match instantly",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-coffee"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                      {feature}
                    </div>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onGetStarted}
                    className="
                      flex-1 py-3 rounded-lg
                      bg-brand-gradient
                      text-coffee font-semibold
                      shadow-soft
                      hover:shadow-glow
                      flex items-center justify-center gap-2
                      transition-all
                    "
                  >
                    Get Started <ArrowRight size={18} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="
                      flex-1 py-3 rounded-lg
                      border border-peach
                      text-coffee font-semibold
                      hover:bg-peach/40
                      transition-colors
                    "
                  >
                    Not Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}