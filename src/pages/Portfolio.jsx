

import React from 'react';
import image1 from '../assets/kitchen.png'; // Make sure the filename has no spaces
import image2 from '../assets/seating room.png';
import image3 from '../assets/tvstation.jpeg';
const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Living Room',
    description: 'A sleek, modern design focused on clean lines and open space.',
    image: image1,
  },
  {
    id: 2,
    title: 'Cozy Rustic Bedroom',
    description: 'Warm and inviting with natural wood accents and soft lighting.',
    image: image1,
  },
  {
    id: 3,
    title: 'Industrial-Style Kitchen',
    description: 'A bold design with exposed brick, stainless steel, and concrete countertops.',
    image: image2,
  },
  {
    id: 4,
    title: 'Scandinavian-Inspired Office',
    description: 'Functionality and simplicity with light woods and a neutral palette.',
    image: image3,  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Work
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
