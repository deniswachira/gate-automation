import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Link, BarChart, Settings } from "lucide-react";

const WhyBusinessChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Features List
  const features = [
    {
      icon: <Zap size={40} className="text-[#00C4FF]" />,
      title: "AI-Powered Efficiency",
      description: "Replace manual tasks with intelligent workflows and automation.",
    },
    {
      icon: <Link size={40} className="text-[#00C4FF]" />,
      title: "Seamless Integrations",
      description: "Connect all your business tools effortlessly in one system.",
    },
    {
      icon: <BarChart size={40} className="text-[#00C4FF]" />,
      title: "Scalable Solutions",
      description: "Automate one process or scale up to your entire business.",
    },
    {
      icon: <Settings size={40} className="text-[#00C4FF]" />,
      title: "No-Code & Customization",
      description: "Automation built your way—fully customizable, no coding required.",
    },
  ];

  return (
    <section
      ref={ref}
      className="px-6 md:px-20 py-16 bg-[#F8FAFC] text-[#003F64]"
    >
      {/* Section Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Why Businesses Choose Us
      </motion.h1>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon */}
            <div className="mb-4">{feature.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>

            {/* Description */}
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.p
        className="mt-10 text-center text-lg font-semibold text-[#003F64]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        📢 Join businesses saving <span className="text-[#00C4FF] font-bold">500+ hours</span> yearly with automation!
      </motion.p>
    </section>
  );
};

export default WhyBusinessChooseUs;
