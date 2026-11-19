'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

const images = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  url: `/gallery-0${i + 1}.png`,
}));

export default function GalleryCarousel() {
  return (
    <section id="galeria" className="w-full px-4 py-3 md:px-8">
      <ScrollReveal startFrom="left" className="mx-auto max-w-6xl">
        <NeonPanel label="Galería de eventos">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 p-[2px]"
              >
                <img
                  src={img.url}
                  alt={`Evento ${img.id + 1}`}
                  className="h-full w-full rounded-[10px] object-cover"
                />
              </div>
            ))}
          </div>
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
