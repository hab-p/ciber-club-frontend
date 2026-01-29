'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import axios from 'axios';

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  // Local gallery images from public folder
  const images = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      url: `/gallery-0${i + 1}.png`
  }));

  // Auto-play
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section id="galeria" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Galería de Eventos</h2>
        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-700" ref={emblaRef}>
          <div className="flex">
            {images.map((img) => (
              <div key={img.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                 <div className="relative h-[500px] bg-gray-700 rounded-lg overflow-hidden">
                    {/* Use standard img tag for external placeholders to avoid Next.js Image config issues for now */}
                    <img 
                        src={img.url} 
                        alt={`Gallery ${img.id}`} 
                        className="w-full h-full object-cover"
                    />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
