import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Gate Automation transformed our business. We cut our admin time by 60%!",
    author: "Jane Doe, Operations Manager",
  },
  {
    text: "Our workflows are 3x faster, and we’ve eliminated human errors.",
    author: "John Smith, CEO of TechFlow",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="px-6 md:px-20 py-16 text-[#F8FBFE]  bg-[#005A87] flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Real Stories. Real Success.
      </motion.h2>

      {/* Testimonials Grid */}
      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
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
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-[#00C4FF] flex flex-col"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <Quote size={32} className="text-[#00C4FF]" />
            <p className="mt-3 text-lg font-medium text-[#004B80]">"{testimonial.text}"</p>
            <div className="mt-4 flex items-center space-x-2">
              <Star size={16} className="text-[#FFD700]" />
              <Star size={16} className="text-[#FFD700]" />
              <Star size={16} className="text-[#FFD700]" />
              <Star size={16} className="text-[#FFD700]" />
              <Star size={16} className="text-[#FFD700]" />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-600">{testimonial.author}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.button
        className="mt-8 px-6 py-3 flex items-center bg-[#46aece] text-[#003F64] font-semibold rounded-lg cursor-pointer shadow-lg hover:bg-[#009ec2] transition-all"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        See More Success Stories <ArrowRight size={20} className="ml-2" />
      </motion.button>
    </section>
  );
};

export default Testimonials;
