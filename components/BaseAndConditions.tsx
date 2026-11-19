'use client';

import ScrollReveal from './ScrollReveal';
import NeonPanel from './NeonPanel';

export default function BaseAndConditions() {
  return (
    <section className="w-full px-4 py-3 md:px-8">
      <ScrollReveal startFrom="right" className="mx-auto max-w-6xl">
        <NeonPanel label="Bases y condiciones del sorteo">
          <iframe
            src="https://drive.google.com/file/d/11LED8lJQxBgKJzd-bXs_isnhLfYN1HLE/preview"
            className="neon-frame h-[640px]"
            title="Bases y condiciones del sorteo 22° aniversario"
          />
        </NeonPanel>
      </ScrollReveal>
    </section>
  );
}
