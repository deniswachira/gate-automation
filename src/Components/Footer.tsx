import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo/gate-automation-No-Bg.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#F8FBFE] to-white py-14 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Logo & Contact Info */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Gate Automation Logo" className="h-14" />
          </div>
          <div className="flex items-center text-gray-600 space-x-2">
            <MapPin size={18} className="text-[#00C4FF]" />
            <p className="text-sm">3616 Far West Blvd, STE 117 #103, Austin, TX 78731</p>
          </div>
          <div className="flex items-center text-gray-600 space-x-2">
            <Mail size={18} className="text-[#00C4FF]" />
            <p className="text-sm">info@gateautomation.com</p>
          </div>
          <div className="flex items-center text-gray-600 space-x-2">
            <Phone size={18} className="text-[#00C4FF]" />
            <p className="text-sm">888-992-4935</p>
          </div>
        </motion.div>

        {/* Right Section: Links */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 md:mt-0 text-sm text-[#003F64] font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-[#00C4FF] transition duration-300">Services</a>
            <a href="#" className="hover:text-[#00C4FF] transition duration-300">Why Gate</a>
            <a href="#" className="hover:text-[#00C4FF] transition duration-300">Services</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-[#00C4FF] transition duration-300">Solutions</a>
            <a href="#" className="hover:text-[#00C4FF] transition duration-300">Pricing</a>
            <a href="#" className="hover:text-[#00C4FF] transition duration-300">About Us</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="font-semibold hover:text-[#00C4FF] transition duration-300">Get Postie</a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.div
        className="fixed bottom-6 right-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#00C4FF] text-white p-3 rounded-full shadow-md hover:scale-110 transition-all"
        >
          <ArrowUp size={24} />
        </button>
      </motion.div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-16 fill-[#F8FBFE]">
          <path
            d="M0,50 C300,150 900,-50 1200,50 L1200,100 L0,100 Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
