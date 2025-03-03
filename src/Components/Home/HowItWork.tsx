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
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-8  text-gray-900 font-[\'Maven Pro \']"
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
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <Settings size={20} className="text-[#FF8200] " />
            <p>
              <span className="font-semibold font-[\'Maven Pro Black\']"> Step 1: Identify Bottlenecks</span><br />
              We analyze your current workflows to find inefficiencies that slow down your business.
            </p>
          </motion.div>

          {/* Step 2: Build Custom Automations */}
          <motion.div
            className="flex items-center space-x-3"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <Bolt size={20} className="text-[#FF8200]" />
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
            <Link size={20} className="text-[#FF8200]" />
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
            <TrendingUp size={20} className="text-[#FF8200]" />
            <p>
              <span className="font-semibold">Step 4: Scale with Ease</span><br />
              Optimize processes, reduce errors, and accelerate growth.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="mt-6 px-6 py-3 flex items-center !bg-[#FF8200] !text-gray-900 font-semibold rounded-lg cursor-pointer shadow-lg hover:bg-[#009ec2] transition-all"
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
