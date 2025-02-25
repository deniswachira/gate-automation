import telescope from "../assets/telescope.png"
import dish from "../assets/dish.png"
export const DigitalCompanies = () => {
    return (
      <section className="bg-[#0A2C47] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              All the Digital Campaigns You Love to Run, Now Available with Direct Mail!
            </h2>
          </div>
  
          {/* Right Side - Campaign Types */}
          <div className="space-y-6">
            {/* Item 1 - Prospecting */}
            <div className="flex items-start gap-4">
              <img src={telescope} alt="Prospecting" className="w-10 h-10" />
              <div>
                <p className="text-sm text-[#00C4FF] font-semibold">Prospecting</p>
                <p className="text-lg font-bold">Attract New Customers</p>
              </div>
            </div>
  
            {/* Item 2 - Website Retargeting */}
            <div className="flex items-start gap-4">
              <img src={telescope} alt="Website Retargeting" className="w-10 h-10" />
              <div>
                <p className="text-sm text-[#A855F7] font-semibold">Website Retargeting</p>
                <p className="text-lg font-bold">Convert More Website Visits</p>
              </div>
            </div>
  
            {/* Item 3 - CRM Reengagement */}
            <div className="flex items-start gap-4">
              <img src={dish} alt="CRM Reengagement" className="w-10 h-10" />
              <div>
                <p className="text-sm text-[#10B981] font-semibold">CRM Reengagement</p>
                <p className="text-lg font-bold">Maximize Lifetime Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  