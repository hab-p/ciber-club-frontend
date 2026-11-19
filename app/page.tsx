import AboutUs from '@/components/AboutUs';
import AnniversarySection from '@/components/AnniversarySection';
import BaseAndConditions from '@/components/BaseAndConditions';
import SpreadsheetSection from '@/components/SpreadsheetSection';
import ServiceProposal from '@/components/ServiceProposal';
import HeroRanking from '@/components/HeroRanking';
import RecordsSection from '@/components/RecordsSection';
import ReglamentoSection from '@/components/ReglamentSection';
import InstagramSection from '@/components/InstagramSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import AportantesSection from '@/components/AportantesSection';
import Contact from '@/components/Contact';
import NeonPanel from '@/components/NeonPanel';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070614]">
      <AboutUs />
      <AnniversarySection />
      <BaseAndConditions />
      <SpreadsheetSection />
      <ServiceProposal />
      <HeroRanking />
      <RecordsSection />
      <ReglamentoSection />

      <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-3 px-4 py-4 md:px-8">
        <a href="/galeria" className="btn-neon-ghost">
          Ver galería
        </a>
        <a
          href="https://www.instagram.com/retrociberclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon-ghost"
        >
          Seguir en Instagram
        </a>
      </div>

      <InstagramSection />
      <GalleryCarousel />
      <AportantesSection />

      <section className="w-full px-4 py-3 md:px-8 animate-slide-in-left">
        <div className="mx-auto max-w-6xl">
          <NeonPanel label="Buscamos staff">
            <img
              src="/Buscamos-Staff-Ciber-Club.jpeg"
              alt="Buscamos staff Ciber-Club"
              className="mx-auto h-auto w-full max-w-md rounded-xl"
            />
          </NeonPanel>
        </div>
      </section>

      <Contact />
    </div>
  );
}
