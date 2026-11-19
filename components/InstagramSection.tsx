'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function InstagramSection() {
  return (
    <section id="instagram" className="w-full px-4 py-3 md:px-8 animate-slide-in-left">
      <ScrollReveal startFrom="right" className="mx-auto max-w-6xl">
        <NeonPanel label="Instagram">
          <iframe
            src="https://www.instagram.com/retrociberclub/embed"
            className="neon-frame mx-auto h-[640px] max-w-xl"
            title="Instagram Ciber-Club"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
