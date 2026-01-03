import { Link } from 'react-router-dom';
import { BookOpen, List, Target, Wrench, Users, ExternalLink, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const resourceCategories = [
  {
    id: 'four-strands',
    title: 'Four Strands',
    tag: 'Guide',
    description: 'A diagnostic lens for balanced language learning \u2014 not a replacement for your approach, but a way to check your learning diet.',
    icon: BookOpen,
    href: 'https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/paul-nations-publications/publications/documents/foreign-language_1125.pdf',
    internal: false,
  },
  {
    id: 'activities',
    title: 'Activities Index',
    tag: 'Activity',
    description: 'Twenty research-informed activities organized by strand. Turn research principles into weekly practice.',
    icon: List,
    href: '/activities',
    internal: true,
  },
  {
    id: 'standards',
    title: 'Can-Do Statements & Evidence',
    tag: 'Standard',
    description: 'Choose goals and document evidence using ACTFL, Canadian Language Benchmarks, and CEFR frameworks.',
    icon: Target,
    href: '/standards',
    internal: true,
  },
  {
    id: 'tools',
    title: 'Tools',
    tag: 'Tool',
    description: 'Quiet software that reduces friction and keeps progress visible.',
    icon: Wrench,
    href: '/tools',
    internal: true,
  },
  {
    id: 'coaching',
    title: 'Coaching',
    tag: 'Coaching',
    description: 'Support that meets you where you are ?f��??s��?,?� and helps you move forward with a realistic plan.',
    icon: Users,
    href: '/coaching',
    internal: true,
  },
];

const strands = [
  {
    title: 'Meaning-focused input',
    description: 'Learn through understanding messages',
    icon: BookOpen,
  },
  {
    title: 'Meaning-focused output',
    description: 'Learn through speaking and writing for real purposes',
    icon: BookOpen,
  },
  {
    title: 'Language-focused learning',
    description: 'Deliberate study of vocabulary, grammar, and sound patterns',
    icon: BookOpen,
  },
  {
    title: 'Fluency development',
    description: 'Increasing processing speed with known material',
    icon: BookOpen,
  },
];

const externalResources = [
  {
    title: 'Wheaton ICCT Resources',
    href: 'https://www.wheaton.edu/academics/academic-centers/institute-for-cross-cultural-training/resources/',
    description: 'Cross-cultural training resources from Wheaton College.',
  },
  {
    title: "Paul Nation's Resources",
    href: 'https://www.wgtn.ac.nz/lals/resources/paul-nations-resources',
    description: 'Research materials from Victoria University of Wellington.',
  },
];

export default function ResourcesPage() {
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
              Resources
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A curated collection of guides, activities, standards, and tools for language learners and coaches.
            </p>
          </div>

          {/* Resource cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resourceCategories.map((resource) => (
              <Link
                key={resource.id}
                to={resource.href}
                className="group card-calm flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                    <resource.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {resource.tag}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {resource.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Four Strands section */}
          <section id="four-strands" className="scroll-mt-24 mb-16">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-6">
              The Four Strands
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              We use The Four Strands as a diagnostic lens {"\u2014"} not to replace your approach, but to keep your learning diet balanced. This works alongside GPA, LAMP, or any roadmap.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {strands.map((strand) => (
                <div key={strand.title} className="card-calm text-center">
                  <h3 className="text-base font-semibold text-foreground mb-2">{strand.title}</h3>
                  <p className="text-sm text-muted-foreground">{strand.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* External resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-6">
              External Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {externalResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-calm flex items-start gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

