import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Check, Printer, RefreshCw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { checkupQuestions, strandExplanations, strandNames, strandRecommendations, type StrandId } from "@/data/learnerCheckup";
import { buildAdaptivePlan, planEmphasis, planKey, PLAN_SOURCES } from "@/data/adaptivePlans";
import { usePageMeta } from "@/hooks/usePageMeta";
import { captureUtmParameters, getUtmParameters, trackFunnelEvent } from "@/lib/funnelAnalytics";

type Scores = Record<StrandId, number>;
const emptyScores: Scores = { MFI: 0, MFO: 0, LFL: 0, FD: 0 };

export default function CheckupPage() {
  const [step, setStep] = useState<"intro" | "questions" | "results">("intro");
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(emptyScores);

  usePageMeta({
    title: "Four Strands Learner Checkup | Kevin Duplechin",
    description: "Take a free 12-question language-learning checkup and get immediate Four Strands results plus a seven-day action plan.",
  });

  useEffect(() => {
    captureUtmParameters();
    void trackFunnelEvent("checkup_landing_viewed");
  }, []);

  const percentages = useMemo(() =>
    (Object.keys(scores) as StrandId[]).reduce<Scores>((result, id) => {
      result[id] = Math.round((scores[id] / 9) * 100);
      return result;
    }, { ...emptyScores }), [scores]);

  const ranked = useMemo(() =>
    (Object.keys(percentages) as StrandId[]).sort((a, b) => percentages[b] - percentages[a]), [percentages]);

  const answer = (score: number) => {
    const question = checkupQuestions[index];
    const nextScores = { ...scores, [question.strand]: scores[question.strand] + score };
    setScores(nextScores);
    void trackFunnelEvent("checkup_question_answered", { question_id: question.id, strand: question.strand });
    if (index === checkupQuestions.length - 1) {
      setStep("results");
      void trackFunnelEvent("checkup_completed", { utm_source: getUtmParameters().source });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else setIndex(index + 1);
  };

  const restart = () => {
    setScores(emptyScores);
    setIndex(0);
    setStep("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container-calm">
          {step === "intro" && (
            <section className="max-w-3xl mx-auto py-10 text-center fade-in">
              <BarChart3 className="w-9 h-9 text-primary mx-auto mb-5" aria-hidden="true" />
              <p className="text-sm font-medium text-primary mb-3">Individual learner checkup</p>
              <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight text-balance">
                See how balanced your language-learning plan is
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Answer 12 practical questions based on Paul Nation’s Four Strands. Your scores, recommendations, and
                seven-day plan appear immediately—no email required.
              </p>
              {getUtmParameters().source === "sentencepaths" && (
                <p className="mt-5 p-4 bg-accent text-accent-foreground rounded-lg text-sm">
                  Welcome from Sentence Paths. This checkup can help you decide how sentence practice fits into a balanced week.
                </p>
              )}
              <Button className="mt-8" size="lg" onClick={() => { setStep("questions"); void trackFunnelEvent("checkup_started"); }}>
                Start the free checkup <ArrowRight aria-hidden="true" />
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">About 4 minutes · Private · Immediate results</p>
            </section>
          )}

          {step === "questions" && (
            <section className="max-w-2xl mx-auto py-8 fade-in">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <span>Question {index + 1} of {checkupQuestions.length}</span>
                <span>{strandNames[checkupQuestions[index].strand]}</span>
              </div>
              <Progress value={((index + 1) / checkupQuestions.length) * 100} className="h-2 mb-3" />
              <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                {strandExplanations[checkupQuestions[index].strand]}
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                {checkupQuestions[index].prompt}
              </h1>
              <p className="mt-3 p-4 bg-muted/40 border border-border rounded-lg text-sm text-muted-foreground leading-relaxed">
                {checkupQuestions[index].helper}
              </p>
              <div className="mt-7 grid gap-3">
                {checkupQuestions[index].options.map((option) => (
                  <Button key={option.label} variant="outline" className="h-auto min-h-14 justify-between whitespace-normal py-3 text-left" onClick={() => answer(option.score)}>
                    <span>{option.label}</span><ArrowRight aria-hidden="true" />
                  </Button>
                ))}
              </div>
            </section>
          )}

          {step === "results" && (
            <div className="max-w-4xl mx-auto fade-in print:max-w-none">
              <section className="text-center py-6 print:py-0">
                <p className="text-sm font-medium text-primary mb-2">Your Four Strands checkup</p>
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">A clearer plan for your next week</h1>
                <div className="mt-6 flex flex-wrap justify-center gap-3 print:hidden">
                  <Button variant="outline" onClick={() => window.print()}><Printer aria-hidden="true" /> Print results</Button>
                  <Button variant="ghost" onClick={restart}><RefreshCw aria-hidden="true" /> Retake</Button>
                </div>
              </section>

              <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6" aria-label="All four strand scores">
                {(Object.keys(percentages) as StrandId[]).map((id) => (
                  <article key={id} className="card-calm">
                    <p className="text-sm text-muted-foreground">{strandNames[id]}</p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">{percentages[id]}%</p>
                    <Progress value={percentages[id]} className="h-2 mt-3" />
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{strandExplanations[id]}</p>
                  </article>
                ))}
              </section>

              <section className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 border border-border rounded-lg bg-card">
                  <p className="text-sm text-muted-foreground">Strongest strand</p>
                  <h2 className="mt-1 text-xl font-semibold text-foreground">{strandNames[ranked[0]]}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Keep this strength in your week while making room for the strand that needs attention.</p>
                </div>
                <div className="p-6 border border-primary/30 rounded-lg bg-accent/30">
                  <p className="text-sm text-muted-foreground">Weakest strand</p>
                  <h2 className="mt-1 text-xl font-semibold text-foreground">{strandNames[ranked[ranked.length - 1]]}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">This is the clearest place to make a small, focused adjustment first.</p>
                </div>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-foreground">Personalized recommendations</h2>
                <div className="mt-4 grid md:grid-cols-2 gap-5">
                  {ranked.slice(-2).reverse().map((id) => (
                    <article key={id} className="p-6 border border-border rounded-lg">
                      <h3 className="font-semibold text-foreground">Strengthen {strandNames[id].toLowerCase()}</h3>
                      <ul className="mt-3 space-y-3">
                        {strandRecommendations[id].map((item) => <li key={item} className="flex gap-2 text-sm text-muted-foreground leading-relaxed"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />{item}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mt-10 p-6 md:p-8 bg-muted/30 border-y border-border print:border print:rounded-lg">
                <h2 className="text-2xl font-semibold text-foreground">Seven-day sample plan</h2>
                <ol className="mt-5 grid gap-3">
                  {sevenDayPlan.map((day) => <li key={day} className="text-sm text-muted-foreground leading-relaxed">{day}</li>)}
                </ol>
              </section>

              <NewsletterSignup location="checkup_results" className="mt-10 p-6 md:p-8 border border-border rounded-lg print:hidden" />

              <section className="mt-10 text-center print:hidden">
                <h2 className="text-xl font-semibold text-foreground">Want a quiet second set of eyes on your plan?</h2>
                <p className="mt-2 text-muted-foreground">Coaching can help turn these results into a realistic routine for your language, context, and schedule.</p>
                <Button asChild className="mt-5" onClick={() => void trackFunnelEvent("checkup_coaching_clicked")}>
                  <Link to="/coaching#coaching-plans">Explore coaching plans <ArrowRight aria-hidden="true" /></Link>
                </Button>
              </section>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}