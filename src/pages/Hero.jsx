import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Home, Palette, Star } from 'lucide-react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
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
    { icon: Home, text: 'Residential Design' },
    { icon: Palette, text: 'Custom Styling' },
    { icon: Star, text: 'Premium Service' },
  ];

  const stats = [
    { value: '200+', label: 'Happy Clients', color: 'from-orange-400 to-red-400' },
    { value: '5+ Yrs', label: 'Experience', color: 'from-red-400 to-pink-400' },
    { value: '100%', label: 'Satisfaction', color: 'from-pink-400 to-purple-400' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(251,146,60,0.12) 0%,
              rgba(239,68,68,0.08) 30%,
              transparent 60%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #334155 70%, #475569 100%)
          `,
        }}
      />

      {/* Blurred blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-16 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-32 right-16 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-5" />
      </div>

      {/* Floating dots */}
      {[
        { top: '25%', left: '20%', size: 'w-2 h-2', color: 'bg-orange-400', delay: '0s', duration: '3s' },
        { top: '35%', right: '25%', size: 'w-3 h-3', color: 'bg-red-400', delay: '1s', duration: '4s' },
        { bottom: '30%', left: '30%', size: 'w-1.5 h-1.5', color: 'bg-pink-400', delay: '2s', duration: '2.5s' },
        { bottom: '20%', right: '30%', size: 'w-2 h-2', color: 'bg-yellow-400', delay: '0.5s', duration: '3.5s' },
      ].map((dot, i) => (
        <div
          key={i}
          className={`absolute ${dot.size} ${dot.color} rounded-full opacity-60 animate-bounce pointer-events-none`}
          style={{ ...dot, animationDelay: dot.delay, animationDuration: dot.duration }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/30 backdrop-blur-sm rounded-full px-5 py-2.5 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-orange-200 text-sm font-medium tracking-wide">Premium Interior Designs </span>
          <Sparkles className="w-4 h-4 text-orange-400" />
        </div>

        {/* Heading */}
        <h1 className={`text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
            C&I Interior
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Decor
          </span>
        </h1>

        {/* Description */}
        <p className={`text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Crafting{' '}
          <span className="text-orange-400 font-medium">beautiful spaces</span>{' '}
          that inspire creativity and{' '}
          <span className="text-pink-400 font-medium">delight the soul</span>
        </p>

        {/* Feature Pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 hover:bg-white/20 hover:border-orange-300/50 hover:scale-105 transition-all duration-300">
              <Icon className="w-4 h-4 text-orange-400" />
              <span className="text-gray-200 text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link to="/portfolio"
            className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300">
            <span>View Our Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link to="/contact"
            className="flex items-center gap-3 bg-white/10 border-2 border-white/30 hover:border-orange-400/50 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <span>Get Consultation</span>
            <Sparkles className="w-5 h-5" />
          </Link>
        </div>

        {/* Stats */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {stats.map(({ value, label, color }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-gray-600" />}
              <div className="text-center">
                <div className={`text-4xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{value}</div>
                <div className="text-gray-400 text-sm font-medium mt-1">{label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-red-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

export default Hero;