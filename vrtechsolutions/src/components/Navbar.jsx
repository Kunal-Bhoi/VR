import React, { useState } from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import vrLogo from '../assets/logo-removebg-preview.png'; // Make sure this path is correct
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom NavLink component
const InternalNavLink = ({ to, children, end, onClick }) => {
  return (
    <ReactRouterNavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `text-gray-300 hover:text-white transition-colors relative group py-2 ${
          isActive ? 'text-purple-400 font-semibold' : ''
        }`
      }
    >
      {children}
      <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
      {({ isActive }) => isActive && <span className="absolute -bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>}
    </ReactRouterNavLink>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="bg-gray-900/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20"> {/* Navbar height h-20 */}
            {/* Logo and Company Name */}
            <ReactRouterNavLink to="/" className="flex-shrink-0 flex items-center space-x-3">
              <img className="h-10 w-auto" src={vrLogo} alt="VR Tech Solutions" />
              <span className="font-bold text-xl text-purple-400">VR Tech Solutions</span>
            </ReactRouterNavLink>

            {/* Desktop Navigation Links */}
            {/* This div will be pushed to the right by `justify-between` on its parent */}
            <div className="hidden md:flex items-center space-x-8">
              <InternalNavLink to="/" end>Home</InternalNavLink>
              <InternalNavLink to="/services">Services</InternalNavLink>
              <InternalNavLink to="/contact">Contact</InternalNavLink>
            </div>

            {/* Mobile Menu Button */}
            {/* This div is only visible on small screens. On larger screens, the nav links above take the rightmost space. */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 p-2 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-800/95 backdrop-blur-sm absolute top-full left-0 right-0 shadow-xl"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              <InternalNavLink to="/" end onClick={closeMobileMenu}>Home</InternalNavLink>
              <InternalNavLink to="/services" onClick={closeMobileMenu}>Services</InternalNavLink>
              <InternalNavLink to="/contact" onClick={closeMobileMenu}>Contact</InternalNavLink>
              {/* Sign In / Get Started buttons removed from mobile menu as well */}
            </div>
          </motion.div>
        )}
      </motion.nav>
      {/* Spacer div to prevent content from being hidden behind the fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;