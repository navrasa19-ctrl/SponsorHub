import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <div className="py-20 px-4 relative  overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-semibold text-gray-300">Ready to grow your brand?</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Get <span className="text-purple-400">Sponsored?</span> 
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Post your event or opportunity today and start connecting with brands that align with your vision.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/createopportunity')}
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold flex items-center gap-3 mx-auto hover:shadow-2xl transition-shadow"
          >
            Create Opportunity <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
