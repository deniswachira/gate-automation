import { Link } from "react-router-dom";
import logo from "../assets/logo/gate-automationNoBg.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-200 px-4">
      {/* Left: Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            {/* Mobile Menu Links */}
            <Link to="/" className="hover:text-[#00C4FF]">
              Home
            </Link>
            <Link to="/services" className="hover:text-[#00C4FF]">
              Services
            </Link>
            <Link to="/why-gate" className="hover:text-[#00C4FF]">
              Why Gate
            </Link>
            <Link to="/solutions" className="hover:text-[#00C4FF]">
              Solutions
            </Link>
            <Link to="/pricing" className="hover:text-[#00C4FF]">
              Pricing
            </Link>
            <Link to="/learn" className="hover:text-[#00C4FF]">
              Blogs
            </Link>
            <Link to="/videos" className="hover:text-[#00C4FF]">
              Videos
            </Link>
            <Link to="/about-us" className="hover:text-[#00C4FF]">
              About Us
            </Link>
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-15 " />
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li >
            <Link to="/" className="hover:text-[#00C4FF]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#00C4FF]">
              Services
            </Link>
          </li>
          <li>
            <Link to="/why-gate" className="hover:text-[#00C4FF]">
              Why Gate
            </Link>
          </li>
          <li>
            <Link to="/solutions" className="hover:text-[#00C4FF]">
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-[#00C4FF]">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/learn" className="hover:text-[#00C4FF]">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/videos" className="hover:text-[#00C4FF]">
              Videos
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-[#00C4FF]">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: Buttons */}
      <div className="navbar-end">
        {/* <Link to="login" className="font-medium hover:text-[#00C4FF] mr-4">
          Login
        </Link> */}
        <Link
          to="/get-in-touch"
          className="bg-[#00C4FF] text-white font-medium px-6 py-2 rounded-full  text-center"
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
