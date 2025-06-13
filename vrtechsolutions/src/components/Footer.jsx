import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg">© {new Date().getFullYear()} VR Tech Solutions. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          Precision in Data. Perfection in Design — Powered by AI.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          {/* Add social media links here if you have them */}
          {/* Example:
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              ... LinkedIn SVG path ...
            </svg>
          </a>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;