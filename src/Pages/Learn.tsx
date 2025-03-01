import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import flower from "../assets/flower.jpg";
import post from "../assets/meet-the-postie.jpg";
import post1 from "../assets/home.png";
import PerformanceBanner from "../Components/PerformanceBanner";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();

  return (
    <Container className="flex flex-col gap-4">
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-[#003F64] text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Learn With Gate Automation
        </motion.h1>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              id: 1,
              img: post,
              tag: "AUTOMATION",
              title: "When to Automate? The Right Time to Embrace Efficiency",
            },
            {
              id: 2,
              img: flower,
              tag: "RETAIL",
              title: "Why Do Businesses Need to Automate",
            },
            {
              id: 3,
              img: post,
              tag: "AUTOMATION",
              title: "When to Automate? The Right Time to Embrace Efficiency",
            },
            {
              id: 4,
              img: post,
              tag: "AUTOMATION",
              title: "Why Do Businesses Need to Automate",
            },
            {
              id: 5,
              img: flower,
              tag: "MARKETING",
              title: "When to Automate? The Right Time to Embrace Efficiency",
            },
            {
              id: 6,
              img: post1,
              tag: "MARKETING",
              title: "When to Automate? The Right Time to Embrace Efficiency",
            },
          ].map((item, id) => (
            <motion.div
              key={id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05, // Slightly enlarge on hover
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", // Add shadow effect
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative cursor-pointer" onClick={() => navigate(`/blog-details/${id}`)}>
                <img src={item.img} alt="" className="w-full h-48 object-cover" />
                <span className="absolute top-2 left-2 bg-white text-xs font-bold px-2 py-1 rounded-md">
                  AUTOMATION
                </span>
              </div>
              <div className="p-3 cursor-pointer" onClick={() => navigate(`/blog-details/${id}`)}>
                <span className="text-xs text-[#00C4FF] font-semibold">{item.tag}</span>
                <h2 className="text-sm font-bold text-[#003F64] mt-1">{item.title}</h2>
                <div className="flex items-center gap-1 text-gray-600 mt-1 text-xs">
                  <Clock size={14} />
                  <p>2 Min Read</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <PerformanceBanner />
      <Footer />
    </Container>
  );
};

export default Learn;
