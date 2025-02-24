'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <Link 
              href="#hero" 
              className="text-xl font-bold"
            >
              <span className="text-gray-800">SHREYA </span>
              <span className="text-indigo-600">M.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="#about"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#education"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link 
              href="#workexp"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Work Experience
            </Link>
            <Link 
              href="#projects"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#achievements"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            <Link 
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#about"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#education"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            href="#workexp"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Work Experience
          </Link>
          <Link
            href="#projects"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#achievements"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Achievements
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;