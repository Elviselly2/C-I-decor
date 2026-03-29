import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FaInstagram, FaPinterestP, FaWhatsapp } from 'react-icons/fa';

const contactItems = [
  { icon: Phone,  label: 'Phone',         value: '+254 708079963',  href: 'tel:+254708079963' },
  { icon: Mail,   label: 'Email',         value: 'info@cidecor.co.ke', href: 'mailto:info@cidecor.co.ke' },
  { icon: MapPin, label: 'Location',      value: 'Eldoret, Kenya',    href: '#' },
  { icon: Clock,  label: 'Working Hours', value: 'Mon–Sat: 8am – 6pm', href: '#' },
];

const socialLinks = [
  
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/254708079963',
    label: 'WhatsApp',
    style: { background: 'linear-gradient(135deg, #4ade80, #16a34a)' },
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Let's Connect
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Get In{' '}
            <span style={{ background: 'linear-gradient(to right, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Touch
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(to right, #fb923c, #ef4444)' }} />
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Ready to transform your space? We'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left Info Panel */}
          <div className="lg:col-span-2 space-y-4">

            {/* Contact Info Cards */}
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href}
                className="flex items-center gap-4 bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 rounded-2xl p-4 transition-all duration-300 group">
                {/* Icon with inline style gradient */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #ef4444)' }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{label}</p>
                  <p className="text-gray-700 font-medium text-sm">{value}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, style }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                    style={style}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #ef4444)' }}>
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent! 🎉</h3>
                <p className="text-gray-500">Thank you! We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-6 text-orange-500 hover:text-orange-600 font-medium text-sm underline">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Service Needed</label>
                      <select name="service" value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition">
                        <option value="">Select a service</option>
                        <option>Full-Service Interior Design</option>
                        <option>gypsum fitting</option>
                        <option>Custom Furniture Design</option>
                        <option>wall cabinet fitting</option>
                        <option>Lighting & Furnishing</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] shadow-md"
                    style={ loading ? { background: '#9ca3af', cursor: 'not-allowed' } : { background: 'linear-gradient(to right, #f97316, #ef4444)' }}>
                    {loading ? 'Sending...' : (<><Send className="w-4 h-4" /><span>Send Message</span></>)}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;