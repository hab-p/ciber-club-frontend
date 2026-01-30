'use client';

export default function AportantesSection() {
  return (
    <section id="aportantes" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-500">APORTANTES 2026</h2>
        
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8 flex justify-center">
             <iframe 
               src="https://docs.google.com/spreadsheets/d/1gMHt4Rh86n5heGUDYsu01JiEahtVGWMpV7LB1XNSeJ8/preview?widget=true&headers=false"
               className="w-full h-[800px] rounded-lg"
               frameBorder="0"
               allowFullScreen
               title="APORTANTES 2026"
             ></iframe>
        </div>
      </div>
    </section>
  );
}
