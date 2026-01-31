import { Link } from "react-router-dom";
import {
  BookOpen,
  List,
  Target,
  BarChart3,
  Route,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Compass,
  MessagesSquare,
  ExternalLink,
  GraduationCap,
  Mail,
  Calendar,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PremiumScreenshot from "@/components/PremiumScreenshot";

const flagshipTools = [
  {
    title: "Sentence Paths",
    description:
      "Real fluency grows sentence by sentence. Listen. Read. Write. Speak. Import your own materials or bring text from anywhere—and practice writing by hand with stylus ink mode.",
    href: "https://sentencepathslite.lovable.app/",
    icon: Route,
    image: "/screenshots/sentence-paths-preview.png",
    badge: "Featured",
  },
  {
    title: "Accrue Language",
    description:
      "Track learning time across the Four Strands—meaning-focused input, output, language-focused learning, and fluency development. See honest totals without streaks or gamification.",
    href: "https://accruelanguage.lovable.app/",
    icon: BarChart3,
    image: "/screenshots/accrue-language-preview.png",
    badge: "Featured",
  },
  {
    title: "FluentHour",
    description:
      "One-hour structured speaking sessions with a timer, clear phases, and a calm sequence. 300 sessions from A1 to C2—finish knowing exactly what you accomplished.",
    href: "https://fluenthour.lovable.app/",
    icon: Clock,
    image: "/screenshots/fluenthour-preview.png",
    badge: "New",
  },
];

const aiCoaches = [
  {
    title: "MyLanguageCoach",
    description:
      "A calm AI coach that helps you choose what to work on, check what fits your life, and commit to one clear next step — without overwhelm.",
    href: "https://chatgpt.com/g/g-69584b86f18c8191ade5d4be4976ffac-mylanguagecoach",
    icon: Compass,
    image: "/screenshots/mylanguagecoach-preview.png",
    bestFor: "Learners who need direction more than content.",
  },
  {
    title: "PerfectLanguagePartner",
    description:
      "A structured AI conversation partner with complete practice sessions. Each session has context, goals, guided interaction, and correction across four phases.",
    href: "https://chatgpt.com/g/g-69588e17c2f881918bca83a3d874bc10-perfectlanguagepartner",
    icon: MessagesSquare,
    image: "/screenshots/perfectlanguagepartner-preview.png",
    bestFor: "Intentional speaking practice, not casual chat.",
  },
];

const resourceCards = [
  {
    title: "The Four Strands",
    description:
      "A diagnostic lens for balanced language learning — check your learning diet without replacing your approach.",
    href: "/resources#four-strands",
    icon: BookOpen,
    image: "/screenshots/four-strands-preview.png",
  },
  {
    title: "Activities Index",
    description:
      "Twenty research-informed activities organized by strand. Turn research principles into weekly practice.",
    href: "/activities",
    icon: List,
    image: "/screenshots/activities-index-preview.png",
  },
  {
    title: "Can-Do Statements",
    description: "Choose goals and document progress using ACTFL, CLB, and CEFR frameworks.",
    href: "/standards",
    icon: Target,
    image: "/screenshots/can-do-preview.png",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />

        {/* Progress, Not Perfection (calm + research-backed, no over-claims) */}
        <section className="py-10 md:py-12">
          <div className="container-calm">
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs border-primary/30 text-primary">
                      Progress, Not Perfection
                    </Badge>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                      Build fluency by executing calmly
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">
                      Language growth isn&apos;t about finding the perfect method or the perfect app. It&apos;s about
                      steady execution: do a manageable amount, notice what works, adjust, and repeat.
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                      {[
                        "Keep what works",
                        "Calmly and deliberately make adjustments",
                        "Execute your plan consistently to build volume and accuracy",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 bg-background/60 rounded-xl border border-border/40 p-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Gentle stats section (framed as approximate + varies by learner/language) */}
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="bg-background/60 rounded-xl border border-border/40 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-4 h-4 text-primary" aria-hidden="true" />
                          <h3 className="text-sm font-semibold text-foreground">What volume tends to do</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          As input volume rises, you meet the same high-frequency words and structures over and over.
                          That repetition is what makes them feel automatic.
                        </p>
                      </div>

                      <div className="bg-background/60 rounded-xl border border-border/40 p-4">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                          Approximate milestones
                        </div>
                        <ul className="text-sm text-muted-foreground leading-relaxed space-y-2">
                          <li>
                            <span className="font-medium text-foreground">~200,000 words</span> of reading: many
                            learners have seen <span className="font-medium text-foreground">hundreds</span> of
                            recurring word families and reinforced core patterns.
                          </li>
                          <li>
                            <span className="font-medium text-foreground">~500,000 words</span>: more stable recognition
                            of common structures; fewer pauses for basic decoding.
                          </li>
                          <li>
                            <span className="font-medium text-foreground">~3,000,000 words</span>: substantially wider
                            coverage for many general texts, depending on topic and language distance.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-background/60 rounded-xl border border-border/40 p-4">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                          A calm takeaway
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          You don&apos;t need a perfect plan. You need a plan you&apos;ll actually keep. Consistency
                          compounds—quietly.
                        </p>
                        <p className="text-xs text-muted-foreground/70 leading-relaxed mt-3">
                          Note: these are broad, research-informed heuristics. Real results vary with language, material
                          difficulty, and consistency.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 text-xs text-muted-foreground/70 leading-relaxed max-w-3xl">
                      Research note: vocabulary growth depends heavily on repeated encounters across meaningful input.
                      See: Nation, P. (2014). How much input do you need to learn the most frequent 9,000 words?{" "}
                      <em>Reading in a Foreign Language</em>, 26(2), 1–16.
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Button asChild className="gap-2">
                        <Link to="/coaching">
                          Get a calm plan
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="gap-2">
                        <Link to="/four-strands-quiz">
                          Audit your balance
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle footer strip */}
              <div className="px-6 md:px-8 py-4 border-t border-border/40 bg-gradient-to-r from-accent/20 via-primary/5 to-accent/20">
                <p className="text-sm text-muted-foreground">
                  Stop chasing better tools. Start using the ones you already have. Perfection slows you down. Execution
                  moves you forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Strands Quiz Banner */}
        <section className="py-8 md:py-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 border-y border-border/30">
          <div className="container-calm">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 text-xs border-primary/30 text-primary">
                    Interactive Diagnostic
                  </Badge>
                  <h2 className="text-lg md:text-xl font-semibold text-foreground">Audit Your Learning Balance</h2>
                </div>
              </div>
              <p className="text-muted-foreground flex-1 md:text-center">
                Take a quick quiz to diagnose how well your language learning covers all Four Strands.
              </p>
              <Button asChild className="gap-2 whitespace-nowrap">
                <Link to="/four-strands-quiz">
                  Take the Quiz
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Flagship Tools */}
        <section className="py-16 md:py-20">
          <div className="container-calm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Flagship Tools</h2>
              <Link
                to="/tools"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {flagshipTools.map((tool) => (
                <a
                  key={tool.title}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative">
                    <PremiumScreenshot src={tool.image} alt={`${tool.title} app preview`} />
                    <Badge
                      variant={tool.badge === "New" ? "default" : "secondary"}
                      className={`absolute top-3 right-3 text-xs shadow-md z-10 ${
                        tool.badge === "New"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-accent-foreground border-primary/30"
                      }`}
                    >
                      {tool.badge}
                    </Badge>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <tool.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching CTA - Full-width accent band */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-accent/30 via-primary/5 to-accent/30">
          <div className="container-calm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-background/80 border-primary/20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Language Coaching</h2>
                <p className="text-muted-foreground max-w-xl leading-relaxed">
                  Clarify your goals, choose the right activities, and track real progress with a coach who understands
                  the Four Strands framework.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <div className="flex flex-col gap-2 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    1-on-1 coaching sessions
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Custom app design available
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Coach training for teams
                  </span>
                </div>
                <div className="flex items-center">
                  <Button asChild className="gap-2">
                    <Link to="/coaching">
                      Explore coaching
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Coaches */}
        <section className="py-12 md:py-16">
          <div className="container-calm">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider">AI Coaches</h2>
              <Badge variant="outline" className="text-xs text-muted-foreground border-border">
                Powered by ChatGPT
              </Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiCoaches.map((coach) => (
                <a
                  key={coach.title}
                  href={coach.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="sm:w-48 flex-shrink-0">
                    <PremiumScreenshot
                      src={coach.image}
                      alt={`${coach.title} preview`}
                      className="sm:rounded-l-xl sm:rounded-r-none"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <coach.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {coach.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/50 ml-auto" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{coach.description}</p>
                    <p className="text-xs text-muted-foreground/70 mt-auto pt-2 border-t border-border/40">
                      <span className="font-medium">Best for:</span> {coach.bestFor}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12 md:py-16">
          <div className="container-calm">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resourceCards.map((card) => (
                <Link
                  key={card.title}
                  to={card.href}
                  className="group flex flex-col bg-card rounded-xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <PremiumScreenshot src={card.image} alt={`${card.title} illustration`} />
                  <div className="flex flex-col p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <card.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gentle CTA - Let's Connect */}
        <section className="py-16 md:py-20 pb-20 md:pb-24">
          <div className="container-calm">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Have a question?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you&apos;re curious about coaching, want a quote for custom software, or just want to say hello
                — I&apos;d love to hear from you. If you&apos;re new here, feel free to book a free intro session. No
                pressure, just a conversation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendly.com/kevin-duplechin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-calm w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                  Book a free intro call
                </a>
                <a href="mailto:kevinduplechin7@gmail.com" className="btn-secondary-calm w-full sm:w-auto">
                  <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                  Send me an email
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground/60">kevinduplechin7@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
