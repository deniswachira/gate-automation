import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import home from "../../assets/home.png";

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-[#003F64]"
    >
      {/* Section Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        What We Do
      </motion.h1>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left: Illustration */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={home}
            alt="Automation Solutions"
            className="w-80 md:w-96"
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
            We design, implement, and optimize automation workflows tailored to your business needs.
          </h2>

          {/* Automation Solutions List */}
          <motion.ul
            className="mt-6 space-y-3 text-gray-100"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              "Sales & CRM Automation – Lead management, email sequences & follow-ups",
              "Marketing Automation – AI-powered campaigns, segmentation & retargeting",
              "Finance & Operations – Automated invoicing, approvals & reporting",
              "Project Management – Task automation, team collaboration & tracking",
            ].map((solution, index) => (
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
                <span className="text-lg">{solution}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            className="mt-6 px-6 py-3 flex items-center bg-[#00C4FF] text-[#003F64] font-semibold rounded-lg cursor-pointer shadow-lg hover:bg-[#009ec2] transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Explore our automation solutions <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
