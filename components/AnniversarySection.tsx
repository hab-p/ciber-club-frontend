'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function AnniversarySection() {
  return (
    <section className="w-full px-4 py-3 md:px-8 animate-slide-in-right">
      <ScrollReveal startFrom="left" className="mx-auto max-w-6xl">
        <NeonPanel label="22° Aniversario">
          <img
            src="/LotteryOfAnniversary22th.jpeg"
            alt="Sorteo del 22° aniversario"
            className="mx-auto h-auto w-full max-w-3xl rounded-xl"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
