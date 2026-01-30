'use client';

export default function ReglamentoSection() {
  return (
    <section id="reglamento" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-500">Reglamento Deporte Virtual 2-10-25 (ver. 6)</h2>
        
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8 flex justify-center">
             <iframe 
               src="https://drive.google.com/file/d/1nskL-XFFlf0nqBFIZ_9Pu3dfhJu0gpCG/preview" 
               className="w-full h-[800px] rounded-lg"
               title="Reglamento Deportivo Virtual"
             ></iframe>
        </div>
      </div>
    </section>
  );
}
