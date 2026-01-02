import { ArrowDown, Wrench } from 'lucide-react';
export default function Hero() {
  return <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-accent/30 to-background">
      <div className="container-calm">
        <div className="max-w-3xl mx-auto text-center">
          {/* Role badge */}
          <div className="inline-flex items-center px-3 py-1.5 mb-6 text-xs font-medium text-muted-foreground bg-muted rounded-full opacity-0 animate-fade-in" style={{
          animationDelay: '0ms'
        }}>Language Learning Coaching</div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight text-balance opacity-0 animate-fade-in" style={{
          animationDelay: '100ms'
        }}>Language Coaching Resource Hub</h1>

          {/* Subcopy */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty opacity-0 animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            Coaching, tools, and research helpers for cross-cultural workers and teams. Calm structure, faithful consistency.
          </p>

          {/* Credibility */}
          <p className="mt-4 text-sm text-muted-foreground/70 opacity-0 animate-fade-in" style={{
          animationDelay: '300ms'
        }}>
            Informed by Canadian Language Benchmarks, ACTFL, and CEFR.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{
          animationDelay: '400ms'
        }}>
            
            <a href="#tools" className="btn-secondary-calm w-full sm:w-auto">
              <Wrench className="w-4 h-4 mr-2" aria-hidden="true" />
              Explore tools
            </a>
          </div>

          {/* Identity info */}
          <div className="mt-16 pt-8 border-t border-border/50 opacity-0 animate-fade-in" style={{
          animationDelay: '500ms'
        }}>
            <p className="text-sm text-muted-foreground">Kevin Duplechin·Linguist·Pioneer Bible Translators<span className="font-medium text-foreground">Kevin Duplechin</span>
              <span className="mx-2">·</span>
              Linguist · Coordinator of Language Learning Coaches
              <span className="mx-2">·</span>
              Pioneer Bible Translators
            </p>
            <p className="mt-2 text-sm text-muted-foreground/70">
              A calm hub for coaching resources, research helpers, and simple tools.
            </p>
          </div>
        </div>
      </div>
    </section>;
}