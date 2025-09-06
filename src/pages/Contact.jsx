
import React, { useRef, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Your message has been sent!');
      e.target.reset();
      setIsSubmitting(false);
    }, 2000);

    // Uncomment and configure when you have Email.js set up
    /*
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent!');
        e.target.reset();
        setIsSubmitting(false);
      }, (error) => {
        console.log(error.text);
        alert('An error occurred. Please try again.');
        setIsSubmitting(false);
      });
    */
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 mt-8 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your space? Contact us today to discuss your vision and bring your dream interior to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaEnvelope className='text-blue-500' />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <a href="mailto:info@ciinteriordecor.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    info@ciinteriordecor.com
                  </a>
                </div>
              </div>

                {/* Phone */}
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaPhone className='text-emerald-500' />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Phone</p>
                    <a href="tel:+25471123456" className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                      +254708079963
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaWhatsapp className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">WhatsApp</p>
                    <a 
                      href="https://wa.me/254708079963"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-600 hover:text-green-700 transition-colors duration-300 flex items-center"
                    >
                      Chat with us instantly
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaMapMarkerAlt className="text-purple-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Address</p>
                    <p className="text-slate-600">kapsoya<br />Eldoret, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Business Hours</h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="user_phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="+2547 123-4567"
                />
              </div>

              <div>
                <label htmlFor="project_type" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Type
                </label>
                <select
                  name="project_type"
                  id="project_type"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="renovation">Home Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Describe your vision, budget range, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center px-8 py-4 bg-blue-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 "></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-2 bg-green-500">Send Message</span>
                      <FaPaperPlane className="text-green-500 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <a 
            href="mailto:info@ciinteriordecor.com"
            className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FaEnvelope className="text-2xl text-emerald-500" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">Email Us</h4>
            <p className="text-slate-600 text-sm">Get a detailed response within 24 hours</p>
          </a>

          <a 
            href="tel:+253708079963"
            className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FaPhone className="text-2xl text-emerald-500" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">Call Us</h4>
            <p className="text-slate-600 text-sm">Speak directly with our design team</p>
          </a>

          <a 
            href="https://wa.me/254708079963"
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FaWhatsapp className="text-2xl text-emerald-500" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">WhatsApp</h4>
            <p className="text-slate-600 text-sm">Quick questions and instant responses</p>
          </a>
        </div>

        {/* Location Section */}
        <div className="mt-16 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
              <FaMapMarkerAlt className="text-2xl text-purple-500 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Visit Our Studio</h3>
          </div>
          <div className="text-center">
            <p className="text-lg text-slate-700 font-medium mb-2">123 Design Street, Suite 100</p>
            <p className="text-slate-600 mb-6">City, State, 12345</p>
            <div className="inline-block bg-gradient-to-r from-slate-100 to-blue-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-4">Business Hours</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <p className="font-semibold text-slate-700">Monday - Friday</p>
                  <p className="text-slate-600">9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-slate-700">Saturday</p>
                  <p className="text-slate-600">10:00 AM - 4:00 PM</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-slate-700">Sunday</p>
                  <p className="text-slate-600">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;