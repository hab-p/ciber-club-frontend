'use client';

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-pink-500">Instagram Ciber-Club</h2>
        
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8 flex justify-center">
             <iframe 
               src="https://www.instagram.com/retrociberclub/embed" 
               className="w-full h-[600px] rounded-lg"
               frameBorder="0"
               allowFullScreen
               title="Instagram Ciber-Club"
             ></iframe>
        </div>
      </div>
    </section>
  );
}
