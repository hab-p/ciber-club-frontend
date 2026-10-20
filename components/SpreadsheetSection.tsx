'use client';

import ScrollReveal from './ScrollReveal';

export default function SpreadsheetSection() {
  return (
    <section className="w-full py-14 px-4 bg-gray-900 border-t border-gray-800">
      <ScrollReveal startFrom="right" className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-center md:text-4xl font-bold mb-6 text-blue-500">Títulares de los CUPOS a los REGALOS por el 22° Aniversario      </h2>
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8 flex justify-center">
          <iframe
            src="https://docs.google.com/spreadsheets/d/1J3clmzldzm7Gdmp5lAWgQiWl0DNmyFob-WQMf2grDOU/preview"
            className="w-full h-[600px] rounded-lg"
            title="Google Sheets Preview"
          ></iframe>
        </div>
      </ScrollReveal>
    </section>
  );
}
