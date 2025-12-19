
import React from 'react';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Menu Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-montserrat font-bold text-[#4B2C20] mb-4 uppercase">Our Signature Menu</h1>
          <h2 className="text-xl font-devanagari text-[#D4A373] mb-8">हाम्रो सिग्नेचर मेनु</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-[#D4A373]"></div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">Traditional & Modern Blends</p>
            <div className="h-[1px] w-12 bg-[#D4A373]"></div>
          </div>
          <p className="text-sm text-gray-400 italic">
            All prices in Nepali Rupees (NPR). Taxes included. We accept cash and mobile payments.
          </p>
        </div>

        {/* The "Pamphlet" Layout */}
        <div className="bg-white shadow-2xl p-8 md:p-16 border-8 border-[#4B2C20] relative">
          {/* Faint watermark background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
             <svg width="600" height="600" viewBox="0 0 100 100">
               <path d="M50 0 Q75 25 100 50 Q75 75 50 100 Q25 75 0 50 Q25 25 50 0" fill="#4B2C20"/>
             </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {MENU_DATA.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-montserrat font-bold text-[#4B2C20] mb-6 border-b-2 border-[#D4A373] pb-2 uppercase tracking-wide">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <div className="flex flex-col">
                          <span className="text-lg font-bold group-hover:text-[#D4A373] transition-colors">{item.name}</span>
                          {item.nameDevanagari && (
                            <span className="text-xs font-devanagari text-gray-400 font-normal">{item.nameDevanagari}</span>
                          )}
                        </div>
                        <div className="flex-grow border-b border-dotted border-gray-300 mx-2 mb-1"></div>
                        <span className="font-bold text-[#4B2C20]">{item.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-snug">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer of the physical menu style */}
          <div className="mt-16 pt-8 border-t border-[#D4A373] text-center space-y-4">
            <div className="text-sm font-semibold text-[#4B2C20]">
              <span className="mx-4">Customizations: Add extra shot (+50 NPR)</span>
              <span className="mx-4">Milk Alternatives: Almond/Soy (+30 NPR)</span>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Allergens: Please inform staff of any dietary needs.
            </p>
          </div>
        </div>

        {/* Print Button Placeholder */}
        <div className="mt-12 text-center">
          <button onClick={() => window.print()} className="px-8 py-3 border-2 border-[#4B2C20] text-[#4B2C20] text-sm font-bold hover:bg-[#4B2C20] hover:text-[#FDFBF7] transition-all">
            PRINT MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
