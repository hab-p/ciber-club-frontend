import HeroRanking from '@/components/HeroRanking';
import RecordsSection from '@/components/RecordsSection';
import InstagramSection from '@/components/InstagramSection';
import AboutUs from '@/components/AboutUs';
import GalleryCarousel from '@/components/GalleryCarousel';
import ContactForm from '@/components/ContactForm';
import ReglamentoSection from '@/components/ReglamentoSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <HeroRanking />
      
      <RecordsSection />

      <AboutUs />

      <InstagramSection />
      
      <GalleryCarousel />

      <ReglamentoSection />

      <ContactForm />
    </div>
  );
}
