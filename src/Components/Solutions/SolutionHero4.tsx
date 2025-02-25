import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import home from "../../assets/home.png";

const SolutionHero4 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-6 md:px-20 py-16 text-[#003F64]"
    >
      {/* H1 Title at the Top */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Proposal & Document Management
      </motion.h1>

      {/* Content Container */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
        {/* Left: Text & Bullet Points */}
        <motion.div
          className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Simplify Document Workflows with AI
          </h2>

          {/* Key Benefits Section */}
          <motion.div
            className="mt-4 space-y-3"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              { icon: "✍️", text: "Proposal & Contract Automation – Auto-generate, track, and e-sign." },
              { icon: "📄", text: "Lead Intake & Form Processing – Collect & process data in real time." },
              { icon: "📊", text: "Reporting & Compliance – Ensure accuracy with automated audits." },
            ].map((item, index) => (
              <motion.p
                key={index}
                className="flex items-center gap-2 text-lg font-medium"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-2xl">{item.icon}</span>
                {item.text}
              </motion.p>
            ))}
          </motion.div>

          {/* CTA Statement with Scale Effect */}
          <motion.p
            className="mt-6 font-semibold text-lg btn text-white bg-[#00C4FF] px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer hover:bg-white hover:text-[#003F64]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Automate Your Documents →
          </motion.p>
        </motion.div>

        {/* Right: Illustration with Scroll Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={home}
            alt="Document Automation"
            className="w-80 md:w-96 drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionHero4;
