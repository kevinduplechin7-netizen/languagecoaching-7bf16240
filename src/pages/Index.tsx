import { Link } from 'react-router-dom';
import { BookOpen, List, Target, BarChart3, Route, Clock, Sparkles, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const flagshipTools = [
  {
    title: 'Sentence Paths',
    description: 'Build automatic recall through structured, leveled sentences. No grammar drills—just steady exposure that compounds into fluency.',
    href: 'https://sentencepathslite.lovable.app/',
    icon: Route,
    external: true,
    badge: 'Featured',
  },
  {
    title: 'Accrue Language',
    description: 'Track learning time across the Four Strands—input, output, focused study, and fluency. See honest totals without streaks or gamification.',
    href: 'https://accruelanguage.lovable.app/',
    icon: BarChart3,
    external: true,
    badge: 'Featured',
  },
  {
    title: 'FluentHour',
    description: 'One-hour structured sessions with a timer, phases, and a calm sequence. Finish knowing exactly what you accomplished.',
    href: 'https://fluenthour.lovable.app/',
    icon: Clock,
    external: true,
    badge: 'New',
  },
];

const featureCards = [
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
        
        {/* Flagship tools - top row */}
        <section className="py-16 md:py-24 pb-8 md:pb-12">
          <div className="container-calm">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">Flagship Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {flagshipTools.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-calm flex flex-col h-full border-primary/20 hover:border-primary/40 relative"
                >
                  {card.badge && (
                    <Badge 
                      variant={card.badge === 'New' ? 'default' : 'secondary'}
                      className={`absolute -top-2 -right-2 text-xs ${
                        card.badge === 'New' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-accent text-accent-foreground border-primary/30'
                      }`}
                    >
                      {card.badge}
                    </Badge>
                  )}
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mb-4">
                    <card.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Feature cards section */}
        <section className="py-8 md:py-12">
          <div className="container-calm">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Resources</h2>
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
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Custom App Design - Tasteful Ad */}
        <section className="py-12 md:py-16 pb-16 md:pb-24">
          <div className="container-calm">
            <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-r from-primary/5 via-accent/20 to-primary/5 border border-primary/15">
              <Badge className="absolute -top-2.5 left-5 bg-primary/90 text-primary-foreground px-2.5 py-0.5 text-xs font-medium">
                <Sparkles className="w-3 h-3 mr-1" />
                Premium Service
              </Badge>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-11 h-11 items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Want a custom app for learning your language?
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-lg">
                      I can design a personalized language-learning app tailored to your goals, vocabulary, and learning style.
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        Your vocabulary
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        Your method
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        Offline-ready
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <Button asChild size="sm" className="gap-2">
                    <Link to="/coaching">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
