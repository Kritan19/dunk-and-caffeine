
import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../constants';

const Home: React.FC = () => {
  const featuredBrews = MENU_DATA[0].items.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544739313-6fad02872377?auto=format&fit=crop&q=80&w=2000" 
            alt="Himalayan Cafe View" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-[#FDFBF7] mb-4">
            <span className="block text-5xl md:text-8xl font-bold font-montserrat tracking-tighter hero-text-shadow leading-none">
              DUNK
            </span>
            <span className="block text-3xl md:text-6xl font-serif italic text-[#D4A373] font-devanagari mt-[-10px]">
              & Caffeine
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#FDFBF7] text-lg md:text-xl font-light leading-relaxed mb-10 hero-text-shadow">
            Nepal's premier coffee haven where bold global brews meet the soulful essence of Nepali hospitality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/menu" className="w-full sm:w-auto px-10 py-4 bg-[#D4A373] text-[#4B2C20] font-bold rounded-sm hover:bg-[#FDFBF7] transition-colors shadow-lg">
              OUR MENU
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 border-2 border-[#FDFBF7] text-[#FDFBF7] font-bold rounded-sm hover:bg-[#FDFBF7] hover:text-[#4B2C20] transition-all">
              VISIT US
            </Link>
          </div>
        </div>

        {/* Decorative Mandala Overlay */}
        <div className="absolute bottom-[-10%] right-[-5%] opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="#FDFBF7">
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">Namaste & Welcome</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Nestled in the heart of Kathmandu, we offer a space to unwind, connect, and savor every sip. 
          At Dunk and Caffeine, every cup tells a story of the mountains, the soil of Ilam, 
          and the careful hands of our baristas.
        </p>
        <div className="h-1 w-24 bg-[#D4A373] mx-auto"></div>
      </section>

      {/* Featured Teasers Grid */}
      <section className="bg-[#4B2C20] py-20 text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Story Snippet */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-6 font-montserrat border-b border-[#D4A373]/30 pb-4">Our Story</h3>
            <p className="text-[#D4A373] mb-8 flex-grow">
              Founded in 2023 by Raj and Maya, Dunk and Caffeine started with a simple dream: 
              bridging the gap between the traditional Nepali tea culture and the global specialty coffee movement.
            </p>
            <Link to="/about" className="text-sm font-bold uppercase tracking-widest hover:text-[#D4A373] underline underline-offset-8 transition-all">
              Discover More
            </Link>
          </div>

          {/* Featured Brews Preview */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-8 font-montserrat border-b border-[#D4A373]/30 pb-4">Featured Brews</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featuredBrews.map((item, idx) => (
                <div key={idx} className="bg-[#FDFBF7] p-6 rounded-sm text-[#4B2C20] group hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-40 bg-gray-200 mb-4 overflow-hidden">
                    <img 
                      src={item.imageUrl || `https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400&v=${idx}`} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h4 className="font-bold mb-1">{item.name}</h4>
                  <p className="text-xs text-gray-500 mb-4">{item.description}</p>
                  <p className="text-[#D4A373] font-bold">NPR {item.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-right">
               <Link to="/menu" className="text-[#D4A373] font-bold uppercase tracking-widest hover:text-[#FDFBF7] transition-all">
                View Full Menu &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden flex flex-wrap gap-20 p-20">
          {[...Array(20)].map((_, i) => (
            <svg key={i} className="h-12 w-12" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" />
            </svg>
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-montserrat">Visit Our Sanctuary</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Experience the warmth of the Himalayas in every cup. We are located in the heart of Thamel, Kathmandu.
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#4B2C20] text-[#FDFBF7] font-bold rounded-sm hover:bg-[#D4A373] transition-colors shadow-xl">
            GET DIRECTIONS
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
