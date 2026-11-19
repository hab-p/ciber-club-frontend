'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function ServiceProposal() {
  return (
    <section id="propuesta-servicio" className="w-full px-4 py-3 md:px-8">
      <ScrollReveal startFrom="right" className="mx-auto max-w-6xl">
        <NeonPanel label="Propuesta de servicio 2026">
          <iframe
            src="https://drive.google.com/file/d/1QX_-SPN0Sn2sKDnhDs0V4dRC3zjRzX_e/preview"
            className="neon-frame h-[760px]"
            title="Propuesta de servicio para eventos públicos y privados 2026"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
