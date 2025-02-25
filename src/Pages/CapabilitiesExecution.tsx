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

const CapabilitiesExecution = () => {
  return (
    <>
      <Container className="bg-[#0A2C47]">
        <Navbar />
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
          <div className="md:w-1/2 space-y-6">
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
          </div>
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img src={astronautImage} alt="Astronaut Floating" className="max-w-md" />
          </div>
        </div>

        <div className="bg-[#F8F9FA] py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

            <div className="p-6 rounded-lg shadow-lg">
              <img src={executionIcon} alt="Simple Execution" className="mx-auto h-16 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Smart Targeting </h3>
              <p className="text-sm text-gray-600"> Reach Customers You Won’t Find Anywhere Else</p>
            </div>

            <div className="bg-[#0A2C47] text-white p-6 rounded-lg shadow-lg">
              <img src={smartTargetingIcon} alt="Smart Targeting" className="mx-auto h-16 mb-4" />
              <h3 className="text-lg font-semibold text-[#00C4FF]">Simple Execution</h3>
              <p className="text-sm">Deploy Campaigns in Days, Not Months</p>
            </div>

            <div className="p-6 rounded-lg shadow-lg">
              <img src={measurementIcon} alt="Strong Measurement" className="mx-auto h-16 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Strong Measurement</h3>
              <p className="text-sm text-gray-600">Track Campaign Performance in Real-Time</p>
            </div>
          </div>
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl font-bold text-[#0A2C47] mb-10">
              With Simple Execution You Can:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={lookalikeImg} alt="Lookalike Audiences" className="mx-auto mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold text-[#0A2C47]">Create Lookalike Audiences</h3>
                <p className="text-sm text-gray-600">
                  Use industry-leading data sets to build lookalike audiences from your best-performing customer segments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={customAudienceImg} alt="Custom Audiences" className="mx-auto mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold text-[#0A2C47]">Build Custom Audiences</h3>
                <p className="text-sm text-gray-600">
                  Use industry-leading data sets to build custom audiences from 1000s of demographic, transactional, and behavioral attributes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={crmAttributesImg} alt="CRM Attributes" className="mx-auto mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold text-[#0A2C47]">Select Attributes from Your CRM</h3>
                <p className="text-sm text-gray-600">
                  Convert your 1st party CRM data into a working data source to easily build and mail custom audiences from your CRM attributes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <SmartTargeting />
        <Footer />
      </Container>
    </>
  );
};

export default CapabilitiesExecution;
