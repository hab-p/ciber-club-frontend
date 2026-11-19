'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function AportantesSection() {
  return (
    <section id="aportantes" className="w-full px-4 py-3 md:px-8">
      <ScrollReveal startFrom="right" className="mx-auto max-w-6xl">
        <NeonPanel label="Aportantes 2026">
          <iframe
            src="https://docs.google.com/spreadsheets/d/1gMHt4Rh86n5heGUDYsu01JiEahtVGWMpV7LB1XNSeJ8/preview?widget=true&headers=false"
            className="neon-frame h-[760px]"
            title="Aportantes 2026"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
