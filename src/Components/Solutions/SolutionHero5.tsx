import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import home from "../../assets/home.png";

const SolutionsHero5 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-[#003F64]"
    >
      {/* H1 Title at the Top */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        AI AGENTS
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl font-semibold text-gray-200 text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Your Intelligent Automation Partners
      </motion.h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left: Illustration with Scroll Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0, scale: 0.9, rotate: -5 }}
          animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <motion.img
            src={home}
            alt="AI Agents"
            className="w-80 md:w-96"
            loading="lazy"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right: Text & Bullet Points */}
        <motion.div
          className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Key Benefits Section */}
          <motion.div
            className="space-y-4 text-gray-100"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                icon: "🤖",
                text: "Adaptive Intelligence – AI Agents learn from data and interactions to improve performance over time.",
              },
              {
                icon: "🧠",
                text: "Decision-Making Capabilities – Automate complex processes that require reasoning and analysis.",
              },
              {
                icon: "🔗",
                text: "Seamless Integration – Work alongside your existing tools and systems for a unified experience.",
              },
              {
                icon: "⏳",
                text: "24/7 Availability – Ensure your business runs smoothly, even outside working hours.",
              },
            ].map((item, index) => (
              <motion.p
                key={index}
                className="flex items-center gap-2 text-lg font-medium"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-2xl">{item.icon}</span>
                {item.text}
              </motion.p>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.p
            className="mt-6 text-blue-400 font-semibold text-lg cursor-pointer hover:text-blue-500"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, -2, 2, 0], // Slight wiggle effect
              transition: { duration: 0.5 },
            }}
          >
            📢 Unlock the Power of AI Agents Today →
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsHero5;
