import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 py-24">
      <Image
        src="/banner-hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#070614]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070614]/35 via-[#070614]/55 to-[#070614]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="bg-gradient-to-r from-cyan-300 via-sky-100 to-fuchsia-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
          ¡Bienvenido al Ciber-Club!
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-200 md:text-lg">
          Llevamos tus juegos favoritos a eventos presenciales para que vivas una experiencia inolvidable: compartir la pasión por los videojuegos, jugar gratis, participar en torneos y disfrutar del fandom.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
          Si querés hacer amigos, formar un clan o colaborar con nuestra organización social, ¡este es tu lugar! Fomentamos la cultura geek-gamer, construimos comunidad, impulsamos la Liga Gamer, recuperamos hardware en desuso para uso social y celebramos la emoción de las LAN parties en cada fecha.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/#hero" className="btn-neon">
            Ranking 2026
          </Link>
          <a
            href="https://discord.com/invite/FnrFfXVR7d"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-ghost"
          >
            Sumate al Discord
          </a>
        </div>
      </div>
    </section>
  );
}
