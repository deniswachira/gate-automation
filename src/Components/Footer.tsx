import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white  py-10 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section: Logo & Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
          <img src={logo} alt="Postie Logo" className="h-8" />
          </div>
          <div className="flex items-center text-gray-600 space-x-2">
            <MapPin size={16} className="text-[#00C4FF]" />
            <p className="text-sm">3616 Far West Blvd, STE 117 #103, Austin, TX 78731</p>
          </div>
          <div className="flex items-center text-gray-600 space-x-2">
            <Mail size={16} className="text-[#00C4FF]" />
            <p className="text-sm">info@postie.com</p>
          </div>
          <div className="flex items-center text-gray-600 space-x-2">
            <Phone size={16} className="text-[#00C4FF]" />
            <p className="text-sm">888-992-4935</p>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 md:mt-0 text-sm text-[#003F64] font-medium">
          <div className="flex flex-col gap-2">
            <a href="#">Prospecting</a>
            <a href="#">Retargeting</a>
            <a href="#">Retention</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Capabilities</a>
            <a href="#">Learn</a>
            <a href="#">About Us</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="font-semibold">Get Postie</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="flex justify-end mt-6">
        <a href="#" className="bg-white border rounded-full p-2 shadow-md hover:bg-gray-100 transition">
          🔼
        </a>
      </div>
    </footer>
  );
};

export default Footer;
