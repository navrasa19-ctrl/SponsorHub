import { motion, AnimatePresence } from "framer-motion";

export default function SignupPromptModal({ onClose, onSignup }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="
            w-full max-w-sm p-6 rounded-2xl
            bg-white/70 backdrop-blur-xl
            border border-peach
            shadow-2xl
          "
        >
          <h3 className="text-xl font-bold text-coffee mb-2 text-center">
            Login Required
          </h3>

          <p className="text-muted text-sm text-center mb-6">
            Please sign up or log in to use this option and connect with sponsors.
          </p>

          <div className="flex gap-3">
            <button
              onClick={onSignup}
              className="
                flex-1 py-2.5 rounded-lg
                bg-brand-gradient
                text-coffee font-semibold
                shadow-soft
                hover:shadow-glow
                transition
              "
            >
              Sign Up
            </button>

            <button
              onClick={onClose}
              className="
                flex-1 py-2.5 rounded-lg
                border border-peach
                text-coffee font-semibold
                hover:bg-peach/40
                transition
              "
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}