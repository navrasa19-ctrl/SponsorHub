import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupPromptModal from "./SignupPromptModal.jsx";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  const navigate = useNavigate();
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);

  const isLoggedIn = () => Boolean(localStorage.getItem("token"));

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-cream">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-brand-gradient opacity-20 rounded-3xl blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/70 backdrop-blur
              border border-peach
              mb-6
            "
          >
            <Sparkles size={16} className="text-orange" />
            <span className="text-sm font-semibold text-coffee">
              Ready to grow your brand?
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-coffee mb-6">
            Ready to Get{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient">
              Sponsored?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Post your event or opportunity today and start connecting with brands
            that align with your vision.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!isLoggedIn()) {
                setShowSignupPrompt(true);
              } else {
                navigate("/createopportunity");
              }
            }}
            className="
              px-10 py-4 rounded-xl
              bg-brand-gradient
              text-coffee font-semibold
              flex items-center gap-3 mx-auto
              shadow-soft
              hover:shadow-glow
              transition-all
            "
          >
            Create Opportunity <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      {showSignupPrompt && (
        <SignupPromptModal
          onClose={() => setShowSignupPrompt(false)}
          onSignup={() => navigate("/signup")}
        />
      )}
    </section>
  );
}