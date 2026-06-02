import { FormEvent, useState } from "react";
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
  Church,
  Building2,
  Landmark,
  Languages,
  ClipboardCheck,
  Handshake,
  Send,
  MessageSquareText,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const quoteEmail = "kevinduplechin7@gmail.com";

// Formspree endpoint for coaching and workshop requests.
const contactFormEndpoint = "https://formspree.io/f/xpqeaply";

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

const individualCoachingSubject = "Individual Coaching Plan Request";

const individualCoachingBody = `Hello,

I would like to ask about individual language coaching.

Name:
Language or languages:
Current level or background:
Main goal:
Plan interest:
- Single Strategy Session ($150)
- 3-Session Starter Plan ($375, save $75)
- 6-Session Momentum Plan ($675, save $225)
- Not sure yet

What feels stuck or unclear right now:
Preferred timeframe:
Additional notes:

Thank you.`;

const individualCoachingText = `To: ${quoteEmail}
Subject: ${individualCoachingSubject}

${individualCoachingBody}`;

const requestTypes = [
  "Individual coaching",
  "Saturday workshop quote",
  "Mission trip / local missions workshop",
  "Minority-language or helper-based learning",
  "Sentence Paths implementation",
  "Organization or team training",
  "General question",
];

const messageTemplates = {
  individual: {
    label: "Individual coaching request",
    requestType: "Individual coaching",
    message: `Hello Kevin,

I would like to ask about individual language coaching.

Language or languages:
Current level or background:
Main goal:
Plan interest:
- Single Strategy Session ($150)
- 3-Session Starter Plan ($375, save $75)
- 6-Session Momentum Plan ($675, save $225)
- Not sure yet

What feels stuck or unclear right now:
Preferred timeframe:
Additional notes:

Thank you.`,
  },
  workshop: {
    label: "Saturday workshop quote",
    requestType: "Saturday workshop quote",
    message: quoteRequestBody,
  },
  mission: {
    label: "Mission trip / local missions workshop",
    requestType: "Mission trip / local missions workshop",
    message: `Hello Kevin,

I would like to ask about a mission trip or local missions language workshop.

Church / organization name:
Type of ministry or outreach:
Approximate number of participants:
Language or cultural context, if known:
Preferred Saturday or timeframe:
Desired workshop length:
Main goals for the team:
Additional notes:

Thank you.`,
  },
  minority: {
    label: "Minority-language / helper-based learning",
    requestType: "Minority-language or helper-based learning",
    message: `Hello Kevin,

I would like help with a minority-language or helper-based language-learning situation.

Language or region:
Learner background:
Available resources or language helpers:
Main problem we are trying to solve:
Preferred timeframe:
Desired kind of support:
Additional notes:

Thank you.`,
  },
  sentencePaths: {
    label: "Sentence Paths implementation",
    requestType: "Sentence Paths implementation",
    message: `Hello Kevin,

I would like to ask about Sentence Paths implementation or a custom language-learning workflow.

Learner or organization context:
Language or languages:
Current materials:
Main goal:
What we want Sentence Paths to help with:
Preferred timeframe:
Additional notes:

Thank you.`,
  },
  organization: {
    label: "Organization or team training",
    requestType: "Organization or team training",
    message: `Hello Kevin,

I would like to ask about language-learning training for an organization or team.

Organization name:
Type of organization:
Approximate number of participants:
Learner roles or backgrounds:
Training need:
Preferred Saturday or timeframe:
Desired length:
Additional notes:

Thank you.`,
  },
  blank: {
    label: "Blank message",
    requestType: "General question",
    message: `Hello Kevin,

I would like to ask about:

Thank you.`,
  },
};

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

const individualPlans = [
  {
    title: "Single Strategy Session",
    price: "$150",
    savings: "Baseline rate",
    description:
      "One focused session to clarify your next step, review your current study plan, troubleshoot a problem, or choose a better learning path.",
    bestFor: "A learner who needs one clear decision or one practical reset.",
    includes: ["Study-plan review", "Resource and method guidance", "A clear next-step recommendation"],
  },
  {
    title: "3-Session Starter Plan",
    price: "$375",
    savings: "Save $75 compared with three single sessions",
    description: "A short coaching arc for learners who feel stuck, scattered, or unsure what to do next.",
    bestFor: "A learner who needs a clear plan, better resources, and a realistic weekly rhythm.",
    includes: [
      "Session 1 - language learning audit",
      "Session 2 - custom weekly plan and activity rhythm",
      "Session 3 - review, adjust, and next-step strategy",
    ],
  },
  {
    title: "6-Session Momentum Plan",
    price: "$675",
    savings: "Save $225 compared with six single sessions",
    description: "A fuller coaching arc for learners who want support while building a sustainable language routine.",
    bestFor:
      "A serious self-directed learner who wants diagnosis, structure, accountability, and adjustment after real practice.",
    includes: [
      "Language learning audit",
      "Goal and can-do planning",
      "Custom weekly rhythm",
      "Resource and method selection",
      "Accountability check-ins",
      "Final next-steps plan",
    ],
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

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function CoachingPage() {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [templateKey, setTemplateKey] = useState<keyof typeof messageTemplates>("individual");
  const [requestType, setRequestType] = useState(messageTemplates.individual.requestType);
  const [message, setMessage] = useState(messageTemplates.individual.message);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formNotice, setFormNotice] = useState<string | null>(null);

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

  const copyIndividualCoachingRequest = () => {
    copyText(
      individualCoachingText,
      "Individual coaching request copied. Paste it into your email and send it to Kevin.",
    );
  };

  const copyEmailAddress = () => {
    copyText(quoteEmail, "Email address copied.");
  };

  const copyCurrentFormMessage = () => {
    copyText(message, "Message copied. You can paste it into your email if the form does not submit.");
  };

  const handleTemplateChange = (value: keyof typeof messageTemplates) => {
    const selectedTemplate = messageTemplates[value];
    setTemplateKey(value);
    setRequestType(selectedTemplate.requestType);
    setMessage(selectedTemplate.message);
    setFormStatus("idle");
    setFormNotice(null);
  };

  const handleContactFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCopyStatus(null);
    setFormNotice(null);

    if (contactFormEndpoint.includes("YOUR_FORM_ID")) {
      setFormStatus("error");
      setFormNotice(
        "Form endpoint is not configured yet. Create a Formspree form, replace YOUR_FORM_ID in this file, then redeploy. The copy buttons still work.",
      );
      return;
    }

    setFormStatus("sending");

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("_subject", `Language Coaching Website Request - ${requestType}`);
      formData.append("selected_template", messageTemplates[templateKey].label);

      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setFormStatus("sent");
      setFormNotice("Thank you. Your request was sent to Kevin. He will reply by email.");
      event.currentTarget.reset();
      handleTemplateChange("individual");
    } catch {
      setFormStatus("error");
      setFormNotice(
        "The form could not send. Please copy the message or email Kevin directly at kevinduplechin7@gmail.com.",
      );
    }
  };

  const scrollToQuoteContact = () => {
    document.getElementById("quote-contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContactForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
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
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button type="button" className="gap-2" onClick={scrollToContactForm}>
                <Send className="w-4 h-4" />
                Send a coaching request
              </Button>
              <Button type="button" variant="outline" className="gap-2" onClick={scrollToQuoteContact}>
                <Mail className="w-4 h-4" />
                Workshop quote details
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <section
            id="contact-form"
            className="mb-16 p-8 md:p-10 bg-card rounded-2xl border border-border shadow-sm scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  <MessageSquareText className="w-3.5 h-3.5" />
                  Simple request form
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Tell Kevin what you need</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Choose a request type, optionally load a starter template, edit the message, and send it from this
                  page. Kevin will reply by email.
                </p>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">Setup note</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This form is coded for Formspree. Replace{" "}
                    <span className="font-mono text-foreground">YOUR_FORM_ID</span> in this file with your real
                    Formspree endpoint before publishing.
                  </p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleContactFormSubmit}>
                <input type="hidden" name="send_to" value={quoteEmail} />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground">Name</span>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground">Email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Organization, church, or team</span>
                  <input
                    name="organization"
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Optional"
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground">Request type</span>
                    <select
                      required
                      name="request_type"
                      value={requestType}
                      onChange={(event) => setRequestType(event.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      {requestTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground">Use a starter template</span>
                    <select
                      value={templateKey}
                      onChange={(event) => handleTemplateChange(event.target.value as keyof typeof messageTemplates)}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      {Object.entries(messageTemplates).map(([key, template]) => (
                        <option key={key} value={key}>
                          {template.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Preferred timeframe</span>
                  <input
                    name="preferred_timeframe"
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Optional: preferred Saturday, month, or general timeframe"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Message</span>
                  <textarea
                    required
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={13}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>

                {formNotice && (
                  <p
                    className={`text-sm font-medium ${formStatus === "sent" ? "text-primary" : "text-destructive"}`}
                    role="status"
                  >
                    {formNotice}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" className="gap-2" disabled={formStatus === "sending"}>
                    <Send className="w-4 h-4" />
                    {formStatus === "sending" ? "Sending..." : "Send request to Kevin"}
                  </Button>
                  <Button type="button" variant="outline" className="gap-2" onClick={copyCurrentFormMessage}>
                    <ClipboardCheck className="w-4 h-4" />
                    Copy message
                  </Button>
                  <Button type="button" variant="ghost" className="gap-2" onClick={copyEmailAddress}>
                    <Mail className="w-4 h-4" />
                    Copy email
                  </Button>
                </div>

                {copyStatus && (
                  <p className="text-sm font-medium text-primary" role="status">
                    {copyStatus}
                  </p>
                )}
              </form>
            </div>
          </section>

          {/* Individual coaching plans */}
          <section className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-medium text-primary mb-2">For individual learners</p>
                <h2 className="text-xl font-semibold text-foreground">Individual coaching plans</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl">
                  Short coaching packages for learners who want clarity, structure, and a plan they can actually keep.
                  Packages are discounted for learners who want a coaching arc instead of one-off advice.
                </p>
              </div>
              <Button type="button" variant="outline" className="gap-2 lg:flex-shrink-0" onClick={scrollToContactForm}>
                <Mail className="w-4 h-4" />
                Ask about individual coaching
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {individualPlans.map((plan) => (
                <article key={plan.title} className="card-calm h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{plan.title}</h3>
                      <p className="text-2xl font-semibold text-primary">{plan.price}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs leading-snug text-center max-w-32">
                      {plan.savings}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{plan.description}</p>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border mb-5">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Best for</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{plan.bestFor}</p>
                  </div>
                  <ul className="mt-auto space-y-2">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

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
                    <Button type="button" size="lg" className="gap-2" onClick={scrollToContactForm}>
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
              <Button type="button" variant="outline" className="gap-2 md:flex-shrink-0" onClick={scrollToContactForm}>
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
                  For workshop quotes, use the form above or send a brief request with your organization or church name,
                  estimated number of participants, preferred Saturday or timeframe, workshop focus, and desired length.
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
                <Button type="button" className="gap-2" onClick={scrollToContactForm}>
                  <Send className="w-4 h-4" />
                  Fill out request form
                </Button>
                <Button type="button" variant="outline" className="gap-2" onClick={copyQuoteRequest}>
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
              onClick={scrollToContactForm}
              className="btn-primary-calm inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              Send a coaching or workshop request
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              Direct email: <span className="font-medium text-foreground">{quoteEmail}</span>
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
