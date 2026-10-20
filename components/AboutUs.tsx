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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">¡Bienvenido al Ciber-Club!</h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            Llevamos tus juegos favoritos a eventos presenciales para que vivas una experiencia inolvidable: compartir la pasión por los videojuegos, jugar gratis, participar en torneos y disfrutar del fandom.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
             Si querés hacer amigos, formar un clan o colaborar con nuestra organización social, ¡este es tu lugar!
          </p>
          <br />
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
             Fomentamos la cultura geek-gamer, construimos comunidad, impulsamos la Liga Gamer, recuperamos hardware en desuso para uso social y celebramos la emoción de las LAN parties en cada fecha.
          </p>
        </div>
      </div>
    </section>
  );
}
