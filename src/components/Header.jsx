

// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { FaInstagram, FaPinterest, FaBars, FaTimes } from 'react-icons/fa';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = [
//     { label: 'Home', path: '/' },
//     { label: 'My Work', path: '/portfolio' },
//     { label: 'Services', path: '/services' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   return (
//     <header className={`fixed w-full z-50 top-0 transition-all duration-500 ${
//       isScrolled 
//         ? 'bg-white/90 backdrop-blur-md shadow-xl border-b border-white/20' 
//         : 'bg-white/95 backdrop-blur-sm shadow-lg'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-sm">C&I</span>
//             </div>
//             <h1 className="text-xl font-bold text-gray-800">C&I Interior Decor</h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="flex items-center space-x-6">
//             {navLinks.map(({ label, path }) => (
//               <NavLink
//                 key={label}
//                 to={path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-orange-600 font-semibold'
//                     : 'text-gray-700 hover:text-orange-500 font-medium'
//                 }
//               >
//                 {label}
//               </NavLink>
//             ))}

//             {/* Social Icons */}
//             <div className="flex items-center space-x-3 ml-4">
//               <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
//                 <FaInstagram className="w-5 h-5" />
//               </a>
//               <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500">
//                 <FaPinterest className="w-5 h-5" />
//               </a>
//             </div>

//             {/* CTA Button */}
//             <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg">
//               Get Quote
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-orange-500">
//             {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200">
//             <nav className="py-4 space-y-2">
//               {navLinks.map(({ label, path }) => (
//                 <NavLink
//                   key={label}
//                   to={path}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={({ isActive }) =>
//                     `block w-full text-left px-4 py-2 ${
//                       isActive ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-500'
//                     } hover:bg-gray-50`
//                   }
//                 >
//                   {label}
//                 </NavLink>
//               ))}

//               {/* Mobile Social Icons */}
//               <div className="flex items-center justify-center space-x-4 pt-4">
//                 <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
//                   <FaInstagram className="w-6 h-6" />
//                 </a>
//                 <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500">
//                   <FaPinterest className="w-6 h-6" />
//                 </a>
//               </div>

//               {/* Mobile CTA Button */}
//               <div className="px-4 pt-4">
//                 <Link
//                   to="/contact"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg text-center"
//                 >
//                   Get Quote
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;
// import React, { useState, useEffect } from 'react';
// import { FaInstagram, FaPinterest } from 'react-icons/fa';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleNavClick = (path) => {
//     setIsMenuOpen(false);
//     if (path !== '/') {
//       window.location.href = path;
//     }
//   };

//   return (
//     <>
//       <header className={`fixed w-full z-50 top-0 transition-all duration-500 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg' 
//           : 'bg-white/90 backdrop-blur-sm shadow-md'
//       }`}>
//         <div className="container mx-auto px-6">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo / Brand */}
//             <button onClick={() => handleNavClick('/')} className="group flex items-center space-x-4">
//               {/* Circular Logo */}
//               <div className="relative">
//                 <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                   <span className="text-white font-black text-xl tracking-tight">C&I</span>
//                 </div>
//                 <div className="absolute inset-0 w-14 h-14 rounded-full border-2 border-orange-300/50 group-hover:border-orange-400 transition-all duration-300 group-hover:scale-125"></div>
//               </div>
              
//               {/* Brand Text */}
//               <div className="hidden md:block">
//                 <h1 className="text-2xl font-light text-slate-800 tracking-wide group-hover:text-orange-600 transition-colors duration-300">
//                   <span className="font-bold">C&I</span> INTERIOR
//                 </h1>
//                 <div className="flex items-center mt-1">
//                   <div className="w-8 h-px bg-gradient-to-r from-orange-400 to-red-400 mr-3"></div>
//                   <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">
//                     DECOR
//                   </span>
//                 </div>
//               </div>
//             </button>

//             {/* Desktop Navigation */}
//             <nav className="flex items-center space-x-8">
//               {[
//                 { name: 'Home', path: '/' },
//                 { name: 'My Work', path: '/portfolio' },
//                 { name: 'Services', path: '/services' },
//                 { name: 'Contact', path: '/contact' }
//               ].map((item, index) => (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavClick(item.path)}
//                   className="relative text-slate-800 hover:text-orange-600 transition-all duration-300 font-semibold text-base tracking-wide group py-2 px-4"
//                 >
//                   {item.name}
//                   <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
//                 </button>
//               ))}

//               {/* Social Icons */}
//               <div className="flex items-center space-x-3 ml-6">
//                 <a
//                   href="https://www.instagram.com/yourprofile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
//                 >
//                   <FaInstagram className="text-lg" />
//                 </a>
//                 <a
//                   href="https://www.pinterest.com/yourprofile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-500 flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
//                 >
//                   <FaPinterest className="text-lg" />
//                 </a>
//               </div>

//               {/* CTA Button */}
//               <button
//                 onClick={() => handleNavClick('/contact')}
//                 className="ml-6 group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//               >
//                 <span className="relative z-10 flex items-center text-sm tracking-wide">
//                   <span className="mr-2">GET QUOTE</span>
//                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             </nav>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={toggleMenu}
//               className=" w-12 h-12 rounded-full border-2 border-orange-200 flex items-center justify-center text-orange-600 hover:border-orange-400 hover:bg-orange-50 transition-all duration-300"
//             >
//               <div className="w-5 h-5 flex flex-col justify-center items-center">
//                 <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${
//                   isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
//                 }`}></span>
//                 <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${
//                   isMenuOpen ? 'opacity-0' : 'opacity-100'
//                 }`}></span>
//                 <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${
//                   isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
//                 }`}></span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           <div className="absolute inset-0 bg-white/95 backdrop-blur-md"></div>
//           <div className="relative z-50 flex flex-col justify-center items-center h-full pt-20">
//             <nav className="text-center space-y-8 w-full max-w-sm">
//               {[
//                 { name: 'Home', path: '/' },
//                 { name: 'My Work', path: '/portfolio' },
//                 { name: 'Services', path: '/services' },
//                 { name: 'Contact', path: '/contact' }
//               ].map((item, index) => (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavClick(item.path)}
//                   className="w-full text-2xl font-medium text-slate-800 hover:text-orange-600 transition-all duration-300 py-4 px-6 rounded-2xl hover:bg-orange-50 border border-transparent hover:border-orange-200"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {item.name}
//                 </button>
//               ))}
              
//               {/* Mobile Social */}
//               <div className="flex justify-center space-x-6 pt-8">
//                 <a
//                   href="https://www.instagram.com/yourprofile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300"
//                 >
//                   <FaInstagram className="text-xl" />
//                 </a>
//                 <a
//                   href="https://www.pinterest.com/yourprofile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300"
//                 >
//                   <FaPinterest className="text-xl" />
//                 </a>
//               </div>
              
//               {/* Mobile CTA */}
//               <button
//                 onClick={() => handleNavClick('/contact')}
//                 className="w-full bg-red-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
//               >
//                 GET QUOTE
//               </button>
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;
import React, { useState, useEffect } from 'react';
import { Instagram, Pin, Menu, X, Sparkles } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'My Work', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  // Mock NavLink component for demo
  const NavLink = ({ to, children, className, onClick }) => (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );

  return (
    <header className={`fixed w-full z-50 top-0 transition-all duration-700 ease-out ${
      isScrolled 
        ? 'bg-white/85 backdrop-blur-xl shadow-2xl border-b border-gradient-to-r from-orange-200/30 to-pink-200/30' 
        : 'bg-gradient-to-r from-white/95 via-orange-50/90 to-white/95 backdrop-blur-lg shadow-xl'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-lg tracking-tight">C&I</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-orange-700 to-red-700 bg-clip-text text-transparent">
                C&I Interior Decor
              </h1>
              <p className="text-xs text-gray-500 font-medium tracking-wide">Transforming Spaces</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="lg:flex items-center space-x-8">
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                className="relative group text-gray-700 hover:text-orange-600 font-medium text-base transition-all duration-300 py-2 px-1"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-300 to-red-300 blur-sm group-hover:w-full transition-all duration-300 ease-out"></span>
              </NavLink>
            ))}

            {/* Enhanced Social Icons */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-300">
              <a 
                href="https://www.instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-2 rounded-full bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://www.pinterest.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-2 rounded-full bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-all duration-300 transform hover:scale-110"
              >
                <Pin className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Enhanced CTA Button */}
            <div className="relative group">
              <button className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Get Quote</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
            </div>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg: relative p-3 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-110"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg: overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 backdrop-blur-sm border-t border-gradient-to-r from-orange-200/50 to-red-200/50 rounded-b-3xl shadow-2xl mx-4 mb-4">
            <nav className="py-6 space-y-1">
              {navLinks.map(({ label, path }, index) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="group block w-full text-left px-6 py-4 text-gray-700 hover:text-orange-600 font-medium text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl mx-2 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative">
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </NavLink>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-200 mx-6">
                <a 
                  href="https://www.instagram.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-110 hover:-rotate-3"
                >
                  <Instagram className="w-6 h-6 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://www.pinterest.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative p-4 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                >
                  <Pin className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-6 pt-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-lg">Get Quote</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>
      {isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-50"></div>
      )}
    </header>
  );
}

export default Header;