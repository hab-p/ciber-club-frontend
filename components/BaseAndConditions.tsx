'use client';

import ScrollReveal from './ScrollReveal';

export default function BaseAndConditions() {
  return (
    <section className="w-full py-14 px-4 bg-gray-950">
      <ScrollReveal startFrom="right" className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl text-centermd:text-5xl font-bold mb-6 text-blue-500">
          Base y Condiciones del Sorteo 22° Aniversario
        </h2>
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8">
          <iframe
            src="https://drive.google.com/file/d/11LED8lJQxBgKJzd-bXs_isnhLfYN1HLE/preview"
            className="w-full h-[600px] rounded-lg"
            title="Google Sheets Preview"
          ></iframe>
        </div>
      </ScrollReveal>
    </section>
  );
}
