import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import home from "../../assets/home.png";

const AboutHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 text-[#003F64]"
    >
      {/* Left Side: Text Content */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Who We Are
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Gate Automation is a leading automation solutions provider, helping businesses streamline operations, reduce inefficiencies, and scale faster. We specialize in AI-powered, no-code automation.
        </motion.p>

        {/* Bullet Points */}
        <motion.ul
          className="mt-4 space-y-2 text-gray-800 font-medium"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
            🔹 Founded to simplify business automation
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
            🔹 Trusted by businesses of all sizes
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
            🔹 Driven by innovation, efficiency, and growth
          </motion.li>
        </motion.ul>

        {/* CTA Button */}
        <motion.button
          className="mt-6 px-6 py-3 flex items-center bg-[#46aece] text-[#003F64] font-semibold rounded-lg cursor-pointer shadow-lg hover:bg-[#009ec2] transition-all"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          See how we can help your business <ArrowRight size={20} className="ml-2" />
        </motion.button>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <motion.img
          src={home}
          alt="Gate Automation"
          className="w-80 md:w-96"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default AboutHero;
