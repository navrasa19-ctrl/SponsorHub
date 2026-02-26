import { motion } from "framer-motion";

const sponsors = [
  { type: "Event Sponsor", image: "./party.jpg" },
  { type: "Sports Sponsor", image: "./sport.jpg" },
  { type: "Startup Sponsor", image: "./startup.jpg" },
  { type: "Event Sponsor", image: "./party.jpg" },
];

export default function AutoScrollImages() {
  return (
    <div className="relative overflow-hidden py-10">

      {/* Edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-cream to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-cream to-transparent z-10" />

      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...sponsors, ...sponsors].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 160 }}
            className="
              group relative min-w-[280px] h-[380px]
              rounded-3xl overflow-hidden
              bg-white/70 backdrop-blur-xl
              border border-peach
              shadow-soft
              cursor-pointer
            "
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.type}
              className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />

            {/* Warm overlay */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-gradient-to-br
                from-orange/30 via-peach/20 to-transparent
              "
            />

            {/* Soft ring */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/40" />

            {/* Badge */}
            <div
              className="
                absolute bottom-4 left-4
                px-4 py-1.5 rounded-full
                text-xs font-semibold
                bg-brand-gradient
                text-coffee
                shadow-soft
              "
            >
              {item.type}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}