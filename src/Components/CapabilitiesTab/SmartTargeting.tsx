import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import caseStudyImage from "../../assets/home.png"; // Replace with actual image path

const caseStudies = [
  {
    id: 1,
    tags: ["APPAREL", "REENGAGEMENT"],
    title: "How MeUndies Used Direct Mail Marketing to Reengage Lapsed Customers",
    features: [
      "Integrate with your CRM",
      "Enjoy Automated Printing",
      "Personalize with Ease",
      "See Results in Real-Time",
    ],
    roas: "1,195%",
    cvr: "5%",
    image: caseStudyImage, // Replace with actual image
  },
];

const SmartTargeting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const { tags, title, features, roas, cvr, image } = caseStudies[currentIndex];

  return (
    <motion.section
      className="bg-[#EAF4FA] py-12 px-6 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#0A2C47] text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Smart Targeting in Action
        </motion.h2>

        {/* Navigation Arrows (Positioned Above on Desktop) */}
        <div className="hidden md:flex absolute top-0 right-0 space-x-4">
          <button
            onClick={prevSlide}
            className="border border-[#00C4FF] text-[#00C4FF] p-2 rounded-full shadow-md hover:bg-[#00C4FF] hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="border border-[#00C4FF] text-[#00C4FF] p-2 rounded-full shadow-md hover:bg-[#00C4FF] hover:text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Case Study Container */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Side - Image */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt="Case Study"
              className="rounded-lg shadow-lg w-48 h-48 md:w-60 md:h-60 object-cover"
            />
          </motion.div>

          {/* Right Side - Case Study Card */}
          <motion.div
            className="bg-[#00C4FF] text-white p-6 md:p-10 rounded-lg w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white text-[#00C4FF] px-3 py-1 text-xs font-bold rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-4">{title}</h3>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {features.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>

            {/* Metrics & Button */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold">{roas}</p>
                <p className="text-sm">ROAS</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold">{cvr}</p>
                <p className="text-sm">CVR</p>
              </div>
              <button className="bg-white text-[#00C4FF] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition flex items-center">
                Read Case Study →
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="border border-[#00C4FF] text-[#00C4FF] p-2 rounded-full shadow-md hover:bg-[#00C4FF] hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="border border-[#00C4FF] text-[#00C4FF] p-2 rounded-full shadow-md hover:bg-[#00C4FF] hover:text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default SmartTargeting;
