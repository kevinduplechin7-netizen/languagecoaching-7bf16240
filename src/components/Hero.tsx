import { Link } from 'react-router-dom';
import { BookOpen, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-accent/30 to-background">
      <div className="container-calm">
        <div className="max-w-3xl mx-auto text-center">
          {/* Role badge */}
          <div
            className="inline-flex items-center px-3 py-1.5 mb-6 text-xs font-medium text-muted-foreground bg-muted rounded-full opacity-0 animate-fade-in"
            style={{ animationDelay: '0ms' }}
          >
            Language Learning Coaching
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight text-balance opacity-0 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            Resources & coaching for language learners
          </h1>

          {/* Subcopy */}
          <p
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty opacity-0 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            A calm collection of research-informed tools, activities, and coaching for cross-cultural workers and teams.
          </p>

          {/* Credibility */}
          <p
            className="mt-4 text-sm text-muted-foreground/70 opacity-0 animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            Informed by Canadian Language Benchmarks, ACTFL, and CEFR.
          </p>

          {/* Buttons */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            <Link to="/resources" className="btn-primary-calm w-full sm:w-auto">
              <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
              Browse resources
            </Link>
            <Link to="/coaching" className="btn-secondary-calm w-full sm:w-auto">
              <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
              Coaching approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
