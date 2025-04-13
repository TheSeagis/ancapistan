'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-yellow-400 font-bold text-xl">ANCAPISTAN</span>
              <span className="ml-1 text-sm text-gray-400">.com</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/principles" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
              Principles
            </Link>
            <Link href="/key-figures" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
              Key Figures
            </Link>
            <Link href="/theory/economic-foundations" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
              Economic Theory
            </Link>
            <Link href="/history" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
              History
            </Link>
            <Link href="/applications" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
              Applications
            </Link>
            <Link href="/criticisms" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
              Criticisms
            </Link>
            <Link href="/resources" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
              Resources
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-yellow-400 text-black hover:bg-yellow-500 transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/principles" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
            Principles
          </Link>
          <Link href="/key-figures" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
            Key Figures
          </Link>
          <Link href="/theory/economic-foundations" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
            Economic Theory
          </Link>
          <Link href="/history" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
            History
          </Link>
          <Link href="/applications" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
            Applications
          </Link>
          <Link href="/criticisms" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
            Criticisms
          </Link>
          <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
            Resources
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-400 text-black hover:bg-yellow-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
