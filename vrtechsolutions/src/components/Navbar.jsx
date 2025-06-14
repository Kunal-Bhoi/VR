import React from 'react';
import { NavLink } from 'react-router-dom';
import vrLogo from '../assets/logo-removebg-preview.png'; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Navbar height h-20 (80px) */}
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <img className="h-10 w-auto" src={vrLogo} alt="VR Tech Solutions" />
              <span className="ml-3 font-bold text-xl text-purple-700">VR Tech Solutions</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                end // Use 'end' for the Home link to only be active on exact match
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          {/* Basic Mobile Menu (Optional, can be expanded) */}
          <div className="md:hidden">
            {/* Implement a hamburger menu toggle here if needed */}
            <span className="text-gray-700">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;