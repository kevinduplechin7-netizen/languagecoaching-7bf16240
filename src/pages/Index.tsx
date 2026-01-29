import { Link } from 'react-router-dom';
import { BookOpen, List, Target, BarChart3, Route, Clock, Sparkles, Smartphone, CheckCircle2, ArrowRight, Compass, MessagesSquare, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const flagshipTools = [
  {
    title: 'Sentence Paths',
    description: 'Build automatic recall through structured, leveled sentences. Listen, read, write, and speak—no grammar drills, just steady exposure that compounds into fluency.',
    href: 'https://sentencepathslite.lovable.app/',
    icon: Route,
    image: '/screenshots/sentence-paths-preview.png',
    external: true,
    badge: 'Featured',
  },
  {
    title: 'Accrue Language',
    description: 'Track learning time across the Four Strands—meaning-focused input, output, language-focused learning, and fluency development. See honest totals without streaks or gamification.',
    href: 'https://accruelanguage.lovable.app/',
    icon: BarChart3,
    image: '/screenshots/accrue-language-preview.png',
    external: true,
    badge: 'Featured',
  },
  {
    title: 'FluentHour',
    description: 'One-hour structured speaking sessions with a timer, clear phases, and a calm sequence. 300 sessions from A1 to C2—finish knowing exactly what you accomplished.',
    href: 'https://fluenthour.lovable.app/',
    icon: Clock,
    image: '/screenshots/fluenthour-preview.png',
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
                  className="group flex flex-col h-full bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Screenshot Preview */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={card.image} 
                      alt={`${card.title} app preview`}
                      className="w-full h-full object-cover object-top scale-100 transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      style={{ imageRendering: 'auto' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    {card.badge && (
                      <Badge 
                        variant={card.badge === 'New' ? 'default' : 'secondary'}
                        className={`absolute top-3 right-3 text-xs shadow-md ${
                          card.badge === 'New' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-accent text-accent-foreground border-primary/30'
                        }`}
                      >
                        {card.badge}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <card.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
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

        {/* AI Coaches Section */}
        <section className="py-8 md:py-12">
          <div className="container-calm">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider">AI Coaches</h2>
              <Badge variant="secondary" className="text-xs bg-accent/50 text-accent-foreground border-primary/20">
                Powered by ChatGPT
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MyLanguageCoach */}
              <a
                href="https://chatgpt.com/g/g-69584b86f18c8191ade5d4be4976ffac-mylanguagecoach"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-[4/3] md:aspect-square md:w-48 flex-shrink-0 overflow-hidden bg-muted">
                  <img 
                    src="/screenshots/mylanguagecoach-preview.png" 
                    alt="MyLanguageCoach GPT preview"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      MyLanguageCoach
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    A calm AI coach that helps you choose what to work on, check what fits your life, and commit to one clear next step — without overwhelm.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-auto pt-2 border-t border-border/40">
                    <span className="font-medium">Best for:</span> Learners who need direction more than content.
                  </p>
                </div>
              </a>

              {/* PerfectLanguagePartner */}
              <a
                href="https://chatgpt.com/g/g-69588e17c2f881918bca83a3d874bc10-perfectlanguagepartner"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-[4/3] md:aspect-square md:w-48 flex-shrink-0 overflow-hidden bg-muted">
                  <img 
                    src="/screenshots/perfectlanguagepartner-preview.png" 
                    alt="PerfectLanguagePartner GPT preview"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MessagesSquare className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      PerfectLanguagePartner
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    A structured AI conversation partner with complete practice sessions. Each session has context, goals, guided interaction, and correction across four phases.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-auto pt-2 border-t border-border/40">
                    <span className="font-medium">Best for:</span> Intentional speaking practice, not casual chat.
                  </p>
                </div>
              </a>
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
