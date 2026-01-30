'use client';

export default function ServiceProposal() {
  return (
    <section id="propuesta-servicio" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-green-500">
          Propuesta Servicio para Eventos públicos y privados (2026)
        </h2>
        
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8 flex justify-center">
             <iframe 
               src="https://drive.google.com/file/d/1Ty6OThQYuRRRuQPkNr1eFXGxVLtHTbHX/preview" 
               className="w-full h-[800px] rounded-lg"
               title="Propuesta Servicio para Eventos públicos y privados (2026)"
             ></iframe>
        </div>
      </div>
    </section>
  );
}
