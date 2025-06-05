"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-orange-500 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-10 w-auto"
                src="/assets/images/logoputih.png"
                alt="Workflow"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <HashLink
                to="/#hero"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-600 transition-colors duration-200"
                style={{ color: "white" }}
              >
                Home
              </HashLink>
              <HashLink
                to="/#about"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-600 transition-colors duration-200"
                style={{ color: "white" }}
              >
                About
              </HashLink>
              <HashLink
                to="/#visimisi"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-600 transition-colors duration-200"
                style={{ color: "white" }}
              >
                Visi & Misi
              </HashLink>
              <HashLink
                to="/#portfolio"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-600 transition-colors duration-200"
                style={{ color: "white" }}
              >
                Portfolio
              </HashLink>
              <Link
                to="/blog"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-600 transition-colors duration-200"
                style={{ color: "white" }}
              >
                Blog
              </Link>
              <HashLink
                to="/#contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-600 transition-colors duration-200"
                style={{ color: "white" }}
              >
                Contact
              </HashLink>
              <HashLink
                to="#/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-600 transition-colors duration-200"
                style={{ color: "white" }}
              >
                Karir
              </HashLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-orange-200 focus:outline-none focus:text-orange-200 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-orange-400 bg-opacity-90 text-center">
          <a
            href="#home"
            className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            style={{ color: "white" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            style={{ color: "white" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            style={{ color: "white" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            style={{ color: "white" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
