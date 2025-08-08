// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p>&copy; 2025 C&I Interior Decor. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;