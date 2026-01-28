import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';

/**
 * Home Page
 * Main landing page featuring hero section, about section, gallery, and location
 */
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Location />
    </div>
  );
}

