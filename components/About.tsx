
import React from 'react';
import { TESTIMONIALS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-[#4B2C20] py-20 mb-20 text-center text-[#FDFBF7]">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4 uppercase tracking-tighter">Our Journey</h1>
        <p className="text-[#D4A373] font-devanagari text-xl">हाम्रो यात्रा</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-montserrat font-bold text-[#4B2C20]">From Bean to Brew</h2>
            <p className="text-gray-700 leading-relaxed italic">
              "Dunk and Caffeine" playfully nods to the joy of dunking biscuits in tea—a Nepali staple—while embracing the energizing power of caffeine.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2023 by passionate entrepreneurs Raj and Maya, Dunk and Caffeine was born from a love for coffee discovered during treks in the Annapurna region. We source our beans ethically from local Nepali farmers in Ilam and international fair-trade suppliers, roasting them on-site for freshness.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To create a community hub that celebrates Nepal's rich cultural tapestry while introducing world-class coffee experiences. Our name reflects our roots and our future.
            </p>
            
            <div className="pt-6">
              <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="h-2 w-2 bg-[#D4A373] rounded-full"></span>
                  <span className="text-sm"><strong>Sustainability:</strong> Partnering with organic farms and using biodegradable products.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-2 w-2 bg-[#D4A373] rounded-full"></span>
                  <span className="text-sm"><strong>Quality:</strong> Handcrafted beverages with meticulous roasting standards.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-2 w-2 bg-[#D4A373] rounded-full"></span>
                  <span className="text-sm"><strong>Inclusivity:</strong> A welcoming space for locals, nomads, and trekkers alike.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4A373] z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
              alt="Himalayan Coffee Roasting" 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Testimonials */}
        <section className="bg-[#FDFBF7] border-y border-[#D4A373]/20 py-16 mb-24 overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 scale-150">
             <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400" alt="background" />
           </div>
           <div className="relative z-10 max-w-4xl mx-auto px-4">
             <h3 className="text-center font-montserrat uppercase tracking-[0.2em] text-xs font-bold mb-12 text-[#D4A373]">Voices of our Community</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {TESTIMONIALS.slice(0, 2).map((t, idx) => (
                  <div key={idx} className="bg-white p-8 shadow-sm border-l-4 border-[#D4A373]">
                    <p className="italic text-gray-700 mb-6">"{t.quote}"</p>
                    <p className="text-sm font-bold text-[#4B2C20]">— {t.author}</p>
                  </div>
                ))}
             </div>
           </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Our Family</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto uppercase tracking-widest">
              The skilled hands behind every perfect cup.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 overflow-hidden group">
                <img 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1500648767791-00dcc994a43e' : '1438761681033-6461ffad8d80'}?auto=format&fit=crop&q=80&w=600`}
                  alt="Team Member"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
