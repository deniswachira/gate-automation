import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import astronautImage from "../assets/home.png";
import smartTargetingIcon from "../assets/home.png";
import executionIcon from "../assets/home.png";
import measurementIcon from "../assets/home.png";
import lookalikeImg from "../assets/home.png";
import customAudienceImg from "../assets/home.png";
import crmAttributesImg from "../assets/home.png";
import SmartTargeting from "../Components/CapabilitiesTab/SmartTargeting";

const CapabilitiesTargeting = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Container className="bg-[#0A2C47]">
      <Navbar />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Run Direct Mail Campaigns Like a Digital Marketer
            </h1>
            <div className="space-y-2 text-lg">
              <p className="text-white"><span className="text-[#00C4FF] font-bold">01</span> Target the Right Customers</p>
              <p className="text-white"><span className="text-[#00C4FF] font-bold">02</span> Deploy in Days</p>
              <p className="text-white"><span className="text-[#00C4FF] font-bold">03</span> Track Real-Time Performance</p>
            </div>
            <Link
              to="get-postie"
              className="bg-[#00C4FF] text-white font-medium px-6 py-2 rounded-full text-center"
            >
              Book A Demo
            </Link>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img src={astronautImage} alt="Astronaut Floating" className="max-w-md" />
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="bg-[#F8F9FA] py-16 px-6">
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {[ 
              { icon: smartTargetingIcon, title: "Smart Targeting", desc: "Reach Customers You Won’t Find Anywhere Else", bg: "bg-[#0A2C47] text-white" },
              { icon: executionIcon, title: "Simple Execution", desc: "Deploy Campaigns in Days, Not Months", bg: "" },
              { icon: measurementIcon, title: "Strong Measurement", desc: "Track Campaign Performance in Real-Time", bg: "" }
            ].map(({ icon, title, desc, bg }, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${bg}`}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                <img src={icon} alt={title} className="mx-auto h-16 mb-4" />
                <h3 className={`text-lg font-semibold ${bg ? "text-[#00C4FF]" : "text-gray-700"}`}>{title}</h3>
                <p className={`text-sm ${bg ? "" : "text-gray-600"}`}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Smart Targeting Section */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-center text-3xl font-bold text-[#0A2C47] mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              With Smart Targeting You Can:
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
            >
              {[ 
                { img: lookalikeImg, title: "Create Lookalike Audiences", desc: "Use industry-leading data sets to build lookalike audiences from your best-performing customer segments." },
                { img: customAudienceImg, title: "Build Custom Audiences", desc: "Use industry-leading data sets to build custom audiences from 1000s of demographic, transactional, and behavioral attributes." },
                { img: crmAttributesImg, title: "Select Attributes from Your CRM", desc: "Convert your 1st party CRM data into a working data source to easily build and mail custom audiences from your CRM attributes." }
              ].map(({ img, title, desc }, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                >
                  <img src={img} alt={title} className="mx-auto mb-4 rounded-lg" />
                  <h3 className="text-lg font-semibold text-[#0A2C47]">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <SmartTargeting />
        <Footer />
      </motion.div>
    </Container>
  );
};

export default CapabilitiesTargeting;
