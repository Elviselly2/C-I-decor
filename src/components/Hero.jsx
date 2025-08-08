// src/components/Hero.jsx
function Hero() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center text-center p-8">
      {/* You can add a background image here */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          C&I Interior Decor
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light">
          Crafting beautiful spaces that inspire and delight.
        </p>
        <a href="#portfolio" className="mt-8 inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
          View Our Work
        </a>
      </div>
    </div>
  );
}

export default Hero;