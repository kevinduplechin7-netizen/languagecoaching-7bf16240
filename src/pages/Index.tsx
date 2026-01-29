import { Link } from 'react-router-dom';
import { BookOpen, List, Target, BarChart3, Route, Clock, Sparkles, Smartphone, CheckCircle2, ArrowRight, Compass, MessagesSquare, ExternalLink, GraduationCap } from 'lucide-react';
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
    badge: 'Featured',
  },
  {
    title: 'Accrue Language',
    description: 'Track learning time across the Four Strands—meaning-focused input, output, language-focused learning, and fluency development. See honest totals without streaks or gamification.',
    href: 'https://accruelanguage.lovable.app/',
    icon: BarChart3,
    image: '/screenshots/accrue-language-preview.png',
    badge: 'Featured',
  },
  {
    title: 'FluentHour',
    description: 'One-hour structured speaking sessions with a timer, clear phases, and a calm sequence. 300 sessions from A1 to C2—finish knowing exactly what you accomplished.',
    href: 'https://fluenthour.lovable.app/',
    icon: Clock,
    image: '/screenshots/fluenthour-preview.png',
    badge: 'New',
  },
];

const aiCoaches = [
  {
    title: 'MyLanguageCoach',
    description: 'A calm AI coach that helps you choose what to work on, check what fits your life, and commit to one clear next step — without overwhelm.',
    href: 'https://chatgpt.com/g/g-69584b86f18c8191ade5d4be4976ffac-mylanguagecoach',
    icon: Compass,
    image: '/screenshots/mylanguagecoach-preview.png',
    bestFor: 'Learners who need direction more than content.',
  },
  {
    title: 'PerfectLanguagePartner',
    description: 'A structured AI conversation partner with complete practice sessions. Each session has context, goals, guided interaction, and correction across four phases.',
    href: 'https://chatgpt.com/g/g-69588e17c2f881918bca83a3d874bc10-perfectlanguagepartner',
    icon: MessagesSquare,
    image: '/screenshots/perfectlanguagepartner-preview.png',
    bestFor: 'Intentional speaking practice, not casual chat.',
  },
];

const resourceCards = [
  {
    title: 'The Four Strands',
    description: 'A diagnostic lens for balanced language learning — check your learning diet without replacing your approach.',
    href: '/resources#four-strands',
    icon: BookOpen,
    image: '/screenshots/four-strands-preview.png',
  },
  {
    title: 'Activities Index',
    description: 'Twenty research-informed activities organized by strand. Turn research principles into weekly practice.',
    href: '/activities',
    icon: List,
    image: '/screenshots/activities-index-preview.png',
  },
  {
    title: 'Can-Do Statements',
    description: 'Choose goals and document progress using ACTFL, CLB, and CEFR frameworks.',
    href: '/standards',
    icon: Target,
    image: '/screenshots/can-do-preview.png',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        
        {/* Flagship Tools */}
        <section className="py-16 md:py-20">
          <div className="container-calm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Flagship Tools</h2>
              <Link to="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {flagshipTools.map((tool) => (
                <a
                  key={tool.title}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={tool.image} 
                      alt={`${tool.title} app preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    <Badge 
                      variant={tool.badge === 'New' ? 'default' : 'secondary'}
                      className={`absolute top-3 right-3 text-xs shadow-md ${
                        tool.badge === 'New' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-accent text-accent-foreground border-primary/30'
                      }`}
                    >
                      {tool.badge}
                    </Badge>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <tool.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching CTA - Full-width accent band */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-accent/30 via-primary/5 to-accent/30">
          <div className="container-calm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-background/80 border-primary/20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  Language Coaching
                </h2>
                <p className="text-muted-foreground max-w-xl leading-relaxed">
                  Clarify your goals, choose the right activities, and track real progress with a coach who understands the Four Strands framework.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <div className="flex flex-col gap-2 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    1-on-1 coaching sessions
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Custom app design available
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Coach training for teams
                  </span>
                </div>
                <div className="flex items-center">
                  <Button asChild className="gap-2">
                    <Link to="/coaching">
                      Explore coaching
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Coaches */}
        <section className="py-12 md:py-16">
          <div className="container-calm">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider">AI Coaches</h2>
              <Badge variant="outline" className="text-xs text-muted-foreground border-border">
                Powered by ChatGPT
              </Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiCoaches.map((coach) => (
                <a
                  key={coach.title}
                  href={coach.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[4/3] sm:aspect-square sm:w-44 flex-shrink-0 overflow-hidden bg-muted">
                    <img 
                      src={coach.image} 
                      alt={`${coach.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <coach.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {coach.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/50 ml-auto" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {coach.description}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-auto pt-2 border-t border-border/40">
                      <span className="font-medium">Best for:</span> {coach.bestFor}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12 md:py-16 pb-20 md:pb-24">
          <div className="container-calm">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resourceCards.map((card) => (
                <Link
                  key={card.title}
                  to={card.href}
                  className="group flex flex-col bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                    <img 
                      src={card.image} 
                      alt={`${card.title} illustration`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                  <div className="flex flex-col p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <card.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
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
