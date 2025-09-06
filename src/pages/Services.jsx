// src/components/Services.jsx
// import React from 'react';
// import { FaPaintRoller, FaLightbulb, FaCouch, FaRulerCombined } from 'react-icons/fa';

// function Services() {
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
//           Our Services
//         </h2>
//         <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           We offer a comprehensive range of interior design services to bring your vision to life, from initial concept to final touches.
//         </p>
        
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
//           {/* Service Card 1: Full-Service Interior Design */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <FaRulerCombined className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Full-Service Interior Design
//             </h3>
//             <p className="text-gray-600">
//               Complete project management from concept to completion, including space planning, material selection, and installation.
//             </p>
//           </div>
          
//           {/* Service Card 2: Space Planning & Consultation */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <FaCouch className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Space Planning & Consultation
//             </h3>
//             <p className="text-gray-600">
//               Optimizing your layout for functionality and flow. We help you make the best use of your space.
//             </p>
//           </div>

//           {/* Service Card 3: Color & Finishes Selection */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <FaPaintRoller className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Color & Finishes Selection
//             </h3>
//             <p className="text-gray-600">
//               Expert guidance in choosing the perfect color palettes, paints, and finishes to create your desired atmosphere.
//             </p>
//           </div>

//           {/* Service Card 4: Lighting & Furnishing */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <FaLightbulb className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Lighting & Furnishing
//             </h3>
//             <p className="text-gray-600">
//               Selecting stylish and functional furniture, fixtures, and lighting to complete the look of your new space.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
import React from 'react';
import { FaPaintRoller, FaLightbulb, FaCouch, FaRulerCombined } from 'react-icons/fa';

function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 mt-8 max-w-3xl mx-auto leading-relaxed font-light">
            We offer a comprehensive range of interior design services to bring your vision to life, 
            from initial concept to final touches.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <div className="group bg-grey-500 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaRulerCombined className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                Full-Service Interior Design
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Complete project management from concept to completion, including space planning, material selection, and installation.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
          
          {/* Service Card 2 */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaCouch className="text-2xl text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                Space Planning & Consultation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Optimizing your layout for functionality and flow. We help you make the best use of your space.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Service Card 3 */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaPaintRoller className="text-2xl text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                Color & Finishes Selection
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Expert guidance in choosing the perfect color palettes, paints, and finishes to create your desired atmosphere.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Service Card 4 */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaLightbulb className="text-2xl text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                Lighting & Furnishing
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Selecting stylish and functional furniture, fixtures, and lighting to complete the look of your new space.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              window.location.href = '/contact';
            }}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 cursor-pointer"
          >
            <span className="mr-2 text-emerald-500 bg-gradient-to-r from-blue-600 to-indigo-600">Get Started Today</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;