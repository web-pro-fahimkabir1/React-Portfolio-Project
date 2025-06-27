import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Contact Information and Icons */}
        <div className="flex items-center space-x-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.327v21.345C0 23.407.595 24 1.325 24h11.49v-9.294H9.692V11.11h3.123V8.413c0-3.1 1.793-4.788 4.659-4.788 1.325 0 2.639.242 2.639.242v2.903h-1.49c-1.468 0-1.927.912-1.927 1.852v2.232h3.292l-.526 3.595h-2.766V24h5.423c.73 0 1.324-.593 1.324-1.328V1.328C24 .593 23.405 0 22.675 0z" />
            </svg>
          </a>
          {/* Gmail */}
          <a
            href="mailto:example@gmail.com"
            className="hover:text-red-600 transition"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065l-11-6.56V6h22v.505l-11 6.56z" />
              <path d="M12 15.934l-11-6.558V18h22V9.376l-11 6.558z" />
            </svg>
          </a>
          {/* Phone */}
          <a
            href="tel:1234567890"
            className="hover:text-green-500 transition"
            aria-label="Phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3.08a2 2 0 0 1-2.18 2A19.862 19.862 0 0 1 3 4.18 2 2 0 0 1 5 2h3.09a2 2 0 0 1 2 1.72 12.911 12.911 0 0 0 .9 3.96 2 2 0 0 1-.45 2.11l-2.27 2.27a16.062 16.062 0 0 0 6.58 6.58l2.27-2.27a2 2 0 0 1 2.11-.45 12.911 12.911 0 0 0 3.96.9 2 2 0 0 1 1.72 2z" />
            </svg>
          </a>
        </div>
        {/* Text and Copyright */}
        <div className="text-center md:text-left max-w-md">
          <p className="mb-2 text-gray-300">
            Connecting you with us anytime, anywhere.
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
