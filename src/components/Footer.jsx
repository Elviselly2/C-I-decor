// import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterestP, FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-sm">C&I</span>
            </div>
            <div>
              <p className="text-white font-bold text-base leading-tight">C&I Interior Decor</p>
              <p className="text-orange-400 text-xs tracking-widest uppercase">Transforming Spaces</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Creating beautiful, functional spaces that reflect your personality and elevate your everyday life.
          </p>
          {/* Social */}
          <div className="flex gap-3 mt-6">
            {[
              // { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
              // { icon: FaPinterestP, href: 'https://pinterest.com', label: 'Pinterest' },
              { icon: FaWhatsapp, href: 'https://wa.me/254708079963', label: 'WhatsApp' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 bg-green-800 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/' },
              { label: 'My Work', to: '/portfolio' },
              { label: 'Services', to: '/services' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link to={to}
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                  <span className="w-0 group-hover:w-3 h-0.5 bg-orange-400 transition-all duration-300 rounded-full" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h4>
          <ul className="space-y-3">
            {[
              { icon: Phone, text: '+254 708 079 963' },
              { icon: Mail, text: 'info@cidecor.co.ke' },
              { icon: MapPin, text: 'Eldoret, Kenya' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-gray-400">
                <Icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2026 C&I Interior Decor. All rights reserved.</p>
          <p>Designed with ❤️ </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;