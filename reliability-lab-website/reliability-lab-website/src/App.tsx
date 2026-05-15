import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { ServiceDetail } from './components/sections/ServiceDetail';
import { About } from './components/sections/About';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ServicesGrid />
        <ServiceDetail />
        <About />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;
