'use client';

export default function HeroRanking() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col items-center justify-start bg-gray-900 text-white pt-24 pb-10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>

      <div className="container mx-auto px-4 z-10 relative flex flex-col h-full flex-grow">
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
      </div>
    </section>
  );
}
