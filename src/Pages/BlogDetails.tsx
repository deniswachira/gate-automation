import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import Facebook_icon from '../assets/Facebook_icon.svg.png';
import Twitter from '../assets/twitter.jpg';
import LinkedIn from '../assets/LinkedIn.jpg';
import Container from '../Components/Container';
import post from '../assets/meet-the-postie.jpg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BlogDetail = () => {
  const shareUrl = window.location.href;
  const blogTitle = "Meet the Postie: Sandy Brackbill";

  return (
    <>
      <Container className="bg-base-200">
        <Navbar />

        {/* Hero Section - Now includes the title and meta info */}
        <div 
          className="relative w-full h-[400px] md:h-[450px] bg-cover bg-center flex items-end"
          style={{ backgroundImage: `url(${post})` }} 
        >
          <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay for better text readability */}
          <div className="relative z-10 max-w-4xl mx-auto text-white px-6 pb-10 md:pb-16">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
              <span className="bg-[#00C4FF] text-white px-3 py-1 rounded-full">BLOG</span>
              <span>CULTURE</span>
              <span>TEAM POSTIE</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mt-4">{blogTitle}</h1>
            <div className="mt-2 flex items-center text-gray-200 text-sm">
              <span>🕒 7 Min Read</span>
              <span className="ml-4">✍ by Amanda Boughey</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto bg-base-200 p-6 md:p-10">
          <p>Share the Article on</p>
          {/* Social Share Buttons */}
          <div className="mt-4 flex gap-4">
            <FacebookShareButton url={shareUrl}>
              <img src={Facebook_icon} alt="Facebook" className="w-6 h-6" />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={blogTitle}>
              <img src={Twitter} alt="Twitter" className="w-6 h-6" />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={blogTitle}>
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </LinkedinShareButton>            
          </div>

          {/* Blog Content */}
          <div className="mt-6 text-gray-700 leading-relaxed">
            <p>Welcome back to our <em>Meet the Postie</em> series. Each month, I sit down with a fellow member of the Postie team to ask Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            {/* Add the rest of the blog content here */}
          </div>
        </div>

        <Footer />
      </Container>
    </>
  );
};

export default BlogDetail;
