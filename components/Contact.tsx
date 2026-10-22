'use client';

import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-14 px-4 bg-gray-950">
      <ScrollReveal startFrom="left" className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">
          Contacto
        </h2>
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8 space-y-4 text-center">
          <p className="text-lg text-gray-200">
            <span className="font-semibold text-blue-400">Mail:</span> ciberclubcoop@gmail.com
          </p>
          <p className="text-lg text-gray-200">
            <span className="font-semibold text-pink-400">Instagram:</span> @retrociberclub
          </p>
          <p className="text-lg text-gray-200">
            <span className="font-semibold text-indigo-400">Discord:</span>{' '}
            <a
              href="https://discord.gg/FnrFfXVR7d"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-300"
            >
              https://discord.gg/FnrFfXVR7d
            </a>
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}


