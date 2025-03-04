import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";

const WhyAutomate = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-6 md:px-32 py-8 bg-gray-50"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 leading-snug font-[\'Maven Pro\']"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Why Automate?
      </motion.h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={home}
            alt="Why Automate"
            className="w-96 md:w-[450px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 leading-snug">
            Your Business is Wasting Time & Money on Manual Work
          </h2>

          {/* Key Stats */}
          <motion.div
            className="mt-6 space-y-3 text-gray-700 leading-relaxed"
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

          {/* Benefits List */}
          <motion.ul
            className="mt-6 space-y-3 text-gray-700"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              "Eliminate manual tasks - Let AI handle the busywork",
              "Optimize operations - Automate workflows across all platforms",
              "Scale without limits - Work smarter, not harder",
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
                <CheckCircle size={24} className="text-[#FF8200]" />
                <span className="text-lg">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Statement */}
          <motion.p
            className="mt-8 text-[#FF8200] font-semibold text-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
             to="get-in-touch"
             className="btn btn-lg !text-gray-900 mt-10 px-6 py-3 text-lg font-semibold bg-[#FF8200]  rounded-full shadow-md transition-all hover:shadow-lg"
           >
          Start Automating Now →
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAutomate;
