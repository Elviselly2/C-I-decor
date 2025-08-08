// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto text-center text-gray-600">
          <p>
            Ready to transform your space? Contact us today to discuss your vision.
          </p>
          <div className="mt-8 space-y-4">
            <p>
              <strong className="font-semibold">Email:</strong> info@ciinteriordecor.com
            </p>
            <p>
              <strong className="font-semibold">Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong className="font-semibold">Address:</strong> 123 Design Street, Suite 100, City, State, 12345
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;