import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "../../assets/WeHelpWithHeroImage.png";

const WhyGateHero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="relative py-8 bg-gradient-to-b from-white to-[#F8FBFE] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Animated Image First */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={heroImage}
            alt="AI Automation"
            className="max-w-lg w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Content with Animation */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-[#0A2C47] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🚀 Automate. Optimize. Scale.
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your business is wasting time, money, and opportunities on manual tasks, disconnected systems, and inefficient workflows.  
            <span className="font-bold text-[#009ACD]"> Gate Automation</span> transforms operations with AI-driven automation, seamless integrations, and intelligent workflows—so you can scale faster.
          </motion.p>


          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-[#0A2C47] leading-tight mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            💡 Simple. Smart. Seamless.
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Your business is wasting time, money, and opportunities on manual tasks, disconnected systems, and inefficient workflows.  
            <span className="font-bold text-[#009ACD]"> Gate Automation</span> streamlines operations with AI-driven automation, seamless integrations, and intelligent workflows—so you can work smarter and scale faster.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="mt-6 px-6 py-3 btn text-blue-400 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:bg-[#009ACD] transition-all"
            whileHover={{ scale: 1.1, boxShadow: "0px 4px 20px rgba(0, 196, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            ⚡ Get Started Today →
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyGateHero;
