import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Settings, Bolt, Link, TrendingUp } from "lucide-react";
import home from "../../assets/home.png";

const HowItWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16  text-[#003F64]"
    >
      {/* Left Side: Text & Process Steps */}
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
          Simple. Smart. Seamless.
        </motion.h2>

        <motion.p
          className="mt-4 text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          How It Works:
        </motion.p>

        {/* Process Steps */}
        <motion.div
          className="mt-4 space-y-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Step 1: Identify Bottlenecks */}
          <motion.div
            className="bg-[#004B80] p-4 rounded-lg shadow-md"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="flex items-center text-lg font-semibold text-white">
              <Settings size={20} className="mr-2 text-white" />
              Step 1: Identify Bottlenecks
            </h3>
            <p className="text-sm mt-1 text-gray-300">
              We analyze your current workflows to find inefficiencies that slow down your business.
            </p>
          </motion.div>

          {/* Step 2: Build Custom Automations */}
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <Bolt size={20} className="text-[#00C4FF]" />
            <p>
              <span className="font-semibold">Step 2: Build Custom Automations</span><br />
              AI-driven solutions tailored to your needs.
            </p>
          </motion.div>

          {/* Step 3: Connect & Integrate */}
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <Link size={20} className="text-[#00C4FF]" />
            <p>
              <span className="font-semibold">Step 3: Connect & Integrate</span><br />
              Sync all your business tools effortlessly.
            </p>
          </motion.div>

          {/* Step 4: Scale with Ease */}
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp size={20} className="text-[#00C4FF]" />
            <p>
              <span className="font-semibold">Step 4: Scale with Ease</span><br />
              Optimize processes, reduce errors, and accelerate growth.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="mt-6 px-6 py-3 flex items-center bg-[#46aece] text-[#003F64] font-semibold rounded-lg cursor-pointer shadow-lg hover:bg-[#009ec2] transition-all"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          See How It Works <ArrowRight size={20} className="ml-2" />
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
          alt="Automation Process"
          className="w-80 md:w-96"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default HowItWork;
