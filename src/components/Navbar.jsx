import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['home', 'solutions', 'pricing', 'faqs', 'contact'];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <img
            src="https://media.licdn.com/dms/image/v2/D560BAQHTG0nHK28icg/company-logo_200_200/company-logo_200_200/0/1703955184733/avyuktcoretech_logo?e=1756944000&v=beta&t=Fjbl0hlPLO47wzfsEBVcGn2yAUBFsky25eFexitOeDc"
            alt="ACT Logo"
            className="h-10 w-10 rounded-full object-contain"
        />
        <span className="text-2xl font-extrabold text-blue-600 tracking-wide">ACT</span>
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-blue-600 font-semibold"
                className="cursor-pointer hover:text-blue-500 capitalize transition"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-blue-600 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-4 text-center font-medium text-gray-700">
          {navItems.map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                activeClass="text-blue-600 font-semibold"
                className="cursor-pointer hover:text-blue-500 capitalize transition block"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
