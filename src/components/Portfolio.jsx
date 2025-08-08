// src/components/Portfolio.jsx
import React from 'react';

// Placeholder data for your projects
const projects = [
  { id: 1, title: 'Modern Minimalist Living Room', description: 'A sleek, modern design focused on clean lines and open space.', image: 'https://via.placeholder.com/400x300' },
  { id: 2, title: 'Cozy Rustic Bedroom', description: 'Warm and inviting with natural wood accents and soft lighting.', image: 'https://via.placeholder.com/400x300' },
  { id: 3, title: 'Industrial-Style Kitchen', description: 'A bold design with exposed brick, stainless steel, and concrete countertops.', image: 'https://via.placeholder.com/400x300' },
  { id: 4, title: 'Scandinavian-Inspired Office', description: 'Functionality and simplicity with light woods and a neutral palette.', image: 'https://via.placeholder.com/400x300' },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;