
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-[#4B2C20] mb-4 uppercase">Find Your Space</h1>
          <p className="text-[#D4A373] text-sm uppercase tracking-[0.4em] font-bold">We're waiting for you in Thamel</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[#4B2C20] uppercase tracking-widest text-xs mb-4 underline underline-offset-4 decoration-[#D4A373]">Location</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  123 Thamel Street,<br />
                  Kathmandu 44600, Nepal
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#4B2C20] uppercase tracking-widest text-xs mb-4 underline underline-offset-4 decoration-[#D4A373]">Get in Touch</h3>
                <p className="text-sm text-gray-600">
                  +977-1-1234567<br />
                  info@dunkandcaffeine.com
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#4B2C20] uppercase tracking-widest text-xs mb-4 underline underline-offset-4 decoration-[#D4A373]">Hours</h3>
                <p className="text-sm text-gray-600">
                  Mon-Sat: 7 AM - 9 PM<br />
                  Sun: 8 AM - 8 PM
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="bg-white p-8 shadow-sm border border-gray-100" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-montserrat font-bold mb-6">Drop us a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-gray-400 mb-1">Name</label>
                  <input type="text" className="border-b border-gray-200 focus:border-[#D4A373] outline-none py-2 transition-colors" placeholder="Full Name" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-gray-400 mb-1">Email</label>
                  <input type="email" className="border-b border-gray-200 focus:border-[#D4A373] outline-none py-2 transition-colors" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="flex flex-col mb-8">
                <label className="text-[10px] uppercase font-bold text-gray-400 mb-1">Message</label>
                <textarea rows={4} className="border-b border-gray-200 focus:border-[#D4A373] outline-none py-2 transition-colors resize-none" placeholder="What's on your mind?"></textarea>
              </div>
              <button className="w-full py-4 bg-[#4B2C20] text-[#FDFBF7] font-bold uppercase tracking-widest hover:bg-[#D4A373] transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Map Embed Placeholder */}
          <div className="h-[500px] lg:h-auto bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 shadow-xl overflow-hidden">
             {/* Using a nice placeholder pattern instead of an actual complex embed for simulation */}
             <div className="absolute inset-0 z-0">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Map View" 
                className="w-full h-full object-cover opacity-50" 
               />
             </div>
             <div className="relative z-10 w-full h-full flex items-center justify-center p-8 bg-[#4B2C20]/20">
                <div className="bg-[#FDFBF7] p-8 text-center shadow-2xl border-t-4 border-[#D4A373] max-w-sm">
                  <h4 className="text-lg font-montserrat font-bold text-[#4B2C20] mb-2">Thamel, Kathmandu</h4>
                  <p className="text-sm text-gray-600 mb-6">Find us just a block away from the Garden of Dreams entrance.</p>
                  <a 
                    href="https://www.google.com/maps/search/Thamel+Kathmandu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border-2 border-[#4B2C20] text-[#4B2C20] text-xs font-bold hover:bg-[#4B2C20] hover:text-[#FDFBF7] transition-all"
                  >
                    OPEN IN GOOGLE MAPS
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
