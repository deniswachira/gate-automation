import { Clock } from "lucide-react";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import flower from "../assets/flower.jpg";
import PerformanceBanner from "../Components/PerformanceBanner";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();
  return (
    <Container className="flex flex-col gap-4">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-[#003F64] text-center">Learn With Postie</h1>
        <div className="flex justify-center gap-2 mt-4">
          {["All", "Case Studies", "Blogs", "E-books"].map((category) => (
            <button
              key={category}
              className="btn btn-outline font-medium px-4 py-1 rounded-full shadow-sm text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Latest Banner Section */}
        <div className="mt-6">
          <h2 className="text-xs text-gray-500">Latest</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            <div className="relative">
              <img src={flower} alt="Featured" className="w-full h-56 object-cover rounded-lg" />
              <span className="absolute top-2 left-2 bg-white text-xs font-bold px-2 py-1 rounded-md">
                CASE STUDY
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs text-[#00C4FF] font-semibold">
                SUBSCRIPTION SERVICES • CREATIVE TESTING
              </span>
              <h1 className="text-xl font-bold mt-1">How a Floral Company Tested Creatives</h1>
              <div className="flex items-center gap-1 text-gray-600 mt-1 text-xs">
                <Clock size={14} />
                <p>2 Min Read</p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-gray-300 my-6" />

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              id:1,
              img: flower,
              tag: "RESTAURANT • PROSPECTING",
              title: "How a Restaurant Gained New Customers at Several Locations",
            },
            {
              id:2,
              img: flower,
              tag: "RETAIL • CRM OPTIMIZATION",
              title: "How an Outdoor Retail Brand Utilized CRM Optimization",
            },
            {
              id:3,
              img: flower,
              tag: "RETAIL • PROSPECTING",
              title: "How a Retail Brand Used First-Party Data for Prospecting",
            },
            {
              id:4,
              img: flower,
              tag: "RETAIL • PROSPECTING",
              title: "How a Retail Brand Used First-Party Data for Prospecting",
            },
            {
              id:5,
              img: flower,
              tag: "RETAIL • PROSPECTING",
              title: "How a Retail Brand Used First-Party Data for Prospecting",
            },
            {
              id:6,
              img: flower,
              tag: "RETAIL • PROSPECTING",
              title: "How a Retail Brand Used First-Party Data for Prospecting",
            },
          ].map((item, id) => (
            <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative cursor-pointer" onClick={() => navigate(`/blog-details/${id}`)}>
                <img src={item.img} alt="" className="w-full h-48 object-cover" />
                <span className="absolute top-2 left-2 bg-white text-xs font-bold px-2 py-1 rounded-md">
                  CASE STUDY
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
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">Prev</button>
          <span className="text-gray-600 text-sm">Page 1 of 5</span>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">Next</button>
        </div>
      </div>
      <PerformanceBanner />
      <Footer/>
    </Container>
  );
};

export default Learn;
