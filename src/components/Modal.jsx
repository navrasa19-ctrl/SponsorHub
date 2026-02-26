import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children, title }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="
              fixed inset-4 md:inset-20 z-50
              rounded-2xl overflow-y-auto
              bg-white/70 backdrop-blur-xl
              border border-peach
              shadow-2xl
            "
          >
            {/* Header */}
            <div className="
              sticky top-0 flex items-center justify-between
              p-6
              border-b border-peach
              bg-cream/80 backdrop-blur-xl
            ">
              <h2 className="text-2xl font-bold text-coffee">
                {title}
              </h2>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-peach/40 transition-colors"
              >
                <X size={24} className="text-coffee" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 text-coffee">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}