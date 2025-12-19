
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#4B2C20]/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center">
          <span className={`text-xl font-bold font-montserrat tracking-tighter ${
            isScrolled ? 'text-[#FDFBF7]' : 'text-[#FDFBF7] drop-shadow-md'
          }`}>
            DUNK & CAFFEINE
          </span>
          <span className={`text-[10px] font-devanagari ${
            isScrolled ? 'text-[#D4A373]' : 'text-[#D4A373]'
          }`}>
            डङ्क एण्ड क्याफिन
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold uppercase tracking-widest hover:text-[#D4A373] transition-colors ${
                isActive(link.path) ? 'text-[#D4A373]' : 'text-[#FDFBF7]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon would go here in a production app */}
        <div className="md:hidden">
          <button className="text-[#FDFBF7]">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
