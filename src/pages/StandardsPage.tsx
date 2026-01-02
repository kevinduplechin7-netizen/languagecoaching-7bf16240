import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Target, FileText, Globe, Folder } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const standards = [
  {
    title: 'ACTFL Can-Do Statements',
    href: 'https://www.actfl.org/educator-resources/ncssfl-actfl-can-do-statements',
    icon: Target,
    description: 'Proficiency benchmarks for interpersonal, interpretive, and presentational communication.',
    explanation: 'Use these statements to set clear, measurable goals and track what you can actually do with the language.',
  },
  {
    title: 'Canadian Language Benchmarks — Can Do Statements',
    href: 'https://www.language.ca/product/pdf-e-006-can-do-statements/',
    icon: FileText,
    description: 'Practical descriptors for real-world language tasks across proficiency levels.',
    explanation: 'These help you choose goals based on everyday communication needs and document your progress.',
  },
  {
    title: 'Canadian Language Benchmarks — Digital Tools',
    href: 'https://www.language.ca/resourcesexpertise/language-for-success/digital-tools/can-do-statements/',
    icon: Globe,
    description: 'Interactive digital tools for self-assessment and goal-setting.',
    explanation: 'Access online resources to identify your current level and plan your next steps.',
  },
  {
    title: 'European Language Portfolio',
    href: 'https://www.coe.int/en/web/portfolio',
    icon: Folder,
    description: 'A structured approach to documenting language learning progress and achievements.',
    explanation: 'Use this framework to collect evidence of your progress and reflect on your learning journey.',
  },
];

export default function StandardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container-calm">
          {/* Back link */}
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Resources
          </Link>

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Standards & Evidence
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Frameworks for setting clear goals and documenting real progress. These standards help you know where you are and where you're going.
            </p>
          </div>

          {/* Standards cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((standard) => (
              <a
                key={standard.title}
                href={standard.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-calm flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                    <standard.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {standard.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {standard.description}
                </p>
                <p className="text-sm text-muted-foreground/80 mt-auto pt-3 border-t border-border/50">
                  {standard.explanation}
                </p>
              </a>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border max-w-2xl">
            <h2 className="text-base font-semibold text-foreground mb-2">
              Why use standards?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standards give you a shared language for goals and progress. They help you move beyond vague feelings about how you're doing and toward clear evidence of what you can actually accomplish with the language.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
