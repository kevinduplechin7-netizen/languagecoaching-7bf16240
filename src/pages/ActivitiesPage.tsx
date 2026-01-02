import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const activities = [
  {
    strand: 'Meaning-focused input',
    id: 'meaning-input',
    items: [
      {
        name: 'Reading while listening',
        what: 'Follow along with written text while listening to audio of the same material.',
        benefits: 'Connects written and spoken forms, improves pronunciation awareness, supports comprehension.',
        helper: 'The helper reads aloud while the learner follows, or provides audio recordings.',
        variations: {
          beginner: 'Use very short, familiar texts with slow audio.',
          intermediate: 'Use longer texts with natural-speed audio.',
          advanced: 'Use authentic materials like podcasts with transcripts.',
        },
      },
      {
        name: 'Extensive reading',
        what: 'Read large amounts of easy, enjoyable material without stopping to look up every word.',
        benefits: 'Builds vocabulary through repeated exposure, develops reading fluency, increases confidence.',
        helper: 'Help select appropriate-level materials and discuss what was read.',
        variations: {
          beginner: 'Graded readers at a comfortable level.',
          intermediate: 'Young adult novels or adapted texts.',
          advanced: 'Newspapers, novels, or online articles.',
        },
      },
      {
        name: 'Narrow reading',
        what: 'Read multiple texts on the same topic to encounter repeated vocabulary in context.',
        benefits: 'Deepens topic-specific vocabulary, builds background knowledge, improves comprehension.',
        helper: 'Gather multiple articles or texts on topics of interest to the learner.',
        variations: {
          beginner: 'Simple news stories on one topic.',
          intermediate: 'Blog posts or articles from different sources.',
          advanced: 'Academic articles or in-depth reporting.',
        },
      },
    ],
  },
  {
    strand: 'Meaning-focused output',
    id: 'meaning-output',
    items: [
      {
        name: 'Role play',
        what: 'Practice realistic conversations by acting out scenarios with a partner.',
        benefits: 'Builds confidence, practices real-world language, develops conversational strategies.',
        helper: 'Create scenarios, play different roles, provide feedback on communication success.',
        variations: {
          beginner: 'Simple, predictable exchanges (ordering food, greetings).',
          intermediate: 'Negotiate, explain problems, handle unexpected turns.',
          advanced: 'Complex scenarios requiring persuasion or nuance.',
        },
      },
      {
        name: 'Prepared talks',
        what: 'Plan and deliver short presentations on familiar topics.',
        benefits: 'Develops extended speaking, builds confidence, improves organization.',
        helper: 'Help with planning, listen to delivery, give feedback on clarity.',
        variations: {
          beginner: 'One-minute talk on a very familiar topic.',
          intermediate: 'Three-minute talk with some structure.',
          advanced: 'Longer presentations with Q&A.',
        },
      },
      {
        name: 'Read and write',
        what: 'Read a text, then write a response, summary, or related piece.',
        benefits: 'Connects reading and writing skills, practices using new vocabulary in context.',
        helper: 'Provide texts, discuss responses, give feedback on writing.',
        variations: {
          beginner: 'Write a few sentences responding to a short text.',
          intermediate: 'Summarize an article or write a short opinion piece.',
          advanced: 'Write analytical responses or extended arguments.',
        },
      },
    ],
  },
  {
    strand: 'Language-focused learning',
    id: 'language-focused',
    items: [
      {
        name: 'Transcription',
        what: 'Listen to audio and write down exactly what is said.',
        benefits: 'Sharpens listening accuracy, reveals gaps in vocabulary and grammar knowledge.',
        helper: 'Provide audio, check transcriptions, discuss errors.',
        variations: {
          beginner: 'Short, clear sentences with pauses.',
          intermediate: 'Longer passages at natural speed.',
          advanced: 'Authentic audio with background noise or accents.',
        },
      },
      {
        name: 'Intensive reading',
        what: 'Read a short text carefully, analyzing vocabulary, grammar, and structure.',
        benefits: 'Deepens understanding of language patterns, builds analytical skills.',
        helper: 'Select challenging texts, guide analysis, answer questions.',
        variations: {
          beginner: 'Single sentences or very short paragraphs.',
          intermediate: 'Paragraphs with new structures.',
          advanced: 'Complex texts with sophisticated language.',
        },
      },
      {
        name: 'Memorized sentences or dialogues',
        what: 'Learn useful sentences or short dialogues by heart.',
        benefits: 'Provides ready-to-use language, builds automaticity with common patterns.',
        helper: 'Model pronunciation, practice together, create contexts for use.',
        variations: {
          beginner: 'Basic greetings and survival phrases.',
          intermediate: 'Useful conversational routines.',
          advanced: 'Sophisticated expressions or cultural references.',
        },
      },
      {
        name: 'Delayed copying',
        what: 'Read a phrase, look away, then write it from memory.',
        benefits: 'Strengthens spelling and word form memory, builds attention to detail.',
        helper: 'Provide phrases, check accuracy, discuss errors.',
        variations: {
          beginner: 'Single words or very short phrases.',
          intermediate: 'Sentences with some complexity.',
          advanced: 'Longer passages with challenging vocabulary.',
        },
      },
    ],
  },
  {
    strand: 'Fluency development',
    id: 'fluency',
    items: [
      {
        name: 'Repeated listening',
        what: 'Listen to the same audio multiple times to improve understanding and speed.',
        benefits: 'Builds automatic recognition of patterns, improves listening fluency.',
        helper: 'Provide audio, discuss content after each listening.',
        variations: {
          beginner: 'Very short clips with familiar content.',
          intermediate: 'Longer clips with some new vocabulary.',
          advanced: 'Authentic audio at full speed.',
        },
      },
      {
        name: 'Four–three–two activity',
        what: 'Tell the same story three times: first in 4 minutes, then 3, then 2.',
        benefits: 'Forces increased speaking speed, builds fluency with the same content.',
        helper: 'Time each telling, encourage faster delivery each time.',
        variations: {
          beginner: 'Very simple story, may start with 3-2-1.',
          intermediate: 'Standard 4-3-2 with personal stories.',
          advanced: 'Complex topics or unfamiliar content.',
        },
      },
      {
        name: 'Repeated reading',
        what: 'Read the same text multiple times to increase reading speed.',
        benefits: 'Builds reading fluency, improves word recognition speed.',
        helper: 'Time readings, track progress, encourage faster attempts.',
        variations: {
          beginner: 'Very short texts, focus on comfort.',
          intermediate: 'Paragraphs with familiar vocabulary.',
          advanced: 'Longer passages with time targets.',
        },
      },
      {
        name: 'Speed reading',
        what: 'Push to read faster than comfortable, focusing on main ideas.',
        benefits: 'Develops scanning and skimming skills, increases reading rate.',
        helper: 'Provide timed reading activities, check comprehension.',
        variations: {
          beginner: 'Very easy texts with time pressure.',
          intermediate: 'News articles or stories with time limits.',
          advanced: 'Academic texts with comprehension checks.',
        },
      },
      {
        name: 'Ten-minute writing',
        what: 'Write continuously for ten minutes without stopping to correct.',
        benefits: 'Builds writing fluency, reduces perfectionism, increases output.',
        helper: 'Provide prompts, encourage continuous writing, discuss content after.',
        variations: {
          beginner: 'Write about very familiar topics.',
          intermediate: 'Write on assigned topics.',
          advanced: 'Write in different genres or styles.',
        },
      },
      {
        name: 'Repeated writing',
        what: 'Write the same piece multiple times to improve speed and accuracy.',
        benefits: 'Builds automatic production of common patterns.',
        helper: 'Provide topics, compare versions, track improvement.',
        variations: {
          beginner: 'Short descriptions or lists.',
          intermediate: 'Paragraphs or short essays.',
          advanced: 'Complex arguments or narratives.',
        },
      },
    ],
  },
  {
    strand: 'General purpose',
    id: 'general',
    items: [
      {
        name: 'Word cards',
        what: 'Create and review flashcards with target vocabulary.',
        benefits: 'Builds vocabulary, supports spaced repetition, enables self-study.',
        helper: 'Help select words, check understanding, test recall.',
        variations: {
          beginner: 'High-frequency words with pictures.',
          intermediate: 'Topic-specific vocabulary with example sentences.',
          advanced: 'Academic or specialized vocabulary.',
        },
      },
      {
        name: 'Linked skills',
        what: 'Practice multiple skills in sequence around the same content.',
        benefits: 'Reinforces learning, connects skills, provides varied practice.',
        helper: 'Design sequences, provide materials, guide transitions.',
        variations: {
          beginner: 'Listen, then speak, then write simple content.',
          intermediate: 'Read, discuss, then write responses.',
          advanced: 'Complex sequences across multiple sessions.',
        },
      },
      {
        name: 'Issue logs',
        what: 'Keep a record of language problems and solutions encountered.',
        benefits: 'Supports reflection, tracks progress, guides focused study.',
        helper: 'Review logs together, help find patterns, suggest solutions.',
        variations: {
          beginner: 'Simple notes on confusing words.',
          intermediate: 'Detailed logs with examples and solutions.',
          advanced: 'Systematic tracking with analysis.',
        },
      },
      {
        name: 'Spelling practice',
        what: 'Focused practice on spelling difficult or important words.',
        benefits: 'Improves writing accuracy, builds word form knowledge.',
        helper: 'Dictate words, check spelling, provide targeted practice.',
        variations: {
          beginner: 'High-frequency words with regular patterns.',
          intermediate: 'Irregular or exception words.',
          advanced: 'Technical or specialized vocabulary.',
        },
      },
    ],
  },
];

export default function ActivitiesPage() {
  const [expandedActivities, setExpandedActivities] = useState<string[]>([]);

  const toggleActivity = (activityName: string) => {
    setExpandedActivities((prev) =>
      prev.includes(activityName)
        ? prev.filter((a) => a !== activityName)
        : [...prev, activityName]
    );
  };

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
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Activities Index
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Twenty research-informed activities organized by strand. Click any activity to see details, benefits, and variations.
            </p>
          </div>

          {/* Table of contents */}
          <nav className="mb-12 p-6 bg-muted/30 rounded-lg border border-border">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Jump to strand
            </h2>
            <ul className="flex flex-wrap gap-3">
              {activities.map((strand) => (
                <li key={strand.id}>
                  <a
                    href={`#${strand.id}`}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    {strand.strand}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Activities by strand */}
          <div className="space-y-12">
            {activities.map((strand) => (
              <section key={strand.id} id={strand.id} className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  {strand.strand}
                </h2>
                <div className="space-y-3">
                  {strand.items.map((activity) => {
                    const isExpanded = expandedActivities.includes(activity.name);
                    return (
                      <div
                        key={activity.name}
                        className="border border-border rounded-lg overflow-hidden bg-card"
                      >
                        <button
                          type="button"
                          onClick={() => toggleActivity(activity.name)}
                          className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-foreground hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                          aria-expanded={isExpanded}
                        >
                          <span>{activity.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            isExpanded ? 'max-h-[800px]' : 'max-h-0'
                          }`}
                        >
                          <div className="px-5 pb-5 space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-1">What it is</h4>
                              <p className="text-sm text-muted-foreground">{activity.what}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-1">Benefits</h4>
                              <p className="text-sm text-muted-foreground">{activity.benefits}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-1">Role of the helper</h4>
                              <p className="text-sm text-muted-foreground">{activity.helper}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-2">Variations</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="p-3 bg-accent/30 rounded-lg">
                                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Beginner</span>
                                  <p className="text-sm text-muted-foreground mt-1">{activity.variations.beginner}</p>
                                </div>
                                <div className="p-3 bg-accent/30 rounded-lg">
                                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Intermediate</span>
                                  <p className="text-sm text-muted-foreground mt-1">{activity.variations.intermediate}</p>
                                </div>
                                <div className="p-3 bg-accent/30 rounded-lg">
                                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Advanced</span>
                                  <p className="text-sm text-muted-foreground mt-1">{activity.variations.advanced}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
