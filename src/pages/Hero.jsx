// src/components/Hero.jsx
// function Hero() {
//   return (
//     <div className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center text-center p-8">
//       {/* You can add a background image here */}
//       <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}></div>

//       <div className="relative z-10">
//         <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
//           C&I Interior Decor
//         </h1>
//         <p className="mt-4 text-xl md:text-2xl font-light">
//           Crafting beautiful spaces that inspire and delight.
//         </p>
//         <a href="#portfolio" className="mt-8 inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
//           View Our Work
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Home, Palette, Star } from 'lucide-react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Home, text: "Residential Design" },
    { icon: Palette, text: "Custom Styling" },
    { icon: Star, text: "Premium Service" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(251, 146, 60, 0.15) 0%, 
              rgba(239, 68, 68, 0.1) 25%, 
              rgba(236, 72, 153, 0.05) 50%, 
              transparent 70%),
            linear-gradient(135deg, 
              #0f172a 0%, 
              #1e293b 20%, 
              #334155 40%, 
              #475569 60%, 
              #64748b 80%, 
              #94a3b8 100%)
          `
        }}
      />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        
        {/* Subtitle Badge */}
        <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-300/30 rounded-full px-6 py-3 mb-8 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-orange-200 font-medium tracking-wide">Premium Interior Design</span>
          <Sparkles className="w-4 h-4 text-orange-400" />
        </div>

        {/* Main Heading */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <span className="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
            C&I Interior
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Decor
          </span>
        </h1>

        {/* Enhanced Description */}
        <p className={`mt-8 text-xl md:text-xl lg:text-4xl font-light text-gray-300 leading-relaxed max-w-4xl mx-auto transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
         
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-medium"> beautiful spaces </span>
           Crafting that inspire creativity 
          <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent font-medium"> delight the soul</span>
        </p>

        {/* Feature Pills */}
        <div className={`flex flex-wrap justify-center gap-4 mt-12 mb-16 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          {features.map(({ icon: Icon, text }, index) => (
            <div 
              key={text}
              className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 hover:border-orange-300/50 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 200 + 1000}ms` }}
            >
              <Icon className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
              <span className="text-gray-200 font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          
          {/* Primary CTA */}
          <a 
            href="#portfolio" 
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
          >
            <span className="relative z-10">View Our Work</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>

          {/* Secondary CTA */}
          <a 
            href="#contact" 
            className="group relative inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-orange-300/50 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <span>Get Consultation</span>
            <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </div>

        {/* Stats or Testimonial */}
        <div className={`mt-20 flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">200+</div>
            <div className="text-gray-400 font-medium">Happy Clients</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">5+ Years</div>
            <div className="text-gray-400 font-medium">Experience</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">100%</div>
            <div className="text-gray-400 font-medium">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

export default Hero;