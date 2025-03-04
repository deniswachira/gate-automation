import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import automation from "../../assets/telescope.png";
import WeHelpWithHeroImage from "../../assets/WeHelpWithHeroImage.png";

const features = [
  { id: 1, img: automation, text: "No-Code Workflows - Build automations without technical skills" },
  { id: 2, img: automation, text: "Seamless Integrations - Connect your favorite tools effortlessly" },
  { id: 3, img: automation, text: "End-to-End Automation - From lead capture to project management" },
];

const ServicesHero = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="relative py-10 bg-gray-50"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side - Heading & Content */}
        <div>
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-[#0A2C47] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-Powered Automation for Smarter Business
          </motion.h1>

          <motion.p
            className="mt-2 text-lg text-gray-700 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            🚀 Eliminate Manual Work. Scale Faster.  
            Your business is losing <span className="font-bold text-[#009ACD]">500+ hours a year</span> on repetitive tasks, disconnected systems, and manual processes. Gate Automation helps you reclaim that time with AI-powered automation.
          </motion.p>

          <motion.div
            className="mt-4 space-y-4"
            role="list"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="flex items-center gap-4"
                role="listitem"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <img src={feature.img} alt={feature.text} className="w-12 h-12" />
                <p className="text-lg font-semibold text-[#0A2C47]">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="mt-8 px-6 py-3 bg-[#00C4FF] text-[#00C4FF] font-semibold rounded-full shadow-md hover:bg-[#009ACD] hover:scale-105 transition-all"
            onClick={() => navigate("/get-postie")}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Start Automating Today →
          </motion.button>
        </div>

        {/* Right Side - Hero Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={WeHelpWithHeroImage}
            alt="AI Automation Illustration"
            className="max-w-lg "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesHero;
