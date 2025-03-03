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
    <div className="flex justify-center items-center py-10 px-10 w-full bg-gray-50">
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-7xl w-full">
        {/* Left: Text Section */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 leading-snug font-[\'Maven Pro\']"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Work Smarter, Scale Faster.<br /> Automate Everything.
          </motion.h1>

          {/* Dynamic Changing Text */}
          <div className="relative overflow-hidden h-14 w-fit mt-4">
            <motion.h2
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-2xl font-semibold text-[#FF8200] font-[\'Maven Pro\']"
            >
              {textOptions[index]}
            </motion.h2>
          </div>

          {/* Description */}
          <p className="text-xl font-medium text-gray-700 mt-3 mb-8 leading-relaxed font-[\'Maven Pro\']">
            Your business is losing <strong>1000+ hours</strong> yearly on manual workflows, disconnected systems, and
            repetitive tasks. It's time to eliminate inefficiencies and focus on growth with AI-powered automation.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="get-in-touch"
              className="btn btn-lg !text-gray-900 mt-10 px-6 py-3 text-lg font-semibold bg-[#FF8200]  rounded-full shadow-md transition-all hover:shadow-lg"
            >
              Get Started Today 
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={heroImg} className="max-w-md rounded-lg drop-shadow-lg" alt="Hero" />
        </motion.div>
      </div>
    </div>
  );
}
