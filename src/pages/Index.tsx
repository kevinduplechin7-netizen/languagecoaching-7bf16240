import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import Coaching from '@/components/Coaching';
import Tools from '@/components/Tools';
import ResearchHelpers from '@/components/ResearchHelpers';
import Approach from '@/components/Approach';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <QuickLinks />
        <Coaching />
        <Tools />
        <ResearchHelpers />
        <Approach />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
