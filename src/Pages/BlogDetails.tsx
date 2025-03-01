import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import Facebook_icon from "../assets/Facebook_icon.svg.png";
import Twitter from "../assets/twitter.jpg";
import LinkedIn from "../assets/LinkedIn.jpg";
import Container from "../Components/Container";
import post from "../assets/meet-the-postie.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const shareUrl = window.location.href;
  const blogTitle = "When to Automate? The Right Time to Embrace Efficiency";

  return (
    <>
      <Container className="bg-gray-100">
        <Navbar />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] md:h-[450px] bg-cover bg-center flex items-end"
          style={{ backgroundImage: `url(${post})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for readability */}
          <div className="relative z-10 max-w-4xl mx-auto text-white px-6 pb-10 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 text-sm font-medium"
            >
              <span className="bg-[#00C4FF] text-white px-3 py-1 rounded-full">AUTOMATION</span>
              <span>TECHNOLOGY</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold mt-4"
            >
              {blogTitle}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 flex items-center text-gray-200 text-sm"
            >
              <span>🕒 7 Min Read</span>
              <span className="ml-4">✍ by Amanda Boughey</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 mt-10"
        >
          {/* Social Share Section */}
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-medium">Share this article on:</p>
            <div className="flex gap-4">
              <FacebookShareButton url={shareUrl}>
                <img src={Facebook_icon} alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={blogTitle}>
                <img src={Twitter} alt="Twitter" className="w-6 h-6 hover:scale-110 transition" />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={blogTitle}>
                <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
              </LinkedinShareButton>
            </div>
          </div>

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-gray-800 leading-relaxed space-y-4"
          >
            <p>
              For many businesses, the <strong>"Why Automate?"</strong> is obvious—the real question is <strong>"When?"</strong> 
              While automation is possible in many situations, it's only effective when:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>✅ The process is stable - Automation works best for well-defined, repeatable workflows.</li>
              <li>✅ There is long-term demand - The process will continue to be used frequently in the future.</li>
              <li>✅ Error reduction is a priority - Automation eliminates human errors, ensuring consistency.</li>
              <li>✅ Speed is critical - Faster processing leads to better efficiency and cost savings.</li>
            </ul>

            <p>
              🚀 However, businesses often need a <strong>trigger event</strong> to turn automation from an idea into a priority. 
              These triggers can include:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>🔹 Increased workload - More tasks without additional staff.</li>
              <li>🔹 Recurring peaks in demand - Workloads spiking more frequently.</li>
              <li>🔹 Staff reductions - Fewer employees handling the same volume of work.</li>
              <li>🔹 Regulatory changes - New compliance requirements increasing complexity.</li>
            </ul>

            <p>
              📢 The real question is not <strong>"When to automate?"</strong> but <strong>"Why not automate now?"</strong> 
              Competitive businesses are already automating—don't get left behind.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mt-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/get-in-touch"
              className="px-6 py-3 text-lg font-semibold bg-[#00C4FF] text-white rounded-full shadow-md transition-all hover:shadow-lg"
            >
              Get Started Today 🚀
            </Link>
          </motion.div>
        </motion.div>

        <Footer />
      </Container>
    </>
  );
};

export default BlogDetail;
