'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function ReglamentoSection() {
  return (
    <section id="reglamento" className="w-full px-4 py-3 md:px-8">
      <ScrollReveal startFrom="left" className="mx-auto max-w-6xl">
        <NeonPanel label="Reglamento deporte virtual">
          <iframe
            src="https://drive.google.com/file/d/1-ghQmVqUrUWJAcQynmCSzY6R9QiK-aoG/preview"
            className="neon-frame h-[760px]"
            title="Reglamento deportivo virtual"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
