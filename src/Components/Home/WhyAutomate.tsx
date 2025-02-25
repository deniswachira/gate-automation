import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import home from "../../assets/home.png";

const WhyAutomate = () => {
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
        Why Automate?
      </motion.h1>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left: Illustration with Scroll Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={home}
            alt="Why Automate"
            className="w-80 md:w-96 "
            whileHover={{ scale: 1.05 }}
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
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Your Business is Wasting Time & Money on Manual Work
          </h2>

          {/* Key Stats Section */}
          <motion.div
            className="mt-3 space-y-3 text-gray-200"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              { icon: "⏳", text: "500+ hours lost per year on repetitive processes" },
              { icon: "💰", text: "30% of operational costs wasted due to inefficiencies" },
              { icon: "⚡", text: "3x faster execution with AI-driven automation" },
            ].map((stat, index) => (
              <motion.p
                key={index}
                className="flex items-center gap-2 text-lg font-medium"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-2xl">{stat.icon}</span>
                {stat.text}
              </motion.p>
            ))}
          </motion.div>

          {/* Benefits List with Staggered Animation */}
          <motion.ul
            className="mt-6 space-y-2 text-gray-100"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              "Eliminate manual tasks – Let AI handle the busywork",
              "Optimize operations – Automate workflows across all platforms",
              "Scale without limits – Work smarter, not harder",
            ].map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle size={20} className="text-[#00C4FF]" />
                <span className="text-lg">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Statement with Scale Effect */}
          <motion.p
            className="mt-6 text-white font-semibold text-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            📢 Start Automating Now →
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAutomate;
