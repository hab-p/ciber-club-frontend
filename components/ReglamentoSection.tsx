'use client';

import ScrollReveal from './ScrollReveal';

export default function ReglamentoSection() {
  return (
    <section id="reglamento" className="py-20 bg-gray-900 border-t border-gray-800">
      <ScrollReveal startFrom="left" className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-500">Reglamento Deporte Virtual</h2>
        
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8 flex justify-center">
             <iframe 
               src="https://drive.google.com/file/d/1-ghQmVqUrUWJAcQynmCSzY6R9QiK-aoG/preview" 
               className="w-full h-[800px] rounded-lg"
               title="Reglamento Deportivo Virtual"
             ></iframe>
        </div>
      </ScrollReveal>
    </section>
  );
}
