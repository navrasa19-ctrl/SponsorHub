import { motion, AnimatePresence } from "framer-motion";

export default function SignupPromptModal({ onClose, onSignup }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 border border-white/20 rounded-2xl p-6 max-w-sm w-full"
        >
          <h3 className="text-xl font-bold text-white mb-2 text-center">
            Login Required
          </h3>

          <p className="text-gray-400 text-sm text-center mb-6">
            Please sign up or log in to use this option and connect with sponsors.
          </p>

          <div className="flex gap-3">
            <button
              onClick={onSignup}
              className="flex-1 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold"
            >
              Sign Up
            </button>

            <button
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}