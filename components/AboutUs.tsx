export default function AboutUs() {
  return (
    <section id="about" className="relative min-h-[800px] flex items-center pb-40 bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-hero.jpg')" }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/70"></div>

      <div className="container mx-auto px-6 relative z-10 flex justify-end">
        <div className="max-w-3xl text-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">Bienvenido a Ciber-Club</h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            Llevamos tus juegos favoritos a los mejores eventos de tu ciudad. En Ciber-Club, nuestra pasión es crear experiencias inolvidables donde puedas disfrutar del fandom, participar en torneos casuales y aprovechar zonas de juego gratuito para todos.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
             Si buscas compartir tu afición y pasar un buen rato con amigos, aquí encontrarás el ambiente perfecto. Nos dedicamos a fomentar la cultura gamer, conectando comunidades y celebrando la emoción de los videojuegos en cada encuentro.
          </p>
        </div>
      </div>
    </section>
  );
}
