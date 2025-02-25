import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesAndSolutions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    { icon: "🔄", text: "Workflow Automation - Automate repetitive tasks & processes" },
    { icon: "📊", text: "CRM & Data Sync - Seamlessly integrate with business tools" },
    { icon: "🚀", text: "No-Code AI Solutions - Automate without technical expertise" },
    { icon: "🔗", text: "App Integrations - Connect with Zapier, Make, and more" },
    { icon: "📈", text: "Real-Time Insights - Track & optimize workflows" },
  ];

  const solutions = [
    { icon: "🏢", text: "Small Businesses - Automate sales, marketing & operations" },
    { icon: "📈", text: "Startups - Scale faster without increasing headcount" },
    { icon: "⚙️", text: "Enterprises - Optimize workflows & enhance efficiency" },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-b from-[#002A44] to-[#003F64] text-white"
    >
      {/* Section Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        🚀 Features & Solutions
      </motion.h1>

      {/* Features & Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Features Section */}
        <motion.div
          className="p-8 bg-[#005A87] rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold mb-4">✨ AI-Powered Automation</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-3 bg-[#004466] rounded-lg transition-all duration-300 hover:bg-[#006A99] hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-2xl">{feature.icon}</span>
                {feature.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          className="p-8 bg-[#004C75] rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">💡 Industry-Specific Use Cases</h2>
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-3 bg-[#003A5A] rounded-lg transition-all duration-300 hover:bg-[#006A99] hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-2xl">{solution.icon}</span>
                {solution.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.button
        className="mt-10 px-6 py-3 text-lg font-semibold bg-[#00C4FF] text-[#003F64] rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        See How It Works →
      </motion.button>
    </section>
  );
};

export default FeaturesAndSolutions;
