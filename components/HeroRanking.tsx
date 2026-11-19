'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function HeroRanking() {
  return (
    <section id="hero" className="w-full px-4 py-3 md:px-8 animate-slide-in-right">
      <ScrollReveal startFrom="left" className="mx-auto max-w-6xl">
        <NeonPanel label="Ranking 2026">
          <iframe
            src="https://docs.google.com/spreadsheets/d/1YVFGkLnw5xwE-5m2EYpnGw0Ml5a2rHu43t2-TL5S7u4/preview?gid=0&widget=true&headers=false"
            className="neon-frame h-[75vh]"
            title="Ranking 2026"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
