import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Handshake,
  Languages,
  Linkedin,
  Mail,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import kevinPhoto from "@/assets/kevin-duplechin.png.asset.json";

const LINKEDIN_URL = "https://www.linkedin.com/in/kevin-duplechin-63b48a158/";

const scrollToPageTop = () => {
  window.setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, 0);
};

const experienceHighlights = [
  "M.A. in Linguistics",
  "15+ years of language-learning, field, and coaching experience",
  "Language coach with Pioneer Bible Translators",
  "Experience with learners, coaches, teams, and minority-language contexts",
];

const coachingOpportunities = [
  {
    icon: MessageCircle,
    title: "Individual language coaching",
    description:
      "Single sessions, 3-session starter plans, and 6-session momentum plans for learners who need clarity, structure, and realistic next steps.",
    bullets: ["Study-plan review", "Weekly rhythm design", "Resource and method guidance"],
  },
  {
    icon: Users,
    title: "Coach and learner support",
    description:
      "Training support for language coaches, field teams, and organizations that need repeatable coaching habits instead of scattered advice.",
    bullets: ["Session design", "Feedback habits", "Progress documentation"],
  },
  {
    icon: Handshake,
    title: "Saturday workshops",
    description:
      "Limited Saturday workshops for churches, schools, nonprofits, businesses, government teams, mission organizations, and language programs.",
    bullets: ["Mission trip preparation", "Local ministry language orientation", "Minority-language learning systems"],
  },
];

const planCards = [
  {
    title: "Single Strategy Session",
    price: "$150",
    note: "One focused reset",
  },
  {
    title: "3-Session Starter Plan",
    price: "$375",
    note: "Save $75 compared with three single sessions",
  },
  {
    title: "6-Session Momentum Plan",
    price: "$675",
    note: "Save $225 compared with six single sessions",
  },
];

const workshopTopics = [
  "Mission trip language preparation",
  "Local missions, immigrant ministry, and refugee outreach",
  "Minority-language learning when mainstream apps are limited",
  "Language-learning strategy for teams and organizations",
  "ACTFL-style goals, can-do planning, and evidence of progress",
  "Sentence Paths implementation and custom study workflows",
];

const approachSteps = [
  { title: "Clarify", description: "Name the language goals and real situations that matter most." },
  { title: "Choose", description: "Select a realistic path, not an overwhelming pile of resources." },
  { title: "Practice", description: "Build a weekly rhythm around input, output, fluency, and focused study." },
  { title: "Document", description: "Use simple evidence so progress becomes visible and adjustable." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 via-background to-background">
          <div className="container-calm">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-background/80 border-primary/20 text-muted-foreground">
                Language Learning Coaching with Kevin Duplechin
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight text-balance">
                Calm, research-informed coaching for serious language learners and teams
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                I help learners, coaches, churches, schools, nonprofits, mission teams, and organizations build
                language-learning plans that are realistic, evidence-based, and sustainable.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                  <Link to="/coaching" onClick={scrollToPageTop}>
                    View coaching opportunities
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <a href="https://calendly.com/kevin-duplechin" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    Schedule a conversation
                  </a>
                </Button>
              </div>

              <p className="mt-5 text-sm text-muted-foreground/70">
                Independent coaching available by request for individual learners, teams, churches, and organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-10 md:py-14">
          <div className="container-calm">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-start gap-5 mb-5">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Kevin Duplechin on LinkedIn"
                    className="group relative flex-shrink-0"
                  >
                    <img
                      src={kevinPhoto.url}
                      alt="Kevin Duplechin, linguist and language coach"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-border shadow-sm transition-transform group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground shadow-md ring-2 ring-background">
                      <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </a>
                  <div>
                    <p className="text-sm font-medium text-primary">Experience and background</p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                      Practical coaching shaped by real field language learning
                    </h2>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <Linkedin className="w-4 h-4" aria-hidden="true" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  My work sits at the intersection of linguistics, cross-cultural learning, coaching, and practical
                  implementation. The goal is not to impress learners with theory. The goal is to turn sound principles
                  into a path people can actually follow.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experienceHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/60">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coaching opportunities */}
        <section className="py-12 md:py-16 bg-muted/20 border-y border-border/40">
          <div className="container-calm">
            <div className="max-w-2xl mb-8">
              <Badge variant="outline" className="mb-3 text-xs border-primary/30 text-primary">
                Coaching Opportunities
              </Badge>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Ways to work together</h2>
              <p className="text-muted-foreground leading-relaxed">
                Choose the level of support that fits your situation: one-on-one planning, coach development, or focused
                Saturday training for a group.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {coachingOpportunities.map((card) => (
                <article key={card.title} className="card-calm flex flex-col h-full">
                  <div className="w-11 h-11 flex items-center justify-center bg-accent rounded-xl mb-4">
                    <card.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{card.description}</p>
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
          </div>
        </section>

        {/* Individual plans */}
        <section className="py-12 md:py-16">
          <div className="container-calm">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
              <div>
                <p className="text-sm font-medium text-primary mb-2">Individual coaching</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Simple plans with clear savings</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
                  Choose one focused reset, a short starter arc, or a fuller momentum plan with diagnosis, structure,
                  accountability, and adjustment.
                </p>
              </div>
              <Button asChild className="gap-2 lg:flex-shrink-0">
                <Link to="/coaching" onClick={scrollToPageTop}>
                  See full plan details
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planCards.map((plan) => (
                <article key={plan.title} className="bg-card rounded-xl border border-border/60 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{plan.title}</h3>
                  <p className="text-2xl font-semibold text-primary mb-2">{plan.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-accent/25 to-primary/10 border-y border-border/40">
          <div className="container-calm">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-background/80 rounded-xl border border-border">
                    <Calendar className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">Limited Saturday availability</p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                      Workshops for teams and organizations
                    </h2>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Saturday workshops are available for churches, schools, nonprofits, businesses, government teams,
                  mission organizations, and language programs that need practical language-learning systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="gap-2">
                    <Link to="/coaching#quote-contact">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      Request a workshop quote
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a href="https://calendly.com/kevin-duplechin" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      Schedule a conversation
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-background/80 border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ClipboardCheck className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-foreground">Workshop focus areas</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {workshopTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-12 md:py-16">
          <div className="container-calm">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Languages className="w-5 h-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-primary">Coaching approach</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Progress, not overwhelm</h2>
              <p className="text-muted-foreground leading-relaxed">
                The method is simple: clarify the goal, choose the right activities, practice consistently, and document
                what is actually happening.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {approachSteps.map((step, index) => (
                <div key={step.title} className="card-calm text-center py-7">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource bridge, not tools */}
        <section className="py-12 md:py-16 bg-muted/20 border-y border-border/40">
          <div className="container-calm">
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Research-informed, but practical
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My coaching draws on frameworks like ACTFL, CEFR, Canadian Language Benchmarks, the Four Strands, can-do
                planning, and evidence-based progress tracking — always translated into practical steps for real
                learners.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild variant="outline" className="gap-2 w-full sm:w-auto">
                  <Link to="/resources" onClick={scrollToPageTop}>
                    Browse learning resources
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2 w-full sm:w-auto">
                  <Link to="/standards" onClick={scrollToPageTop}>
                    <Target className="w-4 h-4" aria-hidden="true" />
                    View standards
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 pb-20 md:pb-24">
          <div className="container-calm">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ready to clarify your next step?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Start with the coaching page to compare individual plans, workshop options, quote requests, and the full
                coaching approach.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                  <Link to="/coaching" onClick={scrollToPageTop}>
                    Go to coaching page
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
                <a href="mailto:kevinduplechin7@gmail.com" className="btn-secondary-calm w-full sm:w-auto">
                  <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                  Email Kevin
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
