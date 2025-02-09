import { CheckCircle } from "lucide-react";
import home from "../assets/home.png";

const DirectMailBenefits = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16">
      {/* Left: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={home} // Change this path to your actual image
          alt="Direct Mail Benefits"
          className="w-80 md:w-96 rounded-full"
        />
      </div>

      {/* Right: Text & Bullet Points */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F64]">
          73% of Customers Prefer Direct Mail over Other Marketing Channels
        </h2>
        <p className="text-gray-600 mt-2">
          Savvy marketers who diversify their mix with Direct Mail benefit from:
        </p>

        {/* Benefits List */}
        <ul className="mt-4 space-y-2 text-gray-700">
          {[
            "20x more reach than Facebook",
            "20x higher engagement than email",
            "70% greater brand recall than display",
            "Safer brand exposure than YouTube",
            "Superior personalization than programmatic",
          ].map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#00C4FF]" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* CTA Statement */}
        <p className="mt-6 text-[#003F64] font-semibold text-lg">
          Postie makes it easy to run Direct Mail campaigns and track ROAS in real time.
        </p>
      </div>
    </section>
  );
};

export default DirectMailBenefits;
