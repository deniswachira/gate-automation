import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Link, BarChart } from "lucide-react";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Key Mission Statements
  const missionPoints = [
    {
      icon: <Zap size={40} className="text-[#00C4FF]" />,
      title: "AI-Driven Automation",
      description:
        "Empower businesses by eliminating inefficiencies and reducing manual work.",
    },
    {
      icon: <Link size={40} className="text-[#00C4FF]" />,
      title: "Seamless Integrations",
      description:
        "Connect the tools you already use to create intelligent workflows that boost productivity.",
    },
    {
      icon: <BarChart size={40} className="text-[#00C4FF]" />,
      title: "Scalable, No-Code Solutions",
      description:
        "Make automation accessible to startups and enterprises with customizable, scalable solutions.",
    },
  ];

  return (
    <section
      ref={ref}
      className="px-6 md:px-20 py-20 bg-[#F8FAFC] text-[#003F64] flex flex-col items-center text-center"
    >
      {/* Section Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Mission
      </motion.h1>

      {/* Mission Statements Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {missionPoints.map((point, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon */}
            <div className="mb-4">{point.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">{point.title}</h2>

            {/* Description */}
            <p className="text-gray-600">{point.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission Statement */}
      <motion.p
        className="mt-10 text-xl md:text-2xl max-w-4xl leading-relaxed text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We believe that <span className="font-semibold">technology should work for you, not the other way around.</span>  
        That’s why we’re committed to helping businesses streamline operations,  
        improve efficiency, and scale smarter with automation.
      </motion.p>

      {/* Statistics Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          { value: "100+", label: "Businesses Automated" },
          { value: "500,000+", label: "Tasks Automated Annually" },
          { value: "3x", label: "Faster Operations with AI" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#00C4FF]">
              {stat.value}
            </h3>
            <p className="text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-To-Action */}
      <motion.p
        className="mt-12 text-lg font-semibold text-[#003F64]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        📢 Let’s build your automation strategy today!
      </motion.p>
    </section>
  );
};

export default Mission;
