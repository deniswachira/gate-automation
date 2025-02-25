import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import home from "../../assets/home.png";

const SolutionHero3 = () => {
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
        Business Operations & IT Automation
      </motion.h1>

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
            alt="Automate Business"
            className="w-80 md:w-96"
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
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Eliminate Manual Work Across Your Organization
          </h2>

          {/* Key Benefits Section */}
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
              { icon: "📑", text: "Order & Purchase Automation - Auto-generate contracts & invoices." },
              { icon: "🔄", text: "Workflow & Task Management - Assign, track, and optimize with AI." },
              { icon: "🔒", text: "IT & Security Automation - Streamline access controls & approvals." },
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

          {/* CTA Statement with Scale Effect */}
          <motion.p
            className="mt-6 btn text-blue-400 font-semibold text-lg cursor-pointer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, -2, 2, 0], // Slight wiggle
              transition: { duration: 0.5 },
            }}
          >
            Optimize Your Operations →
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionHero3;
