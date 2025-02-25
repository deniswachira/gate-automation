import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BusinessProcessFlowSection from "../BusinessProcessFlowSection";
import AutomationImage from "../../assets/WeHelpWithImage2.png"; // Replace with actual images
import AIImage from "../../assets/WeHelpWithImage2.png";
import CRMImage from "../../assets/WeHelpWithImage2.png";
import MarketingImage from "../../assets/WeHelpWithImage2.png";
import FinanceImage from "../../assets/WeHelpWithImage2.png";
import ProjectImage from "../../assets/WeHelpWithImage2.png";
import SupportImage from "../../assets/WeHelpWithImage2.png";
import CustomAIImage from "../../assets/WeHelpWithImage2.png";

const businessProcesses = [
  {
    title: "Business Process Automation",
    description: "Streamline workflows and automate approvals across departments.",
    features: [
      "Reduce human errors with AI-driven decision-making",
      "Eliminate bottlenecks in sales, finance & operations",
      "Optimize team productivity with automated task tracking",
    ],
    ctaText: "Get Started with Process Automation",
    ctaLink: "#",
    imageUrl: AutomationImage,
  },
  {
    title: "AI-Powered Workflow Automation",
    description: "Free up your team for high-impact work with AI automation.",
    features: [
      "Auto-trigger actions based on conditions & interactions",
      "AI-driven decision-making to improve efficiency",
      "Seamless integration with Zapier, Make & Monday",
    ],
    ctaText: "Optimize Your Workflows",
    ctaLink: "#",
    imageUrl: AIImage,
    reverse: true,
  },
  {
    title: "CRM & Lead Management Automation",
    description: "Turn leads into customers effortlessly with automated CRM updates.",
    features: [
      "Auto-sync contacts between Zoho, Monday & Tape App",
      "Automated lead scoring for high-value prospects",
      "Instant lead assignments to the right team members",
    ],
    ctaText: "Boost Sales with Smart CRM Automation",
    ctaLink: "#",
    imageUrl: CRMImage,
  },
  {
    title: "Marketing & Email Automation",
    description: "Convert more customers with AI-driven marketing automation.",
    features: [
      "Automated email sequences for lead nurturing",
      "Personalized campaigns using AI segmentation",
      "Seamless integrations with Podia, Zapier & Make",
    ],
    ctaText: "Supercharge Your Marketing",
    ctaLink: "#",
    imageUrl: MarketingImage,
    reverse: true,
  },
  {
    title: "Finance & Accounting Automation",
    description: "Eliminate manual spreadsheets & simplify financial processes.",
    features: [
      "Automate invoice generation & payment reminders",
      "Sync financial data across platforms in real-time",
      "AI-powered financial reporting for better decision-making",
    ],
    ctaText: "Streamline Your Finances",
    ctaLink: "#",
    imageUrl: FinanceImage,
  },
  {
    title: "Project & Task Management Automation",
    description: "Automate task assignments and keep projects moving smoothly.",
    features: [
      "Auto-assign tasks based on project milestones",
      "Real-time updates & notifications to keep teams aligned",
      "Seamless integration with Monday, Zoho & Tape App",
    ],
    ctaText: "Make Project Management Effortless",
    ctaLink: "#",
    imageUrl: ProjectImage,
    reverse: true,
  },
  {
    title: "Customer Support & Service Automation",
    description: "Provide instant, AI-driven customer support.",
    features: [
      "AI-powered chatbots for instant responses",
      "Automated ticket routing for faster resolutions",
      "Seamless CRM integration for follow-ups",
    ],
    ctaText: "Upgrade Your Customer Support",
    ctaLink: "#",
    imageUrl: SupportImage,
  },
  {
    title: "Custom AI & No-Code Automation Solutions",
    description: "Create custom automation workflows tailored to your business.",
    features: [
      "100% customizable workflows for your needs",
      "No-code automation builder—anyone can create workflows",
      "AI-driven insights to optimize efficiency",
    ],
    ctaText: "Let’s Build Your Custom Automation",
    ctaLink: "#",
    imageUrl: CustomAIImage,
    reverse: true,
  },
];

const BusinessProcessFlow = () => {
  const ref = useRef(null);
  useInView(ref, { once: true });

  return (
    <motion.div ref={ref} className="bg-blue-50 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">Our Services:</h2>
      <div className="container mx-auto px-6 space-y-16">
        {businessProcesses.map((process, index) => (
          <BusinessProcessFlowSection key={index} {...process} />
        ))}
      </div>
    </motion.div>
  );
};

export default BusinessProcessFlow;
