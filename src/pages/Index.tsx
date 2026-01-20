import { Link } from 'react-router-dom';
import { BookOpen, List, Target, BarChart3, Layers } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const featureCards = [
    {
    title: 'Is My Learning Balanced?',
    description: 'Two-minute Four Strands audit to check input, output, focused study, and fluency. Get one next step and a simple one-week rotation plan.',
    href: 'https://4strands4me.netlify.app/#audit',
    icon: BarChart3,
    external: true,
  },
  {
    title: 'Accrue Language',
    description: 'Track language learning by time, not streaks. See honest totals by day, week, month, and year—without gamification or pressure.',
    href: 'https://accruelanguage.lovable.app/',
    icon: BarChart3,
    external: true,
  },
  {
    title: 'LinguaFlow Lite',
    description: 'Sentence-first acquisition. Read, listen, and flow through leveled content from A1 to C2 across real-world domains.',
    href: 'https://lingua-flow-lite-66d7b581.base44.app/',
    icon: Layers,
    external: true,
  },
  {
    title: 'Start here: the Four Strands',
    description: 'A diagnostic lens for balanced language learning — check your learning diet without replacing your approach.',
    href: '/resources#four-strands',
    icon: BookOpen,
  },
  {
    title: 'Activities index',
    description: 'Twenty research-informed activities organized by strand. Turn research principles into weekly practice.',
    href: '/activities',
    icon: List,
  },
  {
    title: 'Can-do statements & evidence',
    description: 'Choose goals and document progress using ACTFL, Canadian Language Benchmarks, and CEFR frameworks.',
    href: '/standards',
    icon: Target,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        
        {/* Feature cards section */}
        <section className="py-16 md:py-24">
          <div className="container-calm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureCards.map((card) => (
                <Link
                  key={card.title}
                  to={card.href}
                  className="group card-calm flex flex-col h-full"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-accent rounded-lg group-hover:bg-primary/10 transition-colors mb-4">
                    <card.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
