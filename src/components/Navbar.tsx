'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-400 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl md:text-2xl">ANCAPISTAN</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/principles" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Principles
            </Link>
            <Link href="/theory" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Theory
            </Link>
            <Link href="/history" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              History
            </Link>
            <Link href="/key-figures" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Key Figures
            </Link>
            <Link href="/applications" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Applications
            </Link>
            <Link href="/criticisms" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Criticisms
            </Link>
            <Link href="/resources" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Resources
            </Link>
            <Link href="/faq" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              FAQ
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-yellow-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
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
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/principles" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">
            Principles
          </Link>
          <Link href="/theory" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">
            Theory
          </Link>
          <Link href="/history" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">
            History
          </Link>
          <Link href="/key-figures" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">
            Key Figures
          </Link>
          <Link href="/applications" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">
            Applications
          </Link>
          <Link href="/criticisms" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">
            Criticisms
          </Link>
          <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">
            Resources
          </Link>
          <Link href="/faq" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
