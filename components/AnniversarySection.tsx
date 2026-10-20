'use client';

import ScrollReveal from './ScrollReveal';

export default function AnniversarySection() {
  return (
    <section className="w-full py-14 px-4 bg-gray-950">
      <ScrollReveal startFrom="left" className="max-w-5xl mx-auto flex justify-center">
        <img
          src="/LotteryOfAnniversary22th.jpeg"
          alt="Lottery Of Anniversary 22th"
          className="w-full max-w-[800px] h-auto rounded-xl border border-gray-700 shadow-xl"
        />
      </ScrollReveal>
    </section>
  );
}
