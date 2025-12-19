
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-[#4B2C20] mb-4 uppercase">Visual Journey</h1>
          <p className="text-[#D4A373] text-sm uppercase tracking-[0.4em] font-bold">Moments from our sanctuary</p>
        </div>

        {/* Responsive Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="relative group cursor-pointer break-inside-avoid bg-[#4B2C20]"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full object-cover transition-opacity group-hover:opacity-40" 
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                <p className="text-[#FDFBF7] font-montserrat text-sm font-bold text-center tracking-wider">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-[#D4A373] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Lightbox" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
