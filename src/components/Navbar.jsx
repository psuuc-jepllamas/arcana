import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.replace('/#', '/'));
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-md border-b border-dark-300 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-gold flex items-center justify-center transition-all duration-300 group-hover:bg-gold">
              <span className="font-display font-bold text-gold text-xs group-hover:text-dark transition-colors duration-300">A</span>
            </div>
            <div>
              <span className="font-display font-bold text-stone text-lg leading-none tracking-tight">ARCANA</span>
              <span className="block font-mono text-gold text-[9px] tracking-[0.25em] uppercase leading-none">Architecture</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-6">
              Get In Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-stone hover:text-gold transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl flex flex-col pt-24 px-8 pb-8"
          >
            <nav className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 border-b border-dark-300 font-display text-2xl text-stone hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="block py-4 border-b border-dark-300 font-display text-2xl text-stone hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
            <Link to="/contact" className="btn-primary justify-center mt-4">
              Get In Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
