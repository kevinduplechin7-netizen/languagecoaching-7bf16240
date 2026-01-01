import { Users, UserCog, Globe, Calendar, CheckCircle2 } from 'lucide-react';

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

export default function Coaching() {
  return (
    <section id="coaching" className="py-20 md:py-28">
      <div className="container-calm">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Coaching
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Support that meets you where you are — and helps you move forward with a realistic plan you can actually keep.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coachingCards.map((card, index) => (
            <article
              key={card.title}
              className="card-calm flex flex-col h-full opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://calendly.com/kevin-duplechin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-calm inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Schedule a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
