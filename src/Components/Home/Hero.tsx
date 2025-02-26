import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImg from "../../assets/home.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const textOptions = [
    "Reduce workload with intelligent workflows",
    "Connect all your tools seamlessly",
    "Automate repetitive tasks & scale your business",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textOptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center py-16 px-6">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl">
        {/* Left: Text Section */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title with Fade-in Animation */}
          <motion.h1
            className="text-4xl font-bold text-[#003F64] leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Work Smarter, Scale Faster. Automate Everything.
          </motion.h1>

          {/* Dynamic Changing Text */}
          <div className="relative overflow-hidden h-14 w-fit mt-3">
            <motion.h1
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-xl font-bold text-white bg-[#003F64] px-4 py-1 rounded-md inline-block shadow-lg"
            >
              {textOptions[index]}
            </motion.h1>
          </div>

          {/* Description */}
          <p className="text-2xl font-semibold text-[#003F64] mt-2 mb-7">
            Your business is losing <strong>1000+ hours</strong> yearly on manual workflows, disconnected systems, and
            repetitive tasks. It's time to eliminate inefficiencies and focus on growth with AI-powered automation.
          </p>

          {/* CTA Button with Hover Animation */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="get-in-touch"
              className="mt-10 px-6 py-3 text-lg font-semibold bg-[#00C4FF] rounded-full shadow-md transition-all hover:shadow-lg"
            >
              Get Started Today 🚀
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={heroImg} className="max-w-sm rounded-lg drop-shadow-lg" alt="Hero" />
        </motion.div>
      </div>
    </div>
  );
}
