import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu: string) =>
    setDropdownOpen(dropdownOpen === menu ? null : menu);

  return (
    <nav className="w-full bg-base-200 border-b border-gray-200 px-6 lg:px-16 py-4 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center space-x-6">
        <img src={logo} alt="Postie Logo" className="h-8" />
      </div>

      {/* Mobile Menu Toggle */}
      <button className="lg:hidden" onClick={toggleMenu}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-8 text-[#1E2A3A] font-medium">
        {["We Help With", "Capabilities", "Company"].map((menu) => (
          <li key={menu} className="relative group">
            <button
              className="cursor-pointer focus:outline-none"
              onClick={() => toggleDropdown(menu)}
            >
              {menu} ▾
            </button>
            <ul
              className={`absolute hidden group-hover:block bg-white shadow-md rounded-md p-2 space-y-2 mt-2 w-48 ${
                dropdownOpen === menu ? "block" : "hidden"
              }`}
            >
              {menu === "We Help With" && (
                <>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                      Prospecting
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                      Retargeting
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                      CRM Reengagement
                    </Link>
                  </li>
                </>
              )}
              {menu === "Capabilities" && (
                <>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                      Targeting
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                      Execution
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                      Measurement
                    </Link>
                  </li>
                </>
              )}
              {menu === "Company" && (
                <>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                      Contact Us
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </li>
        ))}
        <li>
          <Link to="#" className="text-base-500">
            Learn
          </Link>
        </li>
      </ul>

      {/* Right - Login & Button (Desktop) */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link to="#" className="font-medium hover:text-[#00C4FF]">
          Login
        </Link>
        <Link
          to="#"
          className="bg-[#00C4FF] text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-[#009ACD] transition"
        >
          Get Postie
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-200 shadow-md lg:hidden">
          <ul className="flex flex-col space-y-4 p-6 text-[#1E2A3A] font-medium">
            {["We Help With", "Capabilities", "Company"].map((menu) => (
              <li key={menu}>
                <button
                  className="flex justify-between w-full focus:outline-none"
                  onClick={() => toggleDropdown(menu)}
                >
                  {menu} ▾
                </button>
                {dropdownOpen === menu && (
                  <ul className="mt-2 space-y-2">
                    {menu === "We Help With" && (
                      <>
                        <li>
                          <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                            Prospecting
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                            Retargeting
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                            CRM Reengagement
                          </Link>
                        </li>
                      </>
                    )}
                    {menu === "Capabilities" && (
                      <>
                        <li>
                          <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                            Targeting
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                            Execution
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                            Measurement
                          </Link>
                        </li>
                      </>
                    )}
                    {menu === "Company" && (
                      <>
                        <li>
                          <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                            Contact Us
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link to="#" className="font-medium text-green-500 hover:text-[#00C4FF]">
                Learn
              </Link>
            </li>
            <li>
              <Link to="#" className="font-medium hover:text-[#00C4FF]">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="bg-[#00C4FF] text-white font-medium px-6 py-2 rounded-full shadow-md transition w-full text-center"
              >
                Get Postie
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;