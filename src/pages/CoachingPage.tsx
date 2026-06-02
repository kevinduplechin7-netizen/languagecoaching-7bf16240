import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Mail,
  Users,
  UserCog,
  Globe,
  CheckCircle2,
  BookOpen,
  Target,
  List,
  FileText,
  Sparkles,
  Smartphone,
  Eye,
  Church,
  Building2,
  Landmark,
  Languages,
  ClipboardCheck,
  Handshake,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const quoteEmail = "kevinduplechin7@gmail.com";

const quoteRequestSubject = "Saturday Workshop Quote Request";

const quoteRequestBody = `Hello,

I would like to request a Saturday workshop quote.

Organization / church name:
Type of organization:
Approximate number of participants:
Workshop interest:
- Mission trip preparation
- Local missions / immigrant or refugee ministry
- Minority-language learning
- Language-learning strategy
- Sentence Paths implementation
- Team coaching / learner support
- Other:

Preferred Saturday or timeframe:
Desired workshop length:
Additional notes:

Thank you.`;

const quoteRequestText = `To: ${quoteEmail}
Subject: ${quoteRequestSubject}

${quoteRequestBody}`;

const steps = [
  { label: "Clarify", caption: "what matters to you" },
  { label: "Choose", caption: "goals + path" },
  { label: "Practice", caption: "the right activities" },
  { label: "Evidence", caption: "track · review · adjust" },
];

const coachingCards = [
  {
    icon: Users,
    title: "Training Learners",
    description:
      "Practical coaching for real conversations. We clarify your goals, choose a simple weekly rhythm, and build confidence through targeted practice - without overwhelm.",
    bullets: ["Clear goals tied to real contexts", "Sustainable weekly plan", "Encouraging, effective feedback"],
  },
  {
    icon: UserCog,
    title: "Training Language Coaches",
    description:
      "Coach development with structure and field realism. I help teams translate research into repeatable coaching habits - with templates, session patterns, and a clear way to track progress.",
    bullets: [
      "Session design and goal-setting",
      "Feedback habits that help learners grow",
      "Coaching systems that hold up in busy seasons",
    ],
  },
  {
    icon: Globe,
    title: "Ministry and cross-cultural contexts",
    description:
      "Language learning in cross-cultural work comes with unique constraints. I help you build a plan that respects workload, relationships, and the conversations that matter most.",
    bullets: [
      "Stronger practice design",
      "Better alignment between training and real tasks",
      "Clearer progress tracking",
    ],
  },
];

const workshopAudiences = [
  { icon: Church, label: "Churches and mission teams" },
  { icon: Building2, label: "Schools, nonprofits, and businesses" },
  { icon: Landmark, label: "Government and public-service teams" },
  { icon: Languages, label: "Minority-language and helper-based programs" },
];

const workshopTopics = [
  "Mission trip language preparation",
  "Local missions, immigrant ministry, and refugee outreach",
  "Minority-language learning when apps and AI tools are limited",
  "Language-learning strategy for teams and organizations",
  "Coaching systems, learner support, and progress tracking",
  "ACTFL-style goals, can-do planning, and practical evidence of growth",
  "Sentence Paths implementation and custom study workflows",
  "Multilingual study routines for busy adults and field teams",
];

const workshopRates = [
  {
    title: "Mission Trip / Local Missions Language Workshop",
    price: "Starting at $750",
    description:
      "A focused Saturday session for churches preparing teams for mission trips, local cross-cultural ministry, refugee or immigrant outreach, or basic language-learning orientation.",
  },
  {
    title: "Half-Day Saturday Workshop",
    price: "Starting at $1,250",
    description:
      "Up to 3 hours of live training, guided planning, and practical next steps for churches, schools, nonprofits, businesses, government teams, mission organizations, or language programs.",
  },
  {
    title: "Full-Day Saturday Workshop",
    price: "Starting at $2,250",
    description: "Up to 6 hours of training, implementation planning, team exercises, and follow-up recommendations.",
  },
  {
    title: "Minority Language & Helper-Based Learning Workshop",
    price: "Starting at $1,250",
    description:
      "For teams working with languages that are not well supported by mainstream apps, AI tools, or commercial resources.",
  },
  {
    title: "Custom Saturday Intensive",
    price: "Starting at $3,500",
    description:
      "For organizations that need a deeper language-program audit, Sentence Paths implementation plan, learner-support redesign, or custom training workflow.",
  },
  {
    title: "Follow-Up Advisory Session",
    price: "$175/hour",
    description:
      "Optional follow-up support after the workshop. Best for implementation questions, review, coaching-system refinement, or next-step planning.",
  },
];

const readingPath = [
  { title: "Start here: Four Strands", href: "/resources#four-strands", icon: BookOpen },
  { title: "Choose goals: Can-do statements", href: "/standards", icon: Target },
  { title: "Pick activities", href: "/activities", icon: List },
  { title: "Track evidence", href: "/standards", icon: FileText },
];

const questions = [
  "What do you want and need to do with the language?",
  "What feels most important right now?",
  "Where do you feel stuck?",
  "What kind of support helps you most?",
];

const evidenceOptions = [
  "Goals (can-do statements)",
  "Quick practice notes",
  "Short samples (audio, writing, screenshots)",
  "Periodic review and adjustments",
];

export default function CoachingPage() {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const copyText = async (text: string, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(successMessage);
    } catch {
      setCopyStatus(`Copy this email address: ${quoteEmail}`);
    }
  };

  const copyQuoteRequest = () => {
    copyText(quoteRequestText, "Quote request copied. Paste it into your email and send it to Kevin.");
  };

  const copyEmailAddress = () => {
    copyText(quoteEmail, "Email address copied.");
  };

  const scrollToQuoteContact = () => {
    document.getElementById("quote-contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">Coaching</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Support that meets you where you are - and helps you move forward with a realistic plan you can actually
              keep.
            </p>
          </div>

          {/* Saturday Workshops */}
          <section className="mb-16 relative">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 border-2 border-primary/20 shadow-lg">
              <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow-md">
                <Handshake className="w-3 h-3 mr-1" />
                Limited Saturday Availability
              </Badge>

              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/15 rounded-xl">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Organizations, churches, and teams</p>
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        Saturday Workshops for language-learning systems
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                    Kevin Duplechin offers limited Saturday workshops for churches, schools, nonprofits, businesses,
                    government teams, mission organizations, and language programs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    With an M.A. in Linguistics and 15+ years of language-learning, field, and coaching experience with
                    Pioneer Bible Translators, Kevin helps teams build practical systems for sustainable language
                    growth.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {workshopAudiences.map((audience) => (
                      <div
                        key={audience.label}
                        className="flex items-center gap-3 p-3 bg-background/70 border border-border rounded-lg"
                      >
                        <audience.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{audience.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="button" size="lg" className="gap-2" onClick={scrollToQuoteContact}>
                      <Mail className="w-4 h-4" />
                      Request a Saturday Workshop Quote
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2">
                      <a href="https://calendly.com/kevin-duplechin" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4" />
                        Schedule a conversation
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="bg-background/80 border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ClipboardCheck className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Workshop focus areas</h3>
                  </div>
                  <ul className="space-y-3">
                    {workshopTopics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Workshop rates */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Saturday workshop rates</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl">
                  Availability is limited because Kevin's primary work is ongoing language-learning service and
                  coaching. Workshops are quoted by scope, group size, preparation needs, and follow-up requirements.
                </p>
              </div>
              <Button type="button" variant="outline" className="gap-2 md:flex-shrink-0" onClick={scrollToQuoteContact}>
                <Mail className="w-4 h-4" />
                Request a quote
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshopRates.map((rate) => (
                <article key={rate.title} className="card-calm h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{rate.title}</h3>
                  <p className="text-xl font-semibold text-primary mb-4">{rate.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{rate.description}</p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              Church and nonprofit needs vary widely. The mission-trip / local missions workshop is intended as a
              lower-entry option for focused Saturday training, while larger organization workshops, audits, and custom
              implementation projects are quoted according to scope.
            </p>
          </section>

          {/* Quote contact */}
          <section
            id="quote-contact"
            className="mb-16 p-8 bg-card rounded-xl border border-border shadow-sm scroll-mt-24"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-primary mb-2">Quote contact</p>
                <h2 className="text-xl font-semibold text-foreground mb-3">Request a Saturday Workshop Quote</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For workshop quotes, send a brief request with your organization or church name, estimated number of
                  participants, preferred Saturday or timeframe, workshop focus, and desired length.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Direct email: <span className="font-medium text-foreground">{quoteEmail}</span>
                </p>
                {copyStatus && (
                  <p className="mt-3 text-sm font-medium text-primary" role="status">
                    {copyStatus}
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-64">
                <Button type="button" className="gap-2" onClick={copyQuoteRequest}>
                  <Mail className="w-4 h-4" />
                  Copy quote request template
                </Button>
                <Button type="button" variant="outline" className="gap-2" onClick={copyEmailAddress}>
                  <ClipboardCheck className="w-4 h-4" />
                  Copy email
                </Button>
              </div>
            </div>
          </section>

          {/* Custom Language App Design - Premium Offer */}
          <section className="mb-16 relative">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 border-2 border-primary/20 shadow-lg">
              {/* Premium Badge */}
              <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow-md">
                <Sparkles className="w-3 h-3 mr-1" />
                Premium Add-on
              </Badge>

              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                {/* Left: Main content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/15 rounded-xl">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                      Want a custom app for learning your language?
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
                    I can help you design a personalized language-learning app tailored to your goals, content, and
                    learning style.
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-3 mb-8">
                    {[
                      "Your exact vocabulary + domains (work, travel, ministry, exams)",
                      "Your preferred method (reading, audio drills, stories, Anki-ready exports)",
                      "Progress tracking that matches how you actually study",
                      "Local-first / offline options available",
                      "Built around your schedule and motivation style",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="gap-2">
                      <a href="https://calendly.com/kevin-duplechin" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4" />
                        Book an App Design Session
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2">
                      <Link to="/tools">
                        <Eye className="w-4 h-4" />
                        See examples of what we can build
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right: How it works - mini steps */}
                <div className="mt-8 lg:mt-0 lg:w-72 flex-shrink-0">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    How it works
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: 1, label: "Define your language + goal" },
                      { step: 2, label: "Choose your learning loop (stories / drills / reading)" },
                      { step: 3, label: "Build your personal toolkit" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                          {item.step}
                        </span>
                        <span className="text-sm text-foreground leading-snug pt-1">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4-step success graphic */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">How you succeed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div key={step.label} className="relative card-calm text-center py-8">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-3">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.caption}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 text-muted-foreground/50 z-10" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Coaching approach */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">Coaching approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coachingCards.map((card) => (
                <article key={card.title} className="card-calm flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg">
                      <card.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{card.description}</p>
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
          </section>

          {/* Already working with me */}
          <section className="mb-16 p-8 bg-muted/30 rounded-xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-8">Already working with me?</h2>

            {/* What to read first */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-foreground mb-4">What to read first</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {readingPath.map((item, index) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* How we meet */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-foreground mb-3">How we meet</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Sessions can range from weekly to once a month, depending on your needs and bandwidth. I usually suggest
                starting more frequently, then tapering as your systems stabilize and momentum builds.
              </p>
            </div>

            {/* What I'll ask you */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-foreground mb-3">What I'll ask you</h3>
              <ul className="space-y-2">
                {questions.map((question) => (
                  <li key={question} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">·</span>
                    <span>"{question}"</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How we document progress */}
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">How we document progress</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                We'll choose a progress-tracking method that truly fits you - something that feels natural and
                motivating - and we'll keep it clear enough for both of us to use confidently in sessions and between
                sessions.
              </p>
              <p className="text-sm text-muted-foreground mb-3">Lightweight evidence options:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {evidenceOptions.map((option) => (
                  <li key={option} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground font-medium mt-4">
                We'll focus on what matters to you, document real progress, and keep moving you toward your goal.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mb-16">
            <button
              type="button"
              onClick={scrollToQuoteContact}
              className="btn-primary-calm inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Request a Saturday workshop quote
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              Quote requests: <span className="font-medium text-foreground">{quoteEmail}</span>
            </p>
          </div>

          {/* Professional Role & Independence */}
          <section className="mb-12 p-8 bg-muted/30 rounded-xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">Professional Role & Independence</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I am a language coach with Pioneer Bible Translators, where my professional work focuses on language
                development in support of Bible translation and related field activities.
              </p>
              <p>
                The language coaching services, instructional explanations, lesson designs, sentence builds, learning
                paths, and educational materials presented on this site are created independently and outside the scope
                of my assigned responsibilities with Pioneer Bible Translators.
              </p>
              <p>
                These materials are not produced as part of any Pioneer Bible Translators project, are not works made
                for hire, and do not incorporate proprietary Pioneer Bible Translators resources, Scripture texts,
                translations, or internal materials.
              </p>
              <p>
                All content on this page reflects my personal research, experience, and pedagogical design and is
                offered in a private, independent capacity.
              </p>
              <p className="font-medium text-foreground">
                No endorsement, review, or ownership by Pioneer Bible Translators is implied.
              </p>
            </div>
          </section>

          {/* Intellectual Foundations & Attribution */}
          <section className="mb-12 p-8 bg-muted/30 rounded-xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">Intellectual Foundations & Attribution</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>My coaching approach is informed by:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Cross-cultural language training frameworks developed through the Wheaton Institute for Cross-Cultural
                  Training
                </li>
                <li>
                  Research in second language acquisition, including the work of Paul Nation on comprehensible input,
                  frequency-based learning, and extensive exposure
                </li>
                <li>My own applied experience working with languages in real-world, cross-cultural environments</li>
              </ul>
              <p>
                These influences inform the principles behind my approach. All instructional materials and expressions
                presented here are original works authored by me.
              </p>
            </div>
          </section>

          {/* Copyright Notice */}
          <section className="mb-12 p-8 bg-muted/30 rounded-xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">Copyright Notice</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p className="font-medium text-foreground">© 2026 Kevin Duplechin. All rights reserved.</p>
              <p>
                All instructional text, lesson structures, explanations, learning paths, and materials presented here
                are the intellectual property of Kevin Duplechin and are protected under United States copyright law.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
