import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImg from "../assets/home.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const textOptions = ["Lookalike Audiences", "Website Retargeting", "Real Time KPIs"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textOptions.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-base-200 py-16 px-6">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl">
        {/* Text Section */}
        <div className="text-left">
          <h1 className="text-5xl font-bold text-[#003F64] leading-tight">
            Direct Mail with
          </h1>
          {/* Sliding Text Wrapper */}
          <div className="relative overflow-hidden h-14 mt-2 w-fit">
            <motion.h1
              key={index}
              initial={{ x: "-100%" }} 
              animate={{ x: "0%" }} 
              exit={{ x: "100%" }} 
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="text-5xl font-bold text-white bg-[#003F64] px-4 py-1 rounded-md inline-block"
            >
              {textOptions[index]}
            </motion.h1>
          </div>
          <p className="text-3xl text-bold text-[#003F64] mt-4 mb-7">
            Run powerful Direct Mail campaigns just like you run digital ads — with the push of a button.
          </p>
          <Link to="#" className="bg-[#00C4FF] text-white text-xl font-medium px-6 py-2 rounded-full shadow-md  transition">
          Book A demo
        </Link>
        </div>
        <div>
          <img src={heroImg} className="max-w-sm rounded-lg" alt="Hero" />
        </div>
      </div>
    </div>
  );
}