import GalleryCarousel from '@/components/GalleryCarousel';

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-center text-white">Galería Completa</h1>
          <p className="text-center text-gray-300 mb-8">Revive los mejores momentos de nuestros eventos.</p>
        </div>
        
        {/* Carousel Section - It has its own background and container */}
        <GalleryCarousel />
        
        <div className="container mx-auto px-4 mt-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {/* Placeholder Grid */}
             {Array.from({ length: 6 }).map((_, i) => (
                 <div key={i} className="h-64 bg-gray-800 rounded-lg border border-gray-700"></div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
