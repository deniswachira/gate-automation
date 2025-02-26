import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "$XX/month",
    description: "For small teams & solopreneurs looking to automate key tasks.",
    features: [
      "✅ Basic workflow automation (Zapier, Make, Podia integrations)",
      "✅ CRM & lead management automation",
      "✅ Email & marketing automation",
      "✅ Up to X automated workflows",
      "✅ Basic support",
    ],
    buttonText: "Get Started →",
    buttonLink: "/get-in-touch",
  },
  {
    name: "Growth",
    price: "$XX/month",
    description: "For businesses looking to scale automation across departments.",
    features: [
      "✅ Advanced workflow automation (multi-step workflows, AI decision-making)",
      "✅ CRM & sales automation with Zoho, Monday, Tape App",
      "✅ Finance & invoicing automation",
      "✅ Unlimited automated workflows",
      "✅ Priority support",
    ],
    buttonText: "Scale Your Automation →",
    buttonLink: "/get-in-touch",
    highlight: true, // Special highlight for the most popular plan
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "For large teams & organizations needing fully customized automation solutions.",
    features: [
      "✅ Full-scale AI automation across business operations",
      "✅ Custom API & software integrations",
      "✅ Advanced security & compliance automation",
      "✅ Dedicated account manager & 24/7 support",
    ],
    buttonText: "Talk to an Expert →",
    buttonLink: "/get-in-touch",
  },
];

export default function PricingModels() {
  return (
    <section className="flex justify-center items-center py-16 px-6 bg-gray-100 text-[#003F64]">
      <div className="max-w-6xl w-full">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Find the Perfect Plan for Your Business
        </motion.h2>
        <p className="text-lg text-center text-gray-600 mt-3">
          No hidden fees. No long-term contracts. Just seamless automation tailored to your needs.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-lg shadow-md border-2 ${
                plan.highlight ? "border-[#00C4FF] bg-[#003F64] text-white" : "border-gray-300 bg-white"
              } transition-transform transform hover:scale-105`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Plan Name & Price */}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-xl font-semibold mt-2">{plan.price}</p>
              <p className="text-md mt-2">{plan.description}</p>

              {/* Features List */}
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call-to-Action Button */}
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={plan.buttonLink}
                  className={`block text-center px-6 py-3 font-semibold rounded-full shadow-md transition-all ${
                    plan.highlight ? "bg-[#00C4FF] text-[#003F64]" : "bg-[#003F64] text-white"
                  } hover:shadow-lg`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">Need a Custom Solution?</h3>
          <p className="text-md text-gray-600 mt-2">
            We tailor automation to fit your unique business needs. Get in touch with us to build a custom automation
            plan that aligns with your workflow, tools, and growth goals.
          </p>

          {/* Custom Consultation CTA */}
          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/schedule-consultation"
              className="px-6 py-3 text-lg font-semibold bg-[#00C4FF] text-[#003F64] rounded-full shadow-md transition-all hover:shadow-lg"
            >
              Schedule a Free Consultation →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
