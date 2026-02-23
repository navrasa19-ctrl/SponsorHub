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
      {/* Background Glow */}
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

          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Discover sponsorship opportunities across multiple industries.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((category, index) => {
            const IconComponent = iconMap[category.icon];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                onClick={() =>
                  navigate(`/opportunity?category=${category.name}`)
                }
                className="group relative p-4  rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg cursor-pointer transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10"
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />

                <div className="relative z-10 ">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg mb-6 group-hover:scale-110 transition">
                    {IconComponent && (
                      <IconComponent size={30} className="text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {category.opportunities} opportunities available
                  </p>
                  <div className="flex items-center text-purple-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    View Opportunities →
                  </div>
                  <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}