import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
    { to: '/events', label: 'Events' },
    { to: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Sticky behavior
      setIsSticky(currentScroll > 50);

      // Hide on scroll down, show on scroll up
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const NavLink = ({ to, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setIsMenuOpen(false)}
        className={`text-gray-700 font-medium transition-colors duration-300 hover:text-blue-500 ${
          isActive ? 'text-blue-600 font-semibold' : ''
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ${
        isSticky ? 'shadow-lg' : ''
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition"
        >
          Kibo<span className="text-blue-500">Tech</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <NavLink key={link.to} {...link} />
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden focus:outline-none"
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} className="text-gray-700" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in-down">
          {navLinks.map(link => (
            <Link
              to={link.to}
              key={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 px-6 text-gray-700 hover:bg-gray-100 ${
                location.pathname === link.to ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-4">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center block bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
// how to add multile pages links in the nav bar for for each section as a dropdown 