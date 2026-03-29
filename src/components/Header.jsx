import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'My Work',  path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.05)',
      transition: 'box-shadow 0.3s',
    }}>
      {/* Top accent line */}
      <div style={{ width: '100%', height: '4px', background: 'linear-gradient(to right, #f97316, #ef4444, #ec4899)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* LOGO */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #fb923c, #ef4444)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(251,146,60,0.4)',
            }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: '13px' }}>C&I</span>
            </div>
            <div>
              <p style={{ color: '#1f2937', fontWeight: 700, fontSize: '16px', margin: 0 }}>C&I Interior Decor</p>
              <p style={{ color: '#f97316', fontWeight: 600, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>Transforming Spaces</p>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS — always visible on desktop */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map(({ label, path }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  style={{
                    color: active ? '#f97316' : '#4b5563',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    paddingBottom: '4px',
                    borderBottom: active ? '2px solid #f97316' : '2px solid transparent',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { if (!active) { e.target.style.color = '#f97316'; e.target.style.borderBottomColor = '#f97316'; } }}
                  onMouseLeave={e => { if (!active) { e.target.style.color = '#4b5563'; e.target.style.borderBottomColor = 'transparent'; } }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Social + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777', textDecoration: 'none' }}>
              <FaInstagram style={{ width: '16px', height: '16px' }} />
            </a>
           
          

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none', // shown via media query in style tag below
                width: '40px', height: '40px', borderRadius: '8px',
                border: 'none', background: 'transparent', cursor: 'pointer',
                alignItems: 'center', justifyContent: 'center', color: '#374151',
              }}
              id="hamburger-btn"
            >
              {menuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid #f3f4f6',
          padding: '16px 24px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}>
          {navLinks.map(({ label, path }) => {
            const active = location.pathname === path;
            return (
              <Link key={path} to={path} style={{
                display: 'block', padding: '12px 16px', borderRadius: '10px',
                color: active ? '#f97316' : '#374151',
                background: active ? '#fff7ed' : 'transparent',
                fontWeight: 600, fontSize: '14px', textDecoration: 'none',
                marginBottom: '4px',
              }}>
                {label}
              </Link>
            );
          })}
          <Link to="/contact" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            background: 'linear-gradient(to right, #f97316, #ef4444)',
            color: 'white', fontWeight: 700, fontSize: '14px',
            padding: '12px', borderRadius: '12px', textDecoration: 'none', marginTop: '12px',
          }}>
            <Sparkles style={{ width: '16px', height: '16px' }} />
            Get Quote
          </Link>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #hamburger-btn { display: flex !important; }
          nav { display: none !important; }
          .social-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}

export default Header;