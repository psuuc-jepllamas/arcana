import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Inline social SVGs (lucide-react version in use doesn't export brand icons)
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const footerLinks = {
  Services: [
    'Architectural Design',
    'Urban Planning',
    'Commercial Projects',
    'Luxury Residential',
    'Sustainable Design',
    'Interior Architecture',
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Projects', to: '/projects' },
    { label: 'Careers', to: '/about#careers' },
    { label: 'Press & Media', to: '/about#press' },
    { label: 'Contact', to: '/contact' },
  ],
  Resources: [
    'Blog & Insights',
    'Case Studies',
    'Awards',
    'Sustainability Report',
    'Privacy Policy',
  ],
};

const socials = [
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { Icon: TwitterIcon, label: 'Twitter / X', href: '#' },
  { Icon: YoutubeIcon, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-300">
      {/* CTA Banner */}
      <div className="border-b border-dark-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-3">Ready to start?</p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-stone">
              Have a project in mind?
            </h2>
          </div>
          <Link to="/contact" className="btn-primary text-sm gap-3 flex-shrink-0">
            Start a Conversation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 border border-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <span className="font-display font-bold text-gold group-hover:text-dark transition-colors duration-300">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-stone text-xl leading-none block">ARCANA</span>
                <span className="font-mono text-gold text-[9px] tracking-[0.25em] uppercase">Architecture</span>
              </div>
            </Link>
            <p className="text-stone-600 text-sm leading-relaxed max-w-xs mb-8">
              Crafting architectural masterpieces that transcend time. Award-winning design across residential, commercial, and civic projects worldwide.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-dark-300 flex items-center justify-center text-stone-600 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] text-stone uppercase tracking-[0.25em] mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((item) => (
                <li key={item}>
                  <a href="/#services" className="text-stone-600 text-sm hover:text-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-stone uppercase tracking-[0.25em] mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-stone-600 text-sm hover:text-gold transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-stone uppercase tracking-[0.25em] mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.Resources.map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-600 text-sm hover:text-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs font-mono">
            © {new Date().getFullYear()} Arcana Architecture Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-stone-600 text-xs hover:text-gold transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
