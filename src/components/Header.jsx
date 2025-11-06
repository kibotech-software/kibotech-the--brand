import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // ✅ Navigation Links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    {
      label: "Services",
      dropdown: [
        { to: "/services/web-development", label: "Web Development" },
        { to: "/services/app-development", label: "App Development" },
        { to: "/services/cloud", label: "Cloud Solutions" },
      ],
    },
    {
      label: "Team",
      dropdown: [
        { to: "/team/leaders", label: "Leaders" },
        { to: "/team/developers", label: "Developers" },
        { to: "/team/marketing", label: "Marketing" },
        { to: "/team/internship", label: "Internship" },
      ],
    },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  // ✅ Sticky + Hide on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsSticky(currentScroll > 50);
      setIsVisible(currentScroll <= lastScrollY || currentScroll < 100);
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Close mobile menu when route changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setOpenDropdown(null);
    }
  }, [location.pathname]);

  // ✅ Helper Component for Links
  const NavLink = ({ to, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setIsMenuOpen(false)}
        className={`font-medium transition-colors duration-300 ${
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-500"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ${
        isSticky ? "shadow-lg" : ""
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition"
        >
          Kibo<span className="text-blue-500">Tech</span>
        </Link>

        {/* ✅ Desktop Nav (visible only on large screens and above) */}
        <nav
          className="hidden lg:flex items-center space-x-8 relative"
          ref={dropdownRef}
        >
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`font-medium flex items-center gap-1 transition-colors duration-300 ${
                    openDropdown === link.label
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {link.label}
                  <Icon name="chevron-down" className="text-sm" />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg z-50 transition-all duration-200 transform ${
                    openDropdown === link.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {link.dropdown.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      to={sub.to}
                      onClick={() => setOpenDropdown(null)}
                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                        location.pathname === sub.to
                          ? "text-blue-600 font-semibold"
                          : ""
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={idx} {...link} />
            )
          )}
        </nav>

        {/* ✅ Contact Button (Desktop) */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
        >
          Contact Us
        </Link>

        {/* ✅ Mobile / Medium Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden focus:outline-none"
        >
          <Icon name={isMenuOpen ? "close" : "menu"} className="text-gray-700" />
        </button>
      </div>

      {/* ✅ Mobile & Medium Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md border-t border-gray-100 transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-2 p-4">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={idx}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label
                    )
                  }
                  className="flex items-center justify-between w-full text-gray-700 font-medium py-2 hover:text-blue-500 transition"
                >
                  {link.label}
                  <Icon
                    name="chevron-down"
                    className={`transition-transform ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`pl-4 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === link.label
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.dropdown.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      to={sub.to}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                      className={`block py-2 text-gray-600 hover:text-blue-500 ${
                        location.pathname === sub.to
                          ? "text-blue-600 font-semibold"
                          : ""
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-gray-700 hover:text-blue-500 ${
                  location.pathname === link.to
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-full text-center hover:bg-blue-600 transition"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
