import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb } from "lucide-react";

const OurVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="px-6 md:px-20 py-20 bg-[#003F64] text-white flex flex-col items-center text-center"
    >
      {/* Section Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Vision for the Future
      </motion.h1>

      {/* Icon */}
      <motion.div
        className="mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Lightbulb size={60} className="text-[#00C4FF]" />
      </motion.div>

      {/* Vision Statement */}
      <motion.p
        className="text-xl md:text-2xl max-w-3xl leading-relaxed text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We're on a mission to make automation accessible for every business.  
        As technology evolves, we continue to innovate—integrating  
        <span className="font-semibold text-white"> AI, machine learning,</span> and  
        <span className="font-semibold text-white"> smart workflows</span>  
        to help businesses stay ahead of the curve.
      </motion.p>

      {/* Call-To-Action */}
      <motion.p
        className="mt-8 text-xl font-bold text-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        💡 Ready to future-proof your business? Let’s automate.
      </motion.p>
    </section>
  );
};

export default OurVision;
