import { motion } from "framer-motion";
import { useRef } from "react";
import WhyGateSection from "./WhyGateSection";
import HiddenCostImage from "../../assets/dish.png";
import AIAutomationImage from "../../assets/WeHelpWithHeroImage.png";

const WhyGateData = [
  {
    title: "The Hidden Cost of Manual Work",
    description:
      "500+ hours per year—that's how much time businesses waste on data entry, approvals, tracking, and repetitive tasks. This inefficiency leads to:",
    features: [
      "💰 30% revenue loss due to operational delays",
      "⏳ Slower response times & missed opportunities",
      "⚡ High error rates that hurt productivity",
    ],
    ctaText: "Reclaim Your Time with Automation",
    ctaLink: "#",
    imageUrl: HiddenCostImage,
  },
  {
    title: "AI-Powered Automation That Works for You",
    description:
      "Most businesses rely on disconnected systems that require constant manual input. Gate Automation connects your tools and automates workflows across:",
    features: [
      "🔹 Sales & CRM - Automate lead capture, follow-ups & reporting",
      "🔹 Finance & Accounting - Sync invoices, payments & financial tracking",
      "🔹 Marketing & Customer Engagement - AI-driven email campaigns & chatbots",
      "🔹 Project & Task Management - Auto-assign tasks & track progress",
    ],
    ctaText: "Seamlessly Connect Your Tools",
    ctaLink: "#",
    imageUrl: AIAutomationImage,
    reverse: true,
  },
  {
    title: "Results That Drive Business Growth",
    description:
      "Gate Automation isn't just about saving time—it's about unlocking new revenue opportunities, improving operational efficiency, and allowing teams to focus on high-impact work instead of repetitive tasks.",
    features: [
      "🔹 90% reduction in manual tasks",
      "🔹 3x faster operations with intelligent automation",
      "🔹 50% decrease in human errors through AI-driven workflows",
    ],
    ctaText: "Let's Build Your Automation Strategy",
    ctaLink: "#",
    imageUrl: HiddenCostImage,
  },
  {
    title: "Get Started in Minutes",
    description:
      "No coding required. No tech headaches. Just results. We help you streamline automation in 3 simple steps:",
    features: [
      "🔹 Step 1: Identify your pain points",
      "🔹 Step 2: We design and integrate custom automation",
      "🔹 Step 3: Your business runs faster, smoother, and smarter",
    ],
    ctaText: "Schedule Your Free Automation Consultation",
    ctaLink: "#",
    imageUrl: HiddenCostImage,
    reverse: true,
  },
];

const WhyGateFlow = () => {
  const ref = useRef(null);

  return (
    <motion.div ref={ref} className="bg-blue-50 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">Why Choose Gate Automation?</h2>
      <p className="text-lg text-center text-gray-700 mb-2">
        Unlock efficiency, reduce costs, and streamline your business with AI-powered automation.
      </p>
      <div className="container mx-auto px-3 space-y-16">
        {WhyGateData.map((process, index) => (
          <WhyGateSection key={index} {...process} />
        ))}
      </div>
    </motion.div>
  );
};

export default WhyGateFlow;
