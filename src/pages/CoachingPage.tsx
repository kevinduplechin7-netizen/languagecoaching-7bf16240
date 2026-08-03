import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Layers,
  Mail,
  Send,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { usePageMeta } from "@/hooks/usePageMeta";
import {
  ACKNOWLEDGMENT_TEXT,
  CONTACT_EMAIL,
  FORMSPREE_ENDPOINT,
  FOUR_STRANDS_STATEMENT,
  KEVIN_BIO,
  WORKSHOP_PRICING_NOTE,
  coachingFaqs,
  coachingPlans,
  coachingSteps,
  credentialHighlights,
  fourStrands,
  getPlanById,
  levelOptions,
  organizationTypes,
  workshopAudiences,
  workshopOffers,
  workshopTopics,
} from "@/data/offers";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary";

type SubmitState = "idle" | "sending" | "sent";

export default function CoachingPage() {
  const { toast } = useToast();
  const location = useLocation();

  usePageMeta({
    title: "Language Coaching & Workshops | Kevin Duplechin",
    description:
      "Private language-learning coaching packages and organizational workshops. Request coaching, receive private payment instructions, then schedule your session.",
  });

  const [selectedPlan, setSelectedPlan] = useState<string>(coachingPlans[1].id);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string>(workshopOffers[0].optionLabel);
  const [coachingState, setCoachingState] = useState<SubmitState>("idle");
  const [workshopState, setWorkshopState] = useState<SubmitState>("idle");

  const coachingFormRef = useRef<HTMLDivElement>(null);
  const workshopFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  const choosePlan = (planId: string) => {
    setSelectedPlan(planId);
    coachingFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const chooseWorkshop = (optionLabel: string) => {
    setSelectedWorkshop(optionLabel);
    workshopFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitForm = async (
    event: React.FormEvent<HTMLFormElement>,
    setState: (state: SubmitState) => void,
    successMessage: string,
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setState("sent");
      form.reset();
      toast({ title: "Request received", description: successMessage });
    } catch (error) {
      setState("idle");
      toast({
        title: "Could not send the request",
        description: `Please email ${CONTACT_EMAIL} directly and I will follow up.`,
        variant: "destructive",
      });
      console.error("Form submission failed:", error);
    }
  };

  const activePlan = getPlanById(selectedPlan);

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

          {/* Hero */}
          <section className="mb-14 max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-accent text-muted-foreground">
              Language-learning coaching
            </Badge>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">
              Coaching that builds a language-learning system you can actually keep
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Whether you feel stuck, scattered, or simply unsure where to start, coaching gives you an informed plan,
              practical activities, and steady accountability. You do not need to arrive with a plan — building one is
              part of the work.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="gap-2">
                <a href="#coaching-plans">
                  Choose a Coaching Plan
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#workshops">
                  <Handshake className="w-4 h-4" aria-hidden="true" />
                  Request a Workshop
                </a>
              </Button>
            </div>
          </section>

          {/* Four Strands */}
          <section className="mb-16">
            <div className="max-w-2xl mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-5 h-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-primary">The framework behind the coaching</p>
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Paul Nation's Four Strands</h2>
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
          </section>

          {/* How it works */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-2">How coaching works</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Submitting a request does not schedule a meeting. Scheduling happens after your request is accepted and
              payment is confirmed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coachingSteps.map((step, index) => (
                <div key={step.title} className="card-calm h-full">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-3">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Coaching plans */}
          <section id="coaching-plans" className="mb-16 scroll-mt-24">
            <div className="max-w-2xl mb-6">
              <p className="text-sm font-medium text-primary mb-2">For individual learners</p>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Coaching packages</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every package includes personalized guidance grounded in the Four Strands. Multi-session plans are
                discounted compared with booking single sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {coachingPlans.map((plan) => (
                <article
                  key={plan.id}
                  className={`card-calm h-full flex flex-col ${
                    selectedPlan === plan.id ? "ring-2 ring-primary/40" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                    {plan.badge && (
                      <Badge className="bg-primary text-primary-foreground text-xs flex-shrink-0">{plan.badge}</Badge>
                    )}
                  </div>
                  <p className="text-3xl font-semibold text-primary">{plan.price}</p>
                  {plan.savings && (
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {plan.savings} compared with single sessions
                    </p>
                  )}
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.purpose}</p>

                  <ul className="mt-5 space-y-2">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button type="button" className="mt-6 w-full gap-2" onClick={() => choosePlan(plan.id)}>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </article>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground/80 max-w-3xl">
              Coaching supports your learning process. No specific proficiency level, score, or timeline is guaranteed.
              Results depend on consistency, available time, opportunities for meaningful language use, resources, prior
              experience, and the language being learned.
            </p>
          </section>

          {/* Coaching request form */}
          <section
            id="coaching-request"
            ref={coachingFormRef}
            className="mb-16 p-6 md:p-8 bg-card rounded-xl border border-border shadow-sm scroll-mt-24"
          >
            <div className="max-w-2xl mb-6">
              <p className="text-sm font-medium text-primary mb-2">Step 1 of 3</p>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Request coaching</h2>
              <p className="text-muted-foreground leading-relaxed">
                A short request is all that is needed. If your selected package is a good fit, I will email you
                confirmation and private payment instructions.
              </p>
              {activePlan && (
                <p className="mt-3 text-sm text-foreground">
                  Selected: <span className="font-semibold">{activePlan.name}</span> — {activePlan.price}
                </p>
              )}
            </div>

            <form
              className="space-y-5 max-w-2xl"
              onSubmit={(event) =>
                submitForm(
                  event,
                  setCoachingState,
                  "Thank you. Your coaching request has been received. I will email you next steps.",
                )
              }
            >
              <input type="hidden" name="form_type" value="Coaching request" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Name</span>
                  <input required name="name" type="text" maxLength={100} className={inputClass} placeholder="Your name" />
                </label>
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    maxLength={255}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Language you are learning</span>
                  <input
                    required
                    name="language"
                    type="text"
                    maxLength={100}
                    className={inputClass}
                    placeholder="e.g. Spanish, Tok Pisin"
                  />
                </label>
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Current level</span>
                  <select required name="level" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select your level
                    </option>
                    {levelOptions.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground">Selected package</span>
                <select
                  required
                  name="package"
                  value={selectedPlan}
                  onChange={(event) => setSelectedPlan(event.target.value)}
                  className={inputClass}
                >
                  {coachingPlans.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} — {plan.price}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground">
                  What do you hope to accomplish, and where do you need help?
                </span>
                <textarea
                  required
                  name="goals"
                  rows={5}
                  maxLength={2000}
                  className={inputClass}
                  placeholder="A few sentences is enough. It is fine if you are unsure where to begin."
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <input
                  required
                  type="checkbox"
                  name="acknowledgment"
                  value="acknowledged"
                  className="mt-1 h-4 w-4 rounded border-border accent-primary flex-shrink-0"
                />
                <span>{ACKNOWLEDGMENT_TEXT}</span>
              </label>

              <Button type="submit" className="gap-2" disabled={coachingState === "sending"}>
                <Send className="w-4 h-4" aria-hidden="true" />
                {coachingState === "sending" ? "Sending..." : "Submit coaching request"}
              </Button>

              {coachingState === "sent" && (
                <p className="text-sm font-medium text-primary" role="status">
                  Thank you. Your coaching request has been received. I will review it and email you next steps.
                </p>
              )}
            </form>
          </section>

          {/* Workshops */}
          <section id="workshops" className="mb-16 scroll-mt-24">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 border-2 border-primary/20 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
                <div>
                  <p className="text-sm font-medium text-primary mb-2">Organizations, churches, and teams</p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Language-learning workshops
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    Practical training that helps a group build shared language-learning systems instead of relying on
                    scattered individual effort. Available online or in person.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {workshopAudiences.map((audience) => (
                      <div
                        key={audience}
                        className="flex items-center gap-3 p-3 bg-background/70 border border-border rounded-lg"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm font-medium text-foreground">{audience}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {workshopOffers.map((offer) => (
                      <article key={offer.id} className="p-5 bg-background/85 border border-border rounded-xl flex flex-col">
                        <h3 className="text-base font-semibold text-foreground mb-1">{offer.name}</h3>
                        <p className="text-xl font-semibold text-primary mb-3">{offer.price}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{offer.description}</p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-auto gap-2"
                          onClick={() => chooseWorkshop(offer.optionLabel)}
                        >
                          {offer.cta}
                        </Button>
                      </article>
                    ))}
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground/85 max-w-2xl">{WORKSHOP_PRICING_NOTE}</p>
                </div>

                <div className="bg-background/80 border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ClipboardCheck className="w-5 h-5 text-primary" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-foreground">Workshop topics</h3>
                  </div>
                  <ul className="space-y-3">
                    {workshopTopics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Workshop inquiry form */}
          <section
            id="workshop-inquiry"
            ref={workshopFormRef}
            className="mb-16 p-6 md:p-8 bg-card rounded-xl border border-border shadow-sm scroll-mt-24"
          >
            <div className="max-w-2xl mb-6">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Request a workshop</h2>
              <p className="text-muted-foreground leading-relaxed">
                Send a brief request and I will follow up with availability, scope, and a quote. Submitting this form
                does not schedule a workshop.
              </p>
            </div>

            <form
              className="space-y-5 max-w-2xl"
              onSubmit={(event) =>
                submitForm(
                  event,
                  setWorkshopState,
                  "Thank you. Your workshop request has been received. I will follow up by email.",
                )
              }
            >
              <input type="hidden" name="form_type" value="Workshop inquiry" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Name</span>
                  <input required name="name" type="text" maxLength={100} className={inputClass} placeholder="Your name" />
                </label>
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    maxLength={255}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Organization name</span>
                  <input
                    required
                    name="organization"
                    type="text"
                    maxLength={150}
                    className={inputClass}
                    placeholder="Church, school, team, or organization"
                  />
                </label>
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Organization type</span>
                  <select required name="organization_type" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a type
                    </option>
                    {organizationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Approximate group size</span>
                  <input
                    required
                    name="group_size"
                    type="text"
                    maxLength={50}
                    className={inputClass}
                    placeholder="e.g. 12-20 people"
                  />
                </label>
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-foreground">Preferred timeframe</span>
                  <input
                    name="preferred_timeframe"
                    type="text"
                    maxLength={100}
                    className={inputClass}
                    placeholder="Optional: month, season, or date range"
                  />
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground">Workshop length</span>
                <select
                  required
                  name="workshop_length"
                  value={selectedWorkshop}
                  onChange={(event) => setSelectedWorkshop(event.target.value)}
                  className={inputClass}
                >
                  {workshopOffers.map((offer) => (
                    <option key={offer.id} value={offer.optionLabel}>
                      {offer.optionLabel}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground">Goals or focus areas</span>
                <textarea
                  required
                  name="goals"
                  rows={5}
                  maxLength={2000}
                  className={inputClass}
                  placeholder="What would you like your group to walk away with?"
                />
              </label>

              <Button type="submit" className="gap-2" disabled={workshopState === "sending"}>
                <Send className="w-4 h-4" aria-hidden="true" />
                {workshopState === "sending" ? "Sending..." : "Submit workshop request"}
              </Button>

              {workshopState === "sent" && (
                <p className="text-sm font-medium text-primary" role="status">
                  Thank you. Your workshop request has been received. I will follow up by email.
                </p>
              )}
            </form>
          </section>

          {/* About Kevin */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-3">About Kevin</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">{KEVIN_BIO}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {credentialHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/60">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl">
              {coachingFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Final CTA */}
          <section className="mb-16 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-3">Ready to begin?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
              Submit a short request. If it is a good fit, I will email you confirmation and private payment
              instructions, followed by the scheduling link once payment is confirmed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="gap-2">
                <a href="#coaching-request">
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Choose a Coaching Plan
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#workshop-inquiry">
                  <Handshake className="w-4 h-4" aria-hidden="true" />
                  Request a Workshop
                </a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground inline-flex items-center gap-2 justify-center">
              <Mail className="w-4 h-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </p>
          </section>

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
                  Paul Nation's Four Strands framework for balanced language-learning course design (Nation, 2007,{" "}
                  <em>Innovation in Language Learning and Teaching</em>)
                </li>
                <li>
                  Cross-cultural language training frameworks developed through the Wheaton Institute for Cross-Cultural
                  Training
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
          <section className="p-8 bg-muted/30 rounded-xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">Copyright Notice</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p className="font-medium text-foreground">
                © {new Date().getFullYear()} Kevin Duplechin. All rights reserved.
              </p>
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
