'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function Contact() {
  return (
    <section id="contact" className="w-full px-4 py-3 pb-16 md:px-8">
      <ScrollReveal startFrom="left" className="mx-auto max-w-6xl">
        <NeonPanel label="Contacto">
          <p className="mb-5 max-w-xl text-sm text-slate-300 md:text-base">
            Escribinos para eventos, la liga o para sumarte al staff.
          </p>
          <div className="mb-6 space-y-2 text-slate-200">
            <p>
              <span className="text-cyan-300">Mail:</span> ciberclubcoop@gmail.com
            </p>
            <p>
              <span className="text-fuchsia-300">Instagram:</span> @retrociberclub
            </p>
            <p>
              <span className="text-cyan-300">Discord:</span>{' '}
              <a
                href="https://discord.gg/FnrFfXVR7d"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cyan-400/50 hover:text-cyan-200"
              >
                https://discord.gg/FnrFfXVR7d
              </a>
            </p>
          </div>
          <a href="mailto:ciberclubcoop@gmail.com" className="btn-neon">
            Escribir
          </a>
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
