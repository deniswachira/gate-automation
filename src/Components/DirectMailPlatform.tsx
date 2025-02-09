import { ArrowRight, Globe, RefreshCw, Users } from "lucide-react";
import home from "../assets/home.png";

const DirectMailPlatform = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-[#003F64] text-white">
      {/* Left Side: Text & Features */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Ready for the most advanced direct mail platform on the planet?
        </h2>

        <p className="mt-4 text-lg font-semibold">We Help You With:</p>

        {/* Features List */}
        <div className="mt-4 space-y-4">
          <div className="bg-[#004B80] p-4 rounded-lg shadow-md">
            <h3 className="flex items-center text-lg font-semibold">
              <Users size={20} className="mr-2 text-[#00C4FF]" /> Prospecting
            </h3>
            <p className="text-sm mt-1 text-gray-300">
              Our machine learning engine creates lookalike models from your best-performing 
              customer segments, helping you reach customers unavailable on other channels.
            </p>
            <button className="mt-3 flex items-center text-[#00C4FF] hover:underline">
              Learn More <ArrowRight size={16} className="ml-1" />
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <Globe size={20} className="text-[#00C4FF]" />
            <p>
              <span className="font-semibold">Website Retargeting</span> <br />
              Convert More Website Visits
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <RefreshCw size={20} className="text-[#00C4FF]" />
            <p>
              <span className="font-semibold">CRM Reengagement</span> <br />
              Maximize Lifetime Value
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={home} // Change this to your actual image path
          alt="Direct Mail Illustration"
          className="w-80 md:w-96"
        />
      </div>
    </section>
  );
};

export default DirectMailPlatform;
