import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaintRoller, FaLightbulb, FaCouch, FaRulerCombined } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FaRulerCombined,
    title: 'Full-Service Interior Design',
    description: 'Complete project management from concept to completion, including space planning, material selection, and installation.',
    iconStyle: { background: 'linear-gradient(135deg, #3b82f6, #4f46e5)' },
    hoverColor: '#4338ca',
  },
  {
    icon: FaCouch,
    title: 'Space Planning & Consultation',
    description: 'Optimizing your layout for functionality and flow. We help you make the very best use of every inch of your space.',
    iconStyle: { background: 'linear-gradient(135deg, #10b981, #0d9488)' },
    hoverColor: '#0f766e',
  },
  {
    icon: FaPaintRoller,
    title: 'Color & Finishes Selection',
    description: 'Expert guidance in choosing the perfect color palettes, paints, and finishes to create your desired atmosphere.',
    iconStyle: { background: 'linear-gradient(135deg, #a855f7, #ec4899)' },
    hoverColor: '#9333ea',
  },
  {
    icon: FaLightbulb,
    title: 'Lighting & Furnishing',
    description: 'Selecting stylish and functional furniture, fixtures, and lighting to complete the look of your beautiful space.',
    iconStyle: { background: 'linear-gradient(135deg, #f59e0b, #f97316)' },
    hoverColor: '#d97706',
  },
];

const steps = [
  { step: '01', title: 'Consultation', desc: 'We start by understanding your vision and goals.' },
  { step: '02', title: 'Concept Design', desc: 'We create mood boards and design concepts for your space.' },
  { step: '03', title: 'Execution', desc: 'Our team brings the design to life with precision.' },
  { step: '04', title: 'Handover', desc: 'We deliver your dream space and ensure your satisfaction.' },
];

function Services() {
  return (
    <section style={{ minHeight: '100vh', background: '#f9fafb', paddingTop: '120px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block', background: '#fff7ed', color: '#ea580c',
            fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase',
            padding: '8px 20px', borderRadius: '999px', marginBottom: '16px',
          }}>
            What We Offer
          </span>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 800, color: '#111827', marginBottom: '16px', lineHeight: 1.1 }}>
            Our{' '}
            <span style={{ background: 'linear-gradient(to right, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Services
            </span>
          </h2>
          <div style={{ width: '64px', height: '4px', background: 'linear-gradient(to right, #fb923c, #ef4444)', borderRadius: '999px', margin: '0 auto 24px' }} />
          <p style={{ color: '#6b7280', fontSize: '17px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            A comprehensive range of interior design services to bring your vision to life —
            from the initial concept right through to the final finishing touches.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          {services.map(({ icon: Icon, title, description, iconStyle }) => (
            <div
              key={title}
              style={{
                background: 'white', borderRadius: '20px', padding: '28px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; }}
            >
              {/* Icon box with inline gradient */}
              <div style={{
                width: '56px', height: '56px', borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                ...iconStyle,
              }}>
                <Icon style={{ color: 'white', fontSize: '22px' }} />
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1f2937', marginBottom: '10px', lineHeight: 1.3 }}>
                {title}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7 }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* How We Work */}
        <div style={{
          background: 'white', borderRadius: '24px', padding: '48px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6', marginBottom: '56px',
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1f2937', textAlign: 'center', marginBottom: '40px' }}>
            How We Work
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {steps.map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fb923c, #ef4444)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 800, fontSize: '13px',
                  margin: '0 auto 16px', boxShadow: '0 4px 12px rgba(249,115,22,0.35)',
                }}>
                  {step}
                </div>
                <h4 style={{ fontWeight: 700, color: '#1f2937', fontSize: '15px', marginBottom: '8px' }}>{title}</h4>
                <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(to right, #f97316, #ef4444)',
              color: 'white', fontWeight: 700, fontSize: '15px',
              padding: '14px 40px', borderRadius: '999px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <span>Get Started Today</span>
            <ArrowRight style={{ width: '18px', height: '18px' }} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Services;