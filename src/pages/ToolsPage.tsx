import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Inbox,
  Columns3,
  BarChart2,
  Clock,
  MessageSquare,
  Route,
  Compass,
  MessagesSquare,
  Clapperboard,
  UtensilsCrossed,
  Beef,
  Bookmark,
  LucideIcon,
  Youtube,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Tool {
  title: string;
  href: string;
  description: string;
  descriptionSuffix?: string;
  designedLink?: string;
  missionPartnerNote?: boolean;
  bestFor: string;
  color: string;
  icon: LucideIcon;
  supports?: string[];
  badge?: "New" | "Featured";
  youtube?: string;
}

interface FunBuild {
  title: string;
  href: string;
  description: string;
  bestFor: string;
  color: string;
  icon: LucideIcon;
}

export const tools: Tool[] = [
  {
    title: "Sentence Paths",
    href: "https://sentencepathslite.lovable.app/",
    description:
      "Real fluency grows sentence by sentence. Listen. Read. Write. Speak. Immerse yourself in thousands of meaningful sentences—import your own materials or bring text from anywhere. Write by hand with stylus ink mode.",
    bestFor: "practicing more, in more ways—brick by brick, one sentence at a time.",
    color: "from-primary/20 to-accent",
    icon: Route,
    badge: "New",
    youtube: "https://www.youtube.com/@sentencepaths",
  },
  {
    title: "Dump Space",
    href: "https://dumpspace.lovable.app/",
    description:
      "Capture language notes, sentences, or ideas without deciding what to do with them yet. A safe place to unload mental clutter so focus can return.",
    bestFor: "clearing open loops and collecting raw language input.",
    color: "from-sage-light to-accent",
    icon: Inbox,
  },
  {
    title: "Interlinear Studio",
    href: "https://chatgpt.com/g/g-6958a771444881918c4c59c6b55f33ca-interlinear-studio",
    description:
      "Turn translations or linguistic data into clean, aligned interlinear tables for Excel or Google Sheets. Outputs ready-to-use TSV with headers — no fixing columns, no formatting cleanup.",
    bestFor: "structured study, Anki preparation, and sentence-first learning.",
    color: "from-slate-light to-muted",
    icon: Columns3,
  },
  {
    title: "Accrue Language",
    href: "https://accruelanguage.lovable.app/",
    description:
      "Track language learning by time, not streaks. See honest totals by day, week, month, and year — across languages and activities — without gamification or pressure.",
    bestFor: "maintaining long-term momentum and realistic expectations.",
    color: "from-linen to-cream",
    icon: BarChart2,
  },
  {
    title: "FluentHour",
    href: "https://fluenthour.lovable.app/",
    description:
      "A structured one-hour language session framework. Start the timer, follow a calm sequence, and finish knowing exactly what you accomplished.",
    bestFor: "focused practice with a helper or independent deep work.",
    color: "from-slate-light to-accent",
    icon: Clock,
    badge: "New",
  },
  {
    title: "FluentHour Companion",
    href: "https://chatgpt.com/g/g-6958040e8ce881918400c643c84bbfc1-fluenthour-companion",
    description:
      "An AI assistant that supports FluentHour sessions with prompts, feedback, and structure — without replacing human judgment or automating decisions.",
    bestFor: "learners who want guidance without loss of agency.",
    color: "from-linen to-muted",
    icon: MessageSquare,
  },
  {
    title: "Fluent Hour Phase Actor",
    href: "https://chatgpt.com/g/g-695ca3f3a694819187975bb509bc15cb-fluent-hour-phase-actor",
    description:
      "A GPT that converts a Fluent Hour session or phase into a timed, speakable script in the target language—preserving structure/labels, keeping dialogue natural and level-appropriate, and adding pacing, repeat loops, and correction recasts to fill the full time. If the target language is missing, it asks one question and stops. Output is target-language only and uses number words.",
    bestFor: "turning English phases into ready-to-run target-language phases fast.",
    color: "from-slate-light to-accent",
    icon: Clapperboard,
  },
  {
    title: "MyLanguageCoach",
    href: "https://chatgpt.com/g/g-69584b86f18c8191ade5d4be4976ffac-mylanguagecoach",
    description:
      "A calm language-learning coach that helps you choose what to work on, check what fits your life, and commit to one clear next step — without overwhelm.",
    bestFor: "learners who need direction more than content.",
    color: "from-linen to-accent",
    icon: Compass,
  },
  {
    title: "PerfectLanguagePartner",
    href: "https://chatgpt.com/g/g-69588e17c2f881918bca83a3d874bc10-perfectlanguagepartner",
    description:
      "A structured AI conversation partner built around complete practice sessions. Each session provides context, goals, guided interaction, and correction across four phases.",
    bestFor: "intentional speaking practice, not casual chat.",
    color: "from-sage-light to-accent",
    icon: MessagesSquare,
  },
];

const funBuilds: FunBuild[] = [
  {
    title: "Lunchie Invite",
    href: "https://lunchie-invite-6cddf1e4.base44.app/",
    description: "Send a lunch invite. They pick a place. You meet up. Simple.",
    bestFor: "Fast, low-friction lunch planning that doesn't turn into a group chat spiral.",
    color: "from-linen to-cream",
    icon: UtensilsCrossed,
  },
  {
    title: "Phat Carnivore",
    href: "https://phatcarnivore.lovable.app/",
    description: "A brutalist daily counter for beef, bacon, eggs, butter—and whatever else you ate.",
    bestFor: "Simple tracking without macros, charts, or diet math.",
    color: "from-slate-light to-muted",
    icon: Beef,
  },
  {
    title: "Where Did I Leave Off",
    href: "https://wheredidileaveoff.lovable.app/",
    description: "Track where you left off in books, groups, and errands.",
    bestFor: "Picking up exactly where you stopped without mental overhead.",
    color: "from-sage-light to-accent",
    icon: Bookmark,
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="group p-5 rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 flex flex-col h-full relative">
      {tool.badge && (
        <span
          className={`absolute -top-2 -right-2 px-2 py-0.5 text-xs font-semibold rounded-full ${
            tool.badge === "New"
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground border border-primary/30"
          }`}
        >
          {tool.badge}
        </span>
      )}

      <div
        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 border border-border/30`}
      >
        <tool.icon className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {tool.title}
        </h2>
        <ExternalLink
          className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5"
          aria-hidden="true"
        />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {tool.description}
        {tool.designedLink && (
          <>
            {" "}
            <Link to={tool.designedLink} className="underline hover:text-primary transition-colors">
              Designed
            </Link>
            {tool.descriptionSuffix}
          </>
        )}
      </p>

      {tool.missionPartnerNote && (
        <p className="text-xs text-muted-foreground/70 mt-2">
          <Link to="/contact" className="underline hover:text-primary transition-colors">
            Mission partner access is available on request for organizational use.
          </Link>
        </p>
      )}

      {Array.isArray(tool.supports) && (
        <ul className="mt-2 text-xs text-muted-foreground/80 space-y-0.5">
          {tool.supports.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}

      <p className="text-xs text-muted-foreground/70 mt-3 pt-2 border-t border-border/40">
        <span className="font-medium">Best for:</span> {tool.bestFor}
      </p>

      <div className="mt-auto pt-4 flex flex-wrap gap-2">
        <a
          href={tool.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background px-3 py-2 text-xs font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          aria-label={`Open ${tool.title}`}
        >
          Open tool
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>

        {tool.youtube && (
          <a
            href={tool.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background px-3 py-2 text-xs font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            aria-label={`Open ${tool.title} on YouTube`}
          >
            <Youtube className="w-3.5 h-3.5" aria-hidden="true" />
            YouTube tips
          </a>
        )}
      </div>
    </article>
  );
}

function FunBuildCard({ build }: { build: FunBuild }) {
  return (
    <article className="group p-5 rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 flex flex-col h-full">
      <div
        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${build.color} flex items-center justify-center mb-4 border border-border/30`}
      >
        <build.icon className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {build.title}
        </h3>
        <ExternalLink
          className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5"
          aria-hidden="true"
        />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{build.description}</p>

      <p className="text-xs text-muted-foreground/70 mt-3 pt-2 border-t border-border/40">
        <span className="font-medium">Best for:</span> {build.bestFor}
      </p>

      <div className="mt-auto pt-4">
        <a
          href={build.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background px-3 py-2 text-xs font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          aria-label={`Open ${build.title}`}
        >
          Open tool
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container-calm">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">Tools</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">Calm software. Precise workflows.</p>
            <p className="mt-2 text-base text-muted-foreground/80 leading-relaxed">
              Built for serious language learners—especially when the problem is too specific for generic apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <ToolCard key={tool.title} tool={tool} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-semibold text-foreground mb-2">Minimalist Fun Builds</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Small tools. Clean interfaces. Built for everyday life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {funBuilds.map((build) => (
                <FunBuildCard key={build.title} build={build} />
              ))}
            </div>
          </div>

          <div className="mt-16 p-6 rounded-xl border border-border/60 bg-muted/30 max-w-2xl mx-auto">
            <h3 className="text-sm font-semibold text-foreground mb-2">Software Builds Attribution</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              All software builds, language tools, sentence libraries, scaffolding systems, and instructional content
              presented on this site are original works created by Kevin Duplechin and are his sole intellectual
              property, protected under United States copyright law. These materials are provided for personal use only
              and may not be copied, redistributed, or used for commercial purposes without prior written permission.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
