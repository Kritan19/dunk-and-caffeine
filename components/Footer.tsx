
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4B2C20] text-[#FDFBF7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">DUNK & CAFFEINE</h3>
            <p className="text-sm text-[#D4A373] mb-4">
              Blending Himalayan serenity with global coffee excellence. 
              Find your peace in every sip.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#D4A373]">Our Story</Link></li>
              <li><Link to="/menu" className="hover:text-[#D4A373]">Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4A373]">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4A373]">Visit Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">Contact</h4>
            <div className="flex items-start space-x-3 text-sm text-[#D4A373]">
              <svg className="h-5 w-5 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Thamel Street, Kathmandu 44600, Nepal</span>
            </div>
            <Link to="/contact" className="inline-block mt-4 px-6 py-2 border border-[#D4A373] text-[#D4A373] text-sm font-semibold hover:bg-[#D4A373] hover:text-[#4B2C20] transition-all">
              FIND US
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#D4A373]/20 text-center text-xs opacity-60">
          <p>© 2025 Dunk and Caffeine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
