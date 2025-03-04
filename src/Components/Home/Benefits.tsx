import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, CheckCircle, DollarSign, BarChart3 } from "lucide-react";
import home from "../../assets/home.png";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 text-gray-900 font-[\'Maven Pro\'] bg-gray-50"
    >
      {/* Left Side: Benefits Description */}
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
          Real Automation. Real Impact.
        </motion.h2>

        {/* Benefits List */}
        <motion.div
          className="mt-6 space-y-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Benefit 1: Reduce Workload */}
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle size={24} className="text-[#FF8200]" />
            <p className="text-lg leading-relaxed">
              Reduce workload by <span className="font-bold text-[#FF8200]">70%</span> – AI-powered automation takes over manual tasks.
            </p>
          </motion.div>

          {/* Benefit 2: Increase Productivity */}
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp size={24} className="text-[#FF8200]" />
            <p className="text-lg leading-relaxed">
              Increase productivity by <span className="font-bold text-[#FF8200]">3x</span> – Faster workflows, better efficiency.
            </p>
          </motion.div>

          {/* Benefit 3: Cut Costs */}
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <DollarSign size={24} className="text-[#FF8200]" />
            <p className="text-lg leading-relaxed">
              Cut operational costs by <span className="font-bold text-[#FF8200]">50%</span> – Reduce errors & eliminate redundancies.
            </p>
          </motion.div>

          {/* Benefit 4: Data-Driven Growth */}
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <BarChart3 size={24} className="text-[#FF8200]" />
            <p className="text-lg leading-relaxed">
              Leverage <span className="font-bold text-[#FF8200]">data-driven insights</span> – Make informed decisions faster.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="mt-6 px-6 py-3 flex items-center !bg-[#FF8200] text-gray-900 font-semibold rounded-lg cursor-pointer shadow-lg hover:bg-[#009ec2] transition-all"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Start Seeing Results <ArrowRight size={20} className="ml-2" />
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
          alt="Automation Benefits"
          className="w-80 md:w-96"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default Benefits;
