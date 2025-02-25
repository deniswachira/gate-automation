import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WeHelpWithSection from "../WeHelpWithSection";
import WeHelpWithImage2 from "../../assets/WeHelpWithImage2.png";

const WeHelpWithProspectingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-blue-50 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title Section */}
      <motion.h2
        className="text-3xl font-bold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We Help With:
      </motion.h2>

      {/* Main Container with Margins */}
      <div className="container mx-auto px-6">
        <motion.div
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
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            <WeHelpWithSection
              id="01"
              title="Prospecting"
              description="Too many customers are a good thing! These top-of-funnel campaigns..."
              useCases={[
                "Build lookalike models from your best-performing customer segments.",
                "Target customers based on key life events.",
                "Reach customers around a specific geographic location.",
              ]}
              button1Text="Book A Demo"
              button1Link="#"
              button2Text="Postie Prospecting Power"
              button2Link="#"
              imageUrl={WeHelpWithImage2}
            />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ delay: 0.3 }}
          >
            <WeHelpWithSection
              id="02"
              title="Website Retargeting"
              description="Don't let website visits slip away. These highly effective mid-funnel campaigns..."
              useCases={[
                "Browsed but not bought campaigns.",
                "Abandoned cart campaigns.",
                "Post purchase Thank You and upsell campaigns.",
              ]}
              button1Text="Book A Demo"
              button1Link="#"
              button2Text="Read Case Study"
              button2Link="#"
              imageUrl={WeHelpWithImage2}
              reverse
            />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ delay: 0.6 }}
          >
            <WeHelpWithSection
              id="03"
              title="CRM Reengagement"
              description="Increase lifetime value. These bottom-of-funnel campaigns drive the highest conversion rates..."
              useCases={[
                "Launch new products or seasonal campaigns.",
                "Reach email flow non-openers or unsubscribers.",
                "Win back unengaged & lapsed customers.",
              ]}
              button1Text="Book A Demo"
              button1Link="#"
              button2Text="Postie Reengagement Power"
              button2Link="#"
              imageUrl={WeHelpWithImage2}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeHelpWithProspectingSection;
