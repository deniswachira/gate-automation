import { motion } from "framer-motion";
import React from "react";

interface BusinessProcessProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  reverse?: boolean;
}

const WhyGateSection: React.FC<BusinessProcessProps> = ({
  title,
  description,
  features,
  ctaText,
  ctaLink,
  imageUrl,
  reverse = false,
}) => {
  return (
    <motion.section
      className={`flex flex-col md:flex-row items-center  px-4 py-1 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <motion.h3
          className="text-3xl font-bold text-gray-900 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600"></span> {title}
        </motion.h3>
        <p className="text-lg text-gray-700">{description}</p>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-lg text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
               {feature}
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <a
          href={ctaLink}
          className="inline-block mt-6 px-6 py-3  text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          {ctaText} →
        </a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <motion.img
          src={imageUrl}
          alt={title}
          className="max-w-full rounded-lg "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.section>
  );
};

export default WhyGateSection;
