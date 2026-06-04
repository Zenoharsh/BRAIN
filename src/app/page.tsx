import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageCarousel from '@/components/ImageCarousel';
import ContextSection from '@/components/ContextSection';
import PillarsSummary from '@/components/PillarsSummary';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ImageCarousel />
        <ContextSection />
        <PillarsSummary />
      </main>
      <Footer />
    </>
  );
}
