import { ExternalLink } from 'lucide-react';
const tools = [{
  title: 'Dump Space',
  href: 'https://dumpspace.lovable.app/',
  description: 'A simple capture tool for clearing mental clutter. Get open loops out of your head and into a safe place — so you can return to your work with less noise.',
  color: 'from-sage-light to-accent'
}, {
  title: 'Accrue Language',
  href: 'https://accruelanguage.lovable.app/',
  description: 'Time-based tracking that keeps progress visible. Log your practice, see totals over time, and stay encouraged through clear signals — without gamification.',
  color: 'from-slate-light to-muted'
}, {
  title: 'FluentHour',
  href: 'https://fluenthourpremium.netlify.app/',
  description: 'A guided one-hour practice flow. Start the timer, follow the steps, and finish with measurable progress. Works best with a language helper, and can also be adapted for independent practice.',
  color: 'from-linen to-cream'
}, {
  title: 'FluentHour Companion',
  href: 'https://chatgpt.com/g/g-6958040e8ce881918400c643c84bbfc1-fluenthour-companion',
  description: 'An AI-powered practice assistant designed to complement your FluentHour sessions. Get instant feedback, conversation practice, and personalized guidance.',
  color: 'from-slate-light to-accent'
}, {
  title: 'Sentence Paths',
  href: 'https://sentencepaths.netlify.app/',
  description: 'Import a large sentence library (your own or AI-generated), practice with audio, and optionally include transliteration and word-by-word gloss. Supports up to four columns: Translation, Target Language, optional Transliteration, and optional Word-by-word Gloss.',
  color: 'from-linen to-muted'
}];
export default function Tools() {
  return <section id="tools" className="py-20 md:py-28 bg-muted/20">
      <div className="container-calm">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Tools
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Quiet software that reduces friction and keeps progress visible.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => <a key={tool.title} href={tool.href} target="_blank" rel="noopener noreferrer" className="group card-calm flex flex-col h-full opacity-0 animate-fade-in-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" style={{
          animationDelay: `${index * 100}ms`
        }}>
              {/* Thumbnail placeholder */}
              <div className={`relative w-full aspect-video rounded-lg mb-5 bg-gradient-to-br ${tool.color} overflow-hidden border border-border/50`}>
                <div className="absolute inset-3 bg-card/90 rounded-md shadow-sm border border-border/30">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="p-3 flex items-center justify-center h-[calc(100%-2rem)]">
                    <span className="text-sm font-medium text-muted-foreground">{tool.title}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" aria-hidden="true" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {tool.description}
              </p>
            </a>)}
        </div>

        {/* Portfolio note */}
        <p className="mt-10 text-xs text-muted-foreground/70 text-center max-w-2xl mx-auto">Some projects shown here were created as part of my work with Pioneer Bible Translators. Shown for demonstration only; ownership remains with the respective organization.</p>
      </div>
    </section>;
}