import { Brain, Clock, Timer, MessageCircle, Layers, ExternalLink } from 'lucide-react';

const appLinks = [
  {
    icon: Brain,
    title: 'Dump Space',
    description: 'Clear mental clutter',
    href: 'https://dumpspace.lovable.app/',
  },
  {
    icon: Clock,
    title: 'Accrue Language',
    description: 'Track practice time',
    href: 'https://accruelanguage.lovable.app/',
  },
  {
    icon: Timer,
    title: 'FluentHour',
    description: 'Guided practice flow',
    href: 'https://fluenthourpremium.netlify.app/',
  },
  {
    icon: MessageCircle,
    title: 'FluentHour Companion',
    description: 'AI practice assistant',
    href: 'https://chatgpt.com/g/g-6958040e8ce881918400c643c84bbfc1-fluenthour-companion',
  },
  {
    icon: Layers,
    title: 'Sentence Paths',
    description: 'Audio sentence practice',
    href: 'https://sentencepaths.netlify.app/',
  },
];

export default function QuickLinks() {
  return (
    <section id="quick-links" className="py-8 bg-muted/30 border-y border-border/50 scroll-mt-20">
      <div className="container-calm">
        <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wide">App Solutions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {appLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                <link.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-sm font-medium text-foreground">{link.title}</span>
                <span className="block text-xs text-muted-foreground">{link.description}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
