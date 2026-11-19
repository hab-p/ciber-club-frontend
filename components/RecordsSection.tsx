'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function RecordsSection() {
  return (
    <section id="records" className="w-full px-4 py-3 md:px-8">
      <ScrollReveal startFrom="right" className="mx-auto max-w-6xl">
        <NeonPanel label="Récords históricos">
          <iframe
            src="https://docs.google.com/spreadsheets/d/1NxMF-R5BR9aYLuAxq1QFlOY26v7UIT0blwIhf1K1xPg/preview?widget=true&headers=false"
            className="neon-frame h-[75vh]"
            title="Récords históricos"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
