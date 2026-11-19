'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function SpreadsheetSection() {
  return (
    <section className="w-full px-4 py-3 md:px-8">
      <ScrollReveal startFrom="left" className="mx-auto max-w-6xl">
        <NeonPanel label="Titulares de los cupos">
          <iframe
            src="https://docs.google.com/spreadsheets/d/1J3clmzldzm7Gdmp5lAWgQiWl0DNmyFob-WQMf2grDOU/preview"
            className="neon-frame h-[640px]"
            title="Titulares de los cupos a los regalos por el 22° aniversario"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
