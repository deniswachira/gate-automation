import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import dish from "../../assets/dish.png";
import telescope from "../../assets/telescope.png";
import WeHelpWithHeroImage from "../../assets/WeHelpWithHeroImage.png";

const features = [
  { id: 1, img: dish, text: "Acquire New Customers" },
  { id: 2, img: telescope, text: "Retarget Interested Customers" },
  { id: 3, img: dish, text: "Reengage Lapsed Customers" },
];

const WeHelpWithHero = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section ref={ref} className="py-1">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side - Heading & Content */}
        <div>
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#0A2C47]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Direct Mail Campaigns for Every Stage of Your Marketing Funnel
          </motion.h1>

          <motion.div
            className="mt-6 space-y-4"
            role="list"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="flex items-center gap-4"
                role="listitem"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <img src={feature.img} alt={feature.text} className="w-10 h-9" />
                <p className="text-lg font-semibold text-[#0A2C47]">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="mt-8 px-6 py-3 bg-[#00C4FF] text-white font-semibold rounded-full shadow-md hover:bg-[#009ACD] transition"
            onClick={() => navigate("/get-postie")}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Book A Demo
          </motion.button>
        </div>

        {/* Right Side - Hero Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={WeHelpWithHeroImage}
            alt="Hero Illustration"
            className="max-w-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WeHelpWithHero;
