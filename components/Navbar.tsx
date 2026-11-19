'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
};

type NavGroup = {
  name: string;
  items: NavItem[];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroups, setOpenMobileGroups] = useState<Record<string, boolean>>({});

  const toggleMenu = () => setIsOpen(!isOpen);

  const navGroups: NavGroup[] = [
    {
      name: 'Institucional',
      items: [
        { name: 'Nosotros', href: '/#about' },
        { name: 'Propuesta', href: '/#propuesta-servicio' },
        { name: 'Reglamento', href: '/#reglamento' },
      ],
    },
    {
      name: 'Competencias',
      items: [
        { name: 'Ranking 2026', href: '/#hero' },
        { name: 'Records Históricos', href: '/#records' },
      ],
    },
    {
      name: 'Comunidad',
      items: [
        { name: 'Instagram', href: '/#instagram' },
        { name: 'Galería', href: '/galeria' },
        { name: 'Discord', href: 'https://discord.com/invite/FnrFfXVR7d', external: true },
      ],
    },
    {
      name: 'Soporte / Contacto',
      items: [
        { name: 'Aportantes', href: '/#aportantes' },
        { name: 'Contacto', href: '/#contact' },
      ],
    },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenMobileGroups({});
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#070614]/90 p-4 text-white backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/#navbar" className="z-50 flex items-center gap-3 text-lg font-bold tracking-[0.14em] text-cyan-300">
          <Image 
            src="/Ciberclub_logo.png" 
            alt="Ciber-Club Logo" 
            width={50} 
            height={50} 
            className="rounded-full object-cover"
          />
          Ciber-Club
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navGroups.map((group) => (
            <div
              key={group.name}
              className="relative"
              onMouseEnter={() => setOpenDropdown(group.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="text-xs font-bold tracking-[0.14em] uppercase text-slate-200 transition hover:text-cyan-300"
                aria-haspopup="menu"
                aria-expanded={openDropdown === group.name}
                onClick={() => setOpenDropdown((curr) => (curr === group.name ? null : group.name))}
              >
                {group.name}
              </button>

              {openDropdown === group.name ? (
                <div
                  className="absolute left-0 top-full pt-3 z-50"
                  role="presentation"
                >
                  <div
                    className="min-w-56 rounded-xl border border-violet-400/30 bg-[#100c22]/95 p-2 shadow-xl backdrop-blur"
                    role="menu"
                  >
                    {group.items.map((item) =>
                      item.external ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg px-3 py-2 text-sm text-slate-100 transition hover:bg-white/5 hover:text-cyan-300"
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-100 transition hover:bg-white/5 hover:text-cyan-300"
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden z-50 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#070614] transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          aria-hidden={!isOpen}
        >
          <div className="h-full w-full flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-sm space-y-3">
              {navGroups.map((group) => {
                const isGroupOpen = Boolean(openMobileGroups[group.name]);

                return (
                  <div key={group.name} className="rounded-xl border border-violet-400/25 bg-[#120e28]/80">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold tracking-[0.12em] uppercase transition hover:text-cyan-300"
                      aria-expanded={isGroupOpen}
                      onClick={() =>
                        setOpenMobileGroups((curr) => ({
                          ...curr,
                          [group.name]: !Boolean(curr[group.name]),
                        }))
                      }
                    >
                      <span>{group.name}</span>
                      <span className={`transition-transform ${isGroupOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>

                    {isGroupOpen ? (
                      <div className="px-2 pb-3">
                        {group.items.map((item) =>
                          item.external ? (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-lg px-3 py-2 text-base text-slate-100 transition hover:bg-white/5 hover:text-cyan-300"
                              onClick={closeMobileMenu}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block rounded-lg px-3 py-2 text-base text-slate-100 transition hover:bg-white/5 hover:text-cyan-300"
                              onClick={closeMobileMenu}
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
