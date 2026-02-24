import { motion } from "framer-motion";
import { categoriesData } from "../context/dummyData";
import { useNavigate } from "react-router-dom";
import {
  Code,
  GraduationCap,
  Music,
  Rocket,
  Heart,
  Trophy,
} from "lucide-react";

const iconMap = {
  Code,
  GraduationCap,
  Music,
  Rocket,
  Heart,
  Trophy,
};

export default function CategoriesSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] overflow-hidden">
      {/* Background Glow (same as before) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore <span className="text-purple-400">Categories</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Discover sponsorship opportunities across industries
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((category, index) => {
            const IconComponent = iconMap[category.icon];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                onClick={() =>
                  navigate(`/opportunity?category=${category.name}`)
                }
                className="group relative rounded-3xl p-6 cursor-pointer
                bg-white/5 border border-white/10 backdrop-blur-lg
                hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300"
              >
                {/* hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  {/* Left content */}
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      Category
                    </p>

                    <h3 className="text-2xl font-semibold text-white">
                      {category.name}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      {category.opportunities} opportunities
                    </p>

                    <div className="mt-5 text-purple-400 font-medium group-hover:translate-x-1 transition">
                      View Opportunities →
                    </div>
                  </div>

                  {/* Right icon box (image style feel) */}
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center
                    bg-gradient-to-br from-indigo-600 to-purple-600
                    shadow-lg group-hover:scale-105 transition"
                  >
                    {IconComponent && (
                      <IconComponent size={42} className="text-white" />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}