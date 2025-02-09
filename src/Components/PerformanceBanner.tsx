import { Link } from "react-router-dom";

const PerformanceBanner = () => {
    return (
      <div className="bg-gradient-to-r from-[#004C75] to-[#003F64] text-white text-center py-10 px-4  mt-10">
        <span className="text-4xl">📬</span>
        <h2 className="text-xl md:text-2xl font-bold mt-2 mb-4">
          Meet Your Newest Performance Channel: Direct Mail.
        </h2>
        <Link to="#" className="bg-[#00C4FF] text-white text-xl font-medium px-6 py-2 rounded-full shadow-md  transition">
          Book A demo
        </Link>
      </div>
    );
  };
  
  export default PerformanceBanner;
  