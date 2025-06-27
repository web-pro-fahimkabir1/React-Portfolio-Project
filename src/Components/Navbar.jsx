import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Persist theme in localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition duration-300 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            F.K.
          </div>
          <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            FAHIM KABIR
          </span>
        </div>

        {/* Nav Items (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            Skill
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            Contact
          </a>
          {/* Social Icons */}
          <div className="flex space-x-4 ml-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 transition"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>

          {/* Dark/Light Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4.22 2.78a1 1 0 011.415 1.415l-.708.708a1 1 0 01-1.414-1.414l.707-.708zM17 10h-1a1 1 0 110-2h1a1 1 0 110 2zm-2.78 4.22a1 1 0 011.414 1.414l-.708.708a1 1 0 01-1.415-1.415l.709-.707zM10 17v-1a1 1 0 112 0v1a1 1 0 01-2 0zm-4.22-2.78a1 1 0 01-1.414-1.414l.708-.708a1 1 0 011.414 1.415l-.708.707zM4 10H3a1 1 0 110-2h1a1 1 0 110 2zm2.78-4.22a1 1 0 01-1.414-1.415l.708-.708a1 1 0 011.415 1.414l-.709.707z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293a8 8 0 01-11.586 0 8 8 0 0111.586 0z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-4 animate-slideDown">
          <a
            href="#home"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Skill
          </a>
          <a
            href="#contact"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 transition"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
