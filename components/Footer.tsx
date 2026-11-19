import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05040e] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm font-bold tracking-[0.18em] text-white">CIBER-CLUB</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Comunidad gamer, torneos y LAN parties. Cultura geek desde 2004.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold tracking-[0.18em] text-white">ENLACES</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/#about" className="hover:text-cyan-300">Nosotros</Link></li>
            <li><Link href="/#hero" className="hover:text-cyan-300">Ranking 2026</Link></li>
            <li><Link href="/#galeria" className="hover:text-cyan-300">Galería</Link></li>
            <li><Link href="/#reglamento" className="hover:text-cyan-300">Reglamento</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold tracking-[0.18em] text-white">COMUNIDAD</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="https://www.instagram.com/retrociberclub/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">
                Instagram @retrociberclub
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/FnrFfXVR7d" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">
                Discord
              </a>
            </li>
            <li>
              <a href="mailto:ciberclubcoop@gmail.com" className="text-cyan-300 hover:text-cyan-200">
                ciberclubcoop@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        Ciber-Club Copyright Reserved © 2004 - 2026 | Web Master: IG @henry.alvarezbte
      </p>
    </footer>
  );
}
