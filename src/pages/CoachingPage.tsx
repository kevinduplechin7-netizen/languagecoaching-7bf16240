import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Mail, Users, UserCog, Globe, CheckCircle2, BookOpen, Target, List, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const steps = [
  { label: 'Clarify', caption: 'what matters to you' },
  { label: 'Choose', caption: 'goals + path' },
  { label: 'Practice', caption: 'the right activities' },
  { label: 'Evidence', caption: 'track Â· review Â· adjust' },
];

const coachingCards = [
  {
    icon: Users,
    title: 'Training Learners',
    description: 'Practical coaching for real conversations. We clarify your goals, choose a simple weekly rhythm, and build confidence through targeted practice — without overwhelm.',
    bullets: [
      'Clear goals tied to real contexts',
      'Sustainable weekly plan',
      'Encouraging, effective feedback',
    ],
  },
  {
    icon: UserCog,
    title: 'Training Language Coaches',
    description: 'Coach development with structure and field realism. I help teams translate research into repeatable coaching habits — with templates, session patterns, and a clear way to track progress.',
    bullets: [
      'Session design and goal-setting',
      'Feedback habits that help learners grow',
      'Coaching systems that hold up in busy seasons',
    ],
  },
  {
    icon: Globe,
    title: 'Ministry and cross-cultural contexts',
    description: 'Language learning in cross-cultural work comes with unique constraints. I help you build a plan that respects workload, relationships, and the conversations that matter most.',
    bullets: [
      'Stronger practice design',
      'Better alignment between training and real tasks',
      'Clearer progress tracking',
    ],
  },
];

const readingPath = [
  { title: 'Start here: Four Strands', href: '/resources#four-strands', icon: BookOpen },
  { title: 'Choose goals: Can-do statements', href: '/standards', icon: Target },
  { title: 'Pick activities', href: '/activities', icon: List },
  { title: 'Track evidence', href: '/standards', icon: FileText },
];

const questions = [
  'What do you want and need to do with the language?',
  'What feels most important right now?',
  'Where do you feel stuck?',
  'What kind of support helps you most?',
];

const evidenceOptions = [
  'Goals (can-do statements)',
  'Quick practice notes',
  'Short samples (audio, writing, screenshots)',
  'Periodic review and adjustments',
];

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container-calm">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Coaching
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Support that meets you where you are — and helps you move forward with a realistic plan you can actually keep.
            </p>
          </div>

          {/* 4-step success graphic */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">How you succeed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div key={step.label} className="relative card-calm text-center py-8">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-3">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.caption}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 text-muted-foreground/50 z-10" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Coaching approach */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">Coaching approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coachingCards.map((card) => (
                <article key={card.title} className="card-calm flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg">
                      <card.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <ul className="mt-auto space-y-2">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Already working with me */}
          <section className="mb-16 p-8 bg-muted/30 rounded-xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-8">Already working with me?</h2>
            
            {/* What to read first */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-foreground mb-4">What to read first</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {readingPath.map((item, index) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* How we meet */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-foreground mb-3">How we meet</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Sessions can range from weekly to once a month, depending on your needs and bandwidth. I usually suggest starting more frequently, then tapering as your systems stabilize and momentum builds.
              </p>
            </div>

            {/* What I'll ask you */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-foreground mb-3">What I'll ask you</h3>
              <ul className="space-y-2">
                {questions.map((question) => (
                  <li key={question} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">Â·</span>
                    <span>"{question}"</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How we document progress */}
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">How we document progress</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                We'll choose a progress-tracking method that truly fits you — something that feels natural and motivating — and we'll keep it clear enough for both of us to use confidently in sessions and between sessions.
              </p>
              <p className="text-sm text-muted-foreground mb-3">Lightweight evidence options:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {evidenceOptions.map((option) => (
                  <li key={option} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground font-medium mt-4">
                We'll focus on what matters to you, document real progress, and keep moving you toward your goal.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://calendly.com/kevin-duplechin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-calm inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Schedule a consultation
            </a>
            <p className="mt-4">
              <a
                href="mailto:kevin.duplechin@pioneerbible.org"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
