import { motion } from "framer-motion";

const sponsors = [
  {
    type: "Event Sponsor",
    image: "./party.jpg",
  },
  {
    type: "Sports Sponsor",
    image: "./sport.jpg",
  },
  {
    type: "Startup Sponsor",
    image: "./startup.jpg",
  },
  {
    type: "Event Sponsor",
    image: "./party.jpg",
  },
];

export default function AutoScrollImages() {
  return (
    <div className="relative overflow-hidden">

      {/* Edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

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
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 160 }}
            className="
              relative min-w-[280px] h-[380px]
              rounded-3xl overflow-hidden
              bg-white shadow-soft
              cursor-pointer
            "
          >
            <img
              src={item.image}
              alt={item.type}
              className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />
            <div
              className="
                pointer-events-none
                absolute top-0 left-0
                w-full h-full
                bg-gradient-to-br
                from-white/35 via-white/10 to-transparent
              "
            />

            <div className="absolute inset-0 ring-1 ring-white/30 rounded-3xl" />
            <div className="absolute bottom-4 left-4 px-4 py-1 rounded-full text-xs font-medium bg-cyan-500 text-white shadow-soft">
              {item.type}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}