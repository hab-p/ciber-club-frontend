'use client';

import ScrollReveal from './ScrollReveal';

export default function HeroRanking() {
  const laCuevaDelHonguitoInstagramUrl = 'https://www.instagram.com/lacuevadelhonguito/';
  const leChatNoirInstagramUrl = 'https://www.instagram.com/lechatnoir.cuadernos/';

  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col items-center justify-start bg-gray-900 text-white pt-24 pb-10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>

      <ScrollReveal startFrom="left" className="container mx-auto px-4 z-10 relative flex flex-col h-full flex-grow">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Ranking 2026
        </h1>

        {/* Google Sheets Embed */}
        <div className="w-full flex-grow bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl overflow-hidden p-8">
          <iframe 
            src="https://docs.google.com/spreadsheets/d/1IbX5JF3-qbteWPpSajpbTiA_3TW6G94S07kQWtlwf-w/preview?widget=true&headers=false"
            className="w-full h-[80vh] rounded-lg"
            frameBorder="0"
            allowFullScreen
            title="Ranking 2026 Spreadsheet"
          ></iframe>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[720px]">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
              Premios Temporada de Verano 2026
            </h2>

            <div className="relative w-full">
              <img
                src="/Flyer-Premio-Final-Temporada-Verano.jpeg"
                alt="Flyer Premio Final Temporada Verano"
                className="w-full h-auto rounded-xl border border-gray-700 shadow-xl"
              />

              <a
                href={laCuevaDelHonguitoInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram La Cueva del Honguito"
                title="Ir al Instagram del Sponsor"
                className="group absolute z-20 block rounded-full cursor-pointer outline-none focus:outline-none focus-visible:outline-none"
                style={{ top: '23%', left: '72%', width: '25%', height: '25%', transform: 'translate(5%, 10%)', clipPath: 'circle(50% at 50% 50%)' }}
              >
                <span className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[120%] whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                  Ir al Instagram del Sponsor
                </span>
              </a>

              <a
                href={leChatNoirInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Le Chat Noir"
                title="Ir al Instagram del Sponsor"
                className="group absolute z-20 block rounded-full cursor-pointer outline-none focus:outline-none focus-visible:outline-none"
                style={{ top: '52%', left: '72.4%', width: '25%', height: '25%', transform: 'translate(5%, 10%)', clipPath: 'circle(50% at 50% 50%)' }}
              >
                <span className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[120%] whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                  Ir al Instagram del Sponsor
                </span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
