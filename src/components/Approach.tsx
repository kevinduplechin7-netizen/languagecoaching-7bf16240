import { BookOpen, MessageCircle, Lightbulb, Zap } from 'lucide-react';

const strands = [
  {
    icon: BookOpen,
    title: 'Meaning-focused input',
    description: 'Learn through understanding messages',
  },
  {
    icon: MessageCircle,
    title: 'Meaning-focused output',
    description: 'Learn through speaking and writing for real purposes',
  },
  {
    icon: Lightbulb,
    title: 'Language-focused learning',
    description: 'Deliberate study of vocabulary, grammar, and sound patterns',
  },
  {
    icon: Zap,
    title: 'Fluency development',
    description: 'Increasing processing speed with known material',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-20 md:py-28 bg-muted/20">
      <div className="container-calm">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Four Strands as a diagnostic lens
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We use Paul Nation's Four Strands as a diagnostic lens — not to replace your approach, but to keep your learning diet balanced. This works alongside GPA, LAMP, or any roadmap.
          </p>
        </div>

        {/* Strands grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {strands.map((strand, index) => (
            <div
              key={strand.title}
              className="card-calm text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent rounded-xl mx-auto mb-4">
                <strand.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{strand.title}</h3>
              <p className="text-sm text-muted-foreground">{strand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
