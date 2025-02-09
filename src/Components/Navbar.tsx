import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

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
            {["We Help With", "Capabilities", "Company"].map((title, index) => (
              <li key={index}>
                <details>
                  <summary>{title}</summary>
                  <ul className="p-2">
                    {title === "We Help With" && (
                      <>
                       <li>
                        <Link to="/wehelpwith/prospecting" className="hover:text-[#00C4FF]">
                        Prospecting
                        </Link>
                      </li>
                      <li>
                        <Link to="/wehelpwith/retargeting" className="hover:text-[#00C4FF]">
                        Retargeting
                        </Link>
                      </li>
                      <li>
                        <Link to="/wehelpwith/rcm-reengagement" className="hover:text-[#00C4FF]">
                        CRM Reengagement
                        </Link>
                      </li>     
                      </>
                    )}
                    {title === "Capabilities" && (
                      <>
                       <li>
                        <Link to="/capabilities/targeting" className="hover:text-[#00C4FF]">
                        Targeting
                        </Link>
                      </li>
                      <li>
                        <Link to="/capabilities/execution" className="hover:text-[#00C4FF]">
                        Execution
                        </Link>
                      </li>
                      <li>
                        <Link to="/capabilities/measurement" className="hover:text-[#00C4FF]">
                        Measurement
                        </Link>
                      </li>
                      </>
                    )}
                    {title === "Company" && (
                      <>
                        <li>
                          <Link to="/company/about-us" className="hover:text-[#00C4FF]">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/company/contact-us" className="hover:text-[#00C4FF]">
                            Contact Us
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </details>
              </li>
            ))}
            <Link to="/learn" className="hover:text-[#00C4FF]">
              Learn
            </Link>
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="hover:text-[#00C4FF]">
              Home
            </Link>
          </li>
          {["We Help With", "Capabilities", "Company"].map((title, index) => (
            <li key={index}>
              <details>
                <summary>{title}</summary>
                <ul className="p-2">
                  {title === "We Help With" && (
                    <>
                    <li>
                        <Link to="/wehelpwith/prospecting" className="hover:text-[#00C4FF]">
                        Prospecting
                        </Link>
                      </li>
                      <li>
                        <Link to="/wehelpwith/retargeting" className="hover:text-[#00C4FF]">
                        Retargeting
                        </Link>
                      </li>
                      <li>
                        <Link to="/rcm-reengagement" className="hover:text-[#00C4FF]">
                        CRM Reengagement
                        </Link>
                      </li>                      
                    </>
                  )}
                  {title === "Capabilities" && (
                    <>
                      <li>
                        <Link to="/capabilities/targeting" className="hover:text-[#00C4FF]">
                        Targeting
                        </Link>
                      </li>
                      <li>
                        <Link to="/capabilities/execution" className="hover:text-[#00C4FF]">
                        Execution
                        </Link>
                      </li>
                      <li>
                        <Link to="/capabilities/measurement" className="hover:text-[#00C4FF]">
                        Measurement
                        </Link>
                      </li>
                    </>
                  )}
                  {title === "Company" && (
                    <>
                      <li>
                        <Link to="/company/about-us" className="hover:text-[#00C4FF]">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/company/contact-us" className="hover:text-[#00C4FF]">
                          Contact Us
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </details>
            </li>
          ))}
          <li>
            <Link to="/learn" className="hover:text-[#00C4FF]">
              Learn
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: Buttons */}
      <div className="navbar-end">
        <Link to="login" className="font-medium hover:text-[#00C4FF] mr-4">
          Login
        </Link>
        <Link
          to="#"
          className="bg-[#00C4FF] text-white font-medium px-6 py-2 rounded-full  text-center"
        >
          Get Postie
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
