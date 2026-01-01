import { useState } from 'react';
import { MessageSquare, List, ChevronDown, ExternalLink } from 'lucide-react';

const activities = [
  {
    strand: 'Meaning-focused input',
    items: ['Reading while listening', 'Extensive reading', 'Narrow reading'],
  },
  {
    strand: 'Meaning-focused output',
    items: ['Role play', 'Prepared talks', 'Read and write'],
  },
  {
    strand: 'Language-focused learning',
    items: ['Transcription', 'Intensive reading', 'Memorized sentences or dialogues', 'Delayed copying'],
  },
  {
    strand: 'Fluency development',
    items: ['Repeated listening', 'Four–three–two activity', 'Repeated reading', 'Speed reading', 'Ten-minute writing', 'Repeated writing'],
  },
  {
    strand: 'General purpose',
    items: ['Word cards', 'Linked skills', 'Issue logs', 'Spelling practice'],
  },
];

export default function ResearchHelpers() {
  const [expandedStrands, setExpandedStrands] = useState<string[]>(activities.map(a => a.strand));

  const toggleStrand = (strand: string) => {
    setExpandedStrands((prev) =>
      prev.includes(strand) ? prev.filter((s) => s !== strand) : [...prev, strand]
    );
  };

  return (
    <section id="research" className="py-20 md:py-28">
      <div className="container-calm">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Research Helpers
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chat with Paul Nation */}
          <article className="card-calm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg">
                <MessageSquare className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Chat with Paul Nation</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ask coaching and language-learning questions against Paul Nation's publicly available research and lectures. Designed to help you find grounded answers quickly.
            </p>
            <p className="text-xs text-muted-foreground/70 mb-5">
              Not affiliated with or endorsed by Paul Nation.
            </p>
            <a
              href="https://notebooklm.google.com/notebook/da30b9be-319d-4de8-8920-470389dd2db8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-sage-dark transition-colors"
            >
              Open chat tool
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </article>

          {/* Nation's twenty activities */}
          <article className="card-calm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg">
                <List className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Nation's twenty activities</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              A practical set of activity options that help turn research principles into weekly practice.
            </p>

            {/* Collapsible strands */}
            <div className="space-y-2">
              {activities.map((activity) => {
                const isExpanded = expandedStrands.includes(activity.strand);
                return (
                  <div key={activity.strand} className="border border-border rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleStrand(activity.strand)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                      aria-expanded={isExpanded}
                    >
                      <span>{activity.strand}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isExpanded ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <ul className="px-4 pb-3 space-y-1">
                        {activity.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-primary">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
