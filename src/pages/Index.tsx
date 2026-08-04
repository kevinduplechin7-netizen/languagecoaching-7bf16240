import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import kevinPhoto from "@/assets/kevin-duplechin.png.asset.json";
import {
  CONTACT_EMAIL,
  FOUR_STRANDS_STATEMENT,
  KEVIN_BIO,
  LINKEDIN_URL,
  SENTENCE_PATHS_URL,
  coachingPlans,
  credentialHighlights,
  fourStrands,
  sentencePathsFeatureGroups,
  sentencePathsMilestones,
  workshopOffers,
  workshopTopics,
  WORKSHOP_PRICING_NOTE,
} from "@/data/offers";

const scrollToPageTop = () => {
  window.setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, 0);
};

const coachingOpportunities = [
  {
    icon: MessageCircle,
    title: "Individual language coaching",
    description:
      "Strategy sessions and multi-session plans for learners who need clarity, structure, and realistic next steps.",
    bullets: ["Plan review and diagnosis", "Weekly rhythm design", "Resource and activity guidance"],
    href: "/coaching#coaching-plans",
  },
  {
    icon: Users,
    title: "Coach and team support",
    description:
      "Support for language coaches, field teams, and organizations that want repeatable coaching habits instead of scattered advice.",
    bullets: ["Session design", "Feedback habits", "Progress documentation"],
    href: "/coaching#coaching-plans",
  },
  {
    icon: Handshake,
    title: "Workshops for organizations",
    description:
      "Half-day and full-day workshops for churches, schools, nonprofits, businesses, mission organizations, and language programs.",
    bullets: ["Four Strands training", "Team implementation planning", "Language-helper strategy"],
    href: "/coaching#workshops",
  },
];

const Index = () => {
  usePageMeta({
    title: "Language Learning Coaching | Kevin Duplechin, Applied Linguist",
    description:
      "Private language-learning coaching and organizational workshops built on Paul Nation's Four Strands. Clear plans, real progress, no overwhelm.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 via-background to-background">
          <div className="container-calm">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-background/80 border-primary/20 text-muted-foreground">
                Applied linguist · Language-learning coach · Creator of Sentence Paths
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight text-balance">
                Language coaching that turns scattered study into a plan you can keep
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                I help learners, coaches, teams, and organizations build balanced, sustainable language-learning systems
                — grounded in applied linguistics and shaped for your real schedule.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                  <Link to="/coaching#coaching-plans" onClick={scrollToPageTop}>
                    Choose a Coaching Plan
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <Link to="/coaching#workshops" onClick={scrollToPageTop}>
                    <Handshake className="w-4 h-4" aria-hidden="true" />
                    Request a Workshop
                  </Link>
                </Button>
              </div>

              <p className="mt-5 text-sm text-muted-foreground/70">
                Coaching begins with a short request. Scheduling details are sent privately after a request is accepted.
              </p>
            </div>
          </div>
        </section>

        {/* Four Strands */}
        <section className="py-12 md:py-16 bg-muted/20 border-y border-border/40">
          <div className="container-calm">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-5 h-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-primary">The approach</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Built on Paul Nation's Four Strands
              </h2>
              <p className="text-muted-foreground leading-relaxed">{FOUR_STRANDS_STATEMENT}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fourStrands.map((strand, index) => (
                <article key={strand.title} className="card-calm h-full">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-3">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-2">{strand.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{strand.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching opportunities */}
        <section className="py-12 md:py-16">
          <div className="container-calm">
            <div className="max-w-2xl mb-8">
              <p className="text-sm font-medium text-primary mb-2">Coaching opportunities</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Ways to work together</h2>
              <p className="text-muted-foreground leading-relaxed">
                Choose the level of support that fits your situation: private coaching, coach and team development, or a
                workshop for your organization.
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
                  <ul className="space-y-2 mb-5">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={card.href}
                    onClick={scrollToPageTop}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching plans summary */}
        <section className="py-12 md:py-16 bg-muted/20 border-y border-border/40">
          <div className="container-calm">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
              <div>
                <p className="text-sm font-medium text-primary mb-2">Coaching packages</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Simple plans with clear savings</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
                  One focused session, a starter arc to build your system, or a longer plan for accountability and
                  refinement.
                </p>
              </div>
              <Button asChild className="gap-2 lg:flex-shrink-0">
                <Link to="/coaching#coaching-plans" onClick={scrollToPageTop}>
                  Choose a Coaching Plan
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coachingPlans.map((plan) => (
                <article key={plan.id} className="bg-card rounded-xl border border-border/60 p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                    {plan.badge && (
                      <Badge className="bg-primary text-primary-foreground text-xs flex-shrink-0">{plan.badge}</Badge>
                    )}
                  </div>
                  <p className="text-2xl font-semibold text-primary">{plan.price}</p>
                  {plan.savings && <p className="mt-1 text-sm font-medium text-foreground">{plan.savings}</p>}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{plan.purpose}</p>
                  <Link
                    to="/coaching#coaching-plans"
                    onClick={scrollToPageTop}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sentence Paths — major feature */}
        <section className="py-14 md:py-20">
          <div className="container-calm">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center mb-12">
              <div>
                <Badge variant="outline" className="mb-4 text-xs border-primary/30 text-primary">
                  Sentence Paths
                </Badge>
                <h2 className="text-2xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
                  A sentence-based language-learning platform for real practice volume
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Sentence Paths is built around meaningful sentences you actually want to use. Listen, read, write, and
                  speak your way through thousands of them — with your own materials, at your own pace.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  It supports the same Four Strands balance that coaching is built on, and it makes long-term effort
                  visible by counting the words and sentences you have genuinely worked through.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="gap-2">
                    <a href={SENTENCE_PATHS_URL} target="_blank" rel="noopener noreferrer">
                      Explore Sentence Paths
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link to="/coaching#coaching-plans" onClick={scrollToPageTop}>
                      Get coaching alongside it
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-border/60 bg-muted shadow-sm">
                <img
                  src="/screenshots/sentence-paths-preview.png"
                  alt="Sentence Paths showing cumulative word-volume progress toward five million words"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-base font-semibold text-foreground mb-4">Long-term word-volume milestones</h3>
              <div className="flex flex-wrap gap-2">
                {sentencePathsMilestones.map((milestone) => (
                  <span
                    key={milestone.label}
                    className="px-3 py-1.5 rounded-full bg-accent text-sm font-medium text-foreground border border-border/60"
                  >
                    {milestone.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sentencePathsFeatureGroups.map((group) => (
                <article key={group.title} className="card-calm h-full">
                  <h3 className="text-base font-semibold text-foreground mb-4">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground/80 max-w-3xl">
              Feature availability may vary by language, content, and device. Sentence Paths and coaching are separate
              offers; Sentence Paths may be incorporated into a coaching plan when appropriate.
            </p>
          </div>
        </section>

        {/* Workshops */}
        <section
          id="workshops-preview"
          className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-accent/25 to-primary/10 border-y border-border/40 scroll-mt-24"
        >
          <div className="container-calm">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
              <div>
                <p className="text-sm font-medium text-primary mb-2">For organizations</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Workshops for teams and organizations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Practical training in language-learning systems for churches, schools, nonprofits, businesses, mission
                  organizations, and language programs. Available online or in person.
                </p>

                <div className="space-y-3 mb-6">
                  {workshopOffers.map((offer) => (
                    <div key={offer.id} className="p-4 bg-background/80 border border-border rounded-xl">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-base font-semibold text-foreground">{offer.name}</h3>
                        <p className="text-sm font-semibold text-primary flex-shrink-0">{offer.price}</p>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{offer.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground/80 mb-6">{WORKSHOP_PRICING_NOTE}</p>

                <Button asChild className="gap-2">
                  <Link to="/coaching#workshops" onClick={scrollToPageTop}>
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Request a Workshop
                  </Link>
                </Button>
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

        {/* About Kevin */}
        <section className="py-12 md:py-16">
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
                      alt="Kevin Duplechin, applied linguist and language coach"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-border shadow-sm transition-transform group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground shadow-md ring-2 ring-background">
                      <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </a>
                  <div>
                    <p className="text-sm font-medium text-primary">About Kevin</p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                      Applied linguist, coach, and coach trainer
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
                <p className="text-muted-foreground leading-relaxed">{KEVIN_BIO}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentialHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/60">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 md:py-18 border-t border-border/40">
          <div className="container-calm">
            <NewsletterSignup location="homepage" className="max-w-4xl mx-auto p-6 md:p-9 border border-border rounded-lg bg-card" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 pb-20 md:pb-24 bg-muted/20 border-t border-border/40">
          <div className="container-calm">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ready to clarify your next step?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Submit a short coaching request. If it is a good fit, I will email you confirmation and private payment
                instructions, and the scheduling link follows once payment is confirmed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                  <Link to="/coaching#coaching-plans" onClick={scrollToPageTop}>
                    Choose a Coaching Plan
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <Link to="/coaching#workshops" onClick={scrollToPageTop}>
                    <Handshake className="w-4 h-4" aria-hidden="true" />
                    Request a Workshop
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground/60">{CONTACT_EMAIL}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
