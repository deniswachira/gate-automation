import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImg from "../../assets/home.png";
import { Link } from "react-router-dom";

export default function PricingHero() {
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
    <section className="flex justify-center items-center py-16 px-6 bg-[#003F64] text-white">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl">
        {/* Left: Text Section */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Flexible Plans to Fit Your Needs
          </motion.h1>

          {/* Subtitle */}
          <p className="text-lg mt-3 text-gray-200">
            Whether you’re a small business, a growing enterprise, or a large organization, 
            <strong> Gate Automation</strong> offers AI-driven automation solutions that scale with you. 
            No hidden fees. No long-term contracts. Just seamless automation.
          </p>

          {/* Dynamic Changing Text */}
          <div className="relative overflow-hidden h-14 w-fit mt-4">
            <motion.h1
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-xl font-semibold bg-[#00C4FF] text-[#003F64] px-4 py-2 rounded-md inline-block shadow-lg"
            >
              {textOptions[index]}
            </motion.h1>
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/pricing"
              className="px-6 py-3 text-lg font-semibold bg-[#00C4FF] text-[#003F64] rounded-full shadow-md transition-all hover:shadow-lg"
            >
              📢 Start Automating Today →
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={heroImg} className="max-w-sm rounded-lg drop-shadow-lg" alt="Automation" />
        </motion.div>
      </div>
    </section>
  );
}
