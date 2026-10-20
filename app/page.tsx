import HeroRanking from '@/components/HeroRanking';
import RecordsSection from '@/components/RecordsSection';
import InstagramSection from '@/components/InstagramSection';
import AboutUs from '@/components/AboutUs';
import GalleryCarousel from '@/components/GalleryCarousel';
import ContactForm from '@/components/ContactForm';
import ReglamentoSection from '@/components/ReglamentoSection';
import ServiceProposal from '@/components/ServiceProposal';
import AportantesSection from '@/components/AportantesSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <AboutUs />

      <ServiceProposal />

      <HeroRanking />
      
      <RecordsSection />

      <ReglamentoSection />

      <InstagramSection />
      
      <GalleryCarousel />

      <AportantesSection />

      <section className="w-full py-14 px-4">
        <div className="max-w-5xl mx-auto flex justify-center">
          <img
            src="/Buscamos-Staff-Ciber-Club.jpeg"
            alt="Buscamos Staff Ciber-Club"
            className="w-full max-w-[520px] h-auto rounded-xl border border-gray-700 shadow-xl"
          />
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
