import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MessageSquare } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const tools = [
  {
    title: 'Dump Space',
    href: 'https://dumpspace.lovable.app/',
    description: 'A simple capture tool for clearing mental clutter. Get open loops out of your head and into a safe place — so you can return to your work with less noise.',
    color: 'from-sage-light to-accent',
  },
  {
    title: 'Accrue Language',
    href: 'https://accruelanguage.lovable.app/',
    description: 'Time-based tracking that keeps progress visible. Log your practice, see totals over time, and stay encouraged through clear signals — without gamification.',
    color: 'from-slate-light to-muted',
  },
  {
    title: 'FluentHour',
    href: 'https://fluent-hour.netlify.app/',
    description: 'A guided one-hour practice flow. Start the timer, follow the steps, and finish with measurable progress. Works best with a language helper, and can also be adapted for independent practice.',
    color: 'from-linen to-cream',
  },
  {
    title: 'FluentHour Companion',
    href: 'https://chatgpt.com/g/g-6958040e8ce881918400c643c84bbfc1-fluenthour-companion',
    description: 'An AI-powered practice assistant designed to complement your FluentHour sessions. Get instant feedback, conversation practice, and personalized guidance.',
    color: 'from-slate-light to-accent',
  },
  {
    title: 'Sentence Paths',
    href: 'https://sentencepaths.netlify.app/',
    description: 'Import a large sentence library (your own or AI-generated), practice with audio, and optionally include transliteration and word-by-word gloss. Supports up to four columns: Translation, Target Language, optional Transliteration, and optional Word-by-word Gloss.',
    color: 'from-linen to-muted',
  },
  {
    title: 'Chat with Paul Nation',
    href: 'https://notebooklm.google.com/notebook/da30b9be-319d-4de8-8920-470389dd2db8',
    description: "Ask coaching and language-learning questions against Paul Nation's publicly available research and lectures. Designed to help you find grounded answers quickly.",
    color: 'from-sage-light to-muted',
    note: 'Not affiliated with or endorsed by Paul Nation.',
    icon: MessageSquare,
  },
];

export default function ToolsPage() {
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
              Tools
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Quiet software that reduces friction and keeps progress visible.
            </p>
          </div>

          {/* Tools grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 flex flex-col h-full"
              >
                {/* Icon accent */}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 border border-border/30`}>
                  {tool.icon ? (
                    <tool.icon className="w-5 h-5 text-foreground/70" />
                  ) : (
                    <span className="text-xs font-semibold text-foreground/70">{tool.title.charAt(0)}</span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.title}
                  </h2>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" aria-hidden="true" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {tool.description}
                </p>
                {tool.note && (
                  <p className="text-xs text-muted-foreground/60 mt-2 italic">
                    {tool.note}
                  </p>
                )}
              </a>
            ))}
          </div>

          {/* Builder note */}
          <p className="mt-12 text-sm text-muted-foreground/70 text-center">
            Built and curated by Kevin Duplechin.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
