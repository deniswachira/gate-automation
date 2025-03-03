import { Link } from "react-router-dom";
import logo from "../assets/logo/gate-automationNoBg.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-200 px-4 font-['Maven Pro'] !text-gray-900">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10 text-gray-900"
          >
            {/* Mobile Menu Links */}
            <Link to="/" className="!text-gray-900">
              Home
            </Link>
            <Link to="/services" className="!text-gray-900">
              Services
            </Link>
            <Link to="/why-gate" className="!text-gray-900">
              Why Gate
            </Link>
            <Link to="/solutions" className="!text-gray-900">
              Solutions
            </Link>
            <Link to="/pricing" className="!text-gray-900">
              Pricing
            </Link>
            <Link to="/learn" className="!text-gray-900">
              Blogs
            </Link>            
            <Link to="/about-us" className="!text-gray-900">
              About Us
            </Link>
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-15" />
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg !text-gray-900">
          <li>
            <Link to="/" className="!text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="!text-gray-900">
              Services
            </Link>
          </li>
          <li>
            <Link to="/why-gate" className="!text-gray-900">
              Why Gate
            </Link>
          </li>
          <li>
            <Link to="/solutions" className="!text-gray-900">
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="!text-gray-900">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/learn" className="!text-gray-900">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="!text-gray-900">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: Buttons */}
      <div className="navbar-end">
        <Link
          to="/get-in-touch"
          className="bg-[#FF8200] !text-gray-900 font-medium px-6 py-2 rounded-full text-center"
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
